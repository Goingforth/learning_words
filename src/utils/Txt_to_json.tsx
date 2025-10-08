import { useState, useEffect, type FC } from "react";
import pako from "pako";
import { putNewGlossary } from "../api/glossary.service/index";

//import styles from "./Txt_to_json.module.scss";

export interface TxtToJsonProps {
  word: string;
  transcription: string;
  translation?: string;
  // Define any props if needed
}

const Txt_to_json: FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (content !== "") {
      putNewGlossary(content);
    }
  }, [content]);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
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
    }
  };

  return (
    <div className='App'>
      {/* <div>
        <button>Upload a file</button>
        <input type='file' name='myfile' onChange={handleFileChange} />
      </div> */}
      {/* <div>
        <button onClick={() => clearGlossary()}>Clear glossary</button>
      </div> */}
    </div>
  );
};

export default Txt_to_json;
