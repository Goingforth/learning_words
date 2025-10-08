import { useState, useEffect, type FC } from "react";
import pako from "pako";
import { apiPutNewGlossary } from "../../../../api/glossary.service/index";

import styles from "./NewGlossary.module.scss";

//import styles from "./Txt_to_json.module.scss";

export interface TxtToJsonProps {
  word: string;
  transcription: string;
  translation?: string;
  // Define any props if needed
}

const NewGlossary: FC = () => {
  const [content, setContent] = useState<string>("");
  const [isNewGlossary, setIsNewGlossary] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (content !== "") {
        setIsLoading(true);
        const result = await apiPutNewGlossary(content);
        setIsLoading(false);
        setIsNewGlossary(result);
        setIsView(true);
      }
    };
    fetchData();
  }, [content]);

  const FileToString = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target?.result as string; // Cast to string for text files
      // Process the file content (e.g., update state, display in UI)
      const out = fileContent.split("\r\n").filter((item) => item !== "");
      const data = out.map((item) => {
        return {
          word: item.substring(0, item.indexOf("[")),
          transcription: item.substring(
            item.indexOf("["),
            item.indexOf("]") + 1
          ),
          translation:
            item.indexOf("—") !== -1
              ? item.substring(item.indexOf("—") + 1, item.length)
              : "",
        };
      });
      const jsonStringData = JSON.stringify(data);
      const compressedData = pako.gzip(jsonStringData);
      const base64String = btoa(String.fromCharCode(...compressedData));
      setContent(base64String);
    };
    reader.onerror = (e) => {
      console.error("Error reading file:", e);
    };

    reader.readAsText(file); // Or reader.readAsDataURL(file) for images, etc.
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      FileToString(file);
    }
  };
  return (
    <div className={styles.container}>
      <h3>Add new glossary</h3>

      <p>Upload a file</p>
      <input
        type='file'
        name='myfile'
        onChange={handleFileChange}
        onClick={() => {
          setIsNewGlossary(false);
          setIsView(false);
        }}
        className={styles.change}
      />
      {isView && (
        <div>
          {isLoading && <p>Glossary loading ...</p>}
          {isNewGlossary && <p>Glossary creating</p>}
          {!isNewGlossary && <p>Glossary not creating</p>}
        </div>
      )}
    </div>
  );
};

export default NewGlossary;
