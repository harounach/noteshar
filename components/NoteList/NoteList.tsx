import React from "react";
import classNames from "classnames";
import styles from "./NoteList.module.scss";

import Note from "../Note/Note";

interface Props {
  customClasses?: string;
}

const NoteList: React.FC<Props> = ({ customClasses }) => {
  return (
    <div className={classNames(styles["note-list"], customClasses)}>
      {/* Note 1 */}
      <Note />

      {/* Note 2 */}
      <Note />

      {/* Note 3 */}
      <Note />
    </div>
  );
};

export default NoteList;
