import React from "react";
import classNames from "classnames";
import styles from "./NoteList.module.scss";

import Note from "../Note/Note";
import { IGraphNote } from "../../interfaces/INote";

interface Props {
  customClasses?: string;
  notes?: Array<IGraphNote>;
  userId: string;
}

const NoteList: React.FC<Props> = ({ customClasses, notes, userId }) => {
  return (
    <div className={classNames(styles["note-list"], customClasses)}>
      {notes?.map((note) => {
        return <Note key={note.id as string} note={note} authUserId={userId} />;
      })}
    </div>
  );
};

export default NoteList;
