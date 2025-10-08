import { type FC, useState } from "react";
import { apiClearGlossary } from "../../../../api/glossary.service/apiClearGlossary";
import styles from "./ClearGlossary.module.scss";

const ClearGlossary: FC = () => {
  const [isClear, setIsClear] = useState(false);
  const [isView, setIsView] = useState(false);
  const onClick = async () => {
    if (window.confirm("Are you sure you want to clear the glossary?")) {
      const result = await apiClearGlossary();
      setIsClear(result);
      setIsView(true);
    }
  };
  return (
    <div className={styles.container}>
      <h3>Clear current glossary</h3>
      <p>This will delete all words in the current glossary.</p>
      <button type='button' onClick={() => onClick()}>
        Clear Glossary
      </button>
      {isView && (
        <div>
          {isClear && <p>Glossary cleared</p>}
          {!isClear && <p>Glossary not cleared</p>}
        </div>
      )}
    </div>
  );
};

export default ClearGlossary;
