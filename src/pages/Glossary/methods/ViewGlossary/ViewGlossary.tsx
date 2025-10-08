import { type FC, useState } from "react";
import { apiViewGlossary } from "../../../../api/glossary.service";
import { Speak_eng } from "../../../../utils";
import styles from "./ViewGlossary.module.scss";

const ViewGlossary: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const onClick = async () => {
    const result = await apiViewGlossary();
    setData(result);
  };
  return (
    <div className={styles.container}>
      <h3>View glossary</h3>
      <p>This will view all words in the current glossary.</p>
      <button type='button' onClick={() => onClick()}>
        View glossary
      </button>
      <p>Quantity words : {data.length}</p>
      <div>
        {data &&
          data.map((item) => (
            <div key={`item${item.word_id}`} className={styles.result}>
              <p className={styles.id}>{item.word_id}</p>
              <p onClick={() => Speak_eng(item.word)} className={styles.word}>
                {item.word}
              </p>
              <p>{item.transcription}</p>
              <p>{item.translation}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ViewGlossary;
