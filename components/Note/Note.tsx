import React from "react";
import classNames from "classnames";
import { useMutation } from "@apollo/client";
import styles from "./Note.module.scss";

import Button from "../Button/Button";
import { IGraphNote } from "../../interfaces/INote";

import { DELETE_NOTE } from "../../graphql/operations/mutation";
import { GET_ALL_NOTES, GET_USER_NOTES } from "../../graphql/operations/query";

import { formatNoteDate } from "../../lib/noteUtils";

interface Props {
  customClasses?: string;
  note: IGraphNote;
  authUserId: string;
}

const Note: React.FC<Props> = ({ customClasses, note, authUserId }) => {
  // Delete note mutation
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      deleteNoteId: note.id,
    },
    onCompleted: (data) => {
      console.log(data);
    },
    refetchQueries: [
      {
        query: GET_ALL_NOTES,
      },
      {
        query: GET_USER_NOTES,
      },
    ],
  });

  /**
   * Increment number of likes
   */
  const handleLike = () => {
    alert("Note liked");
  };

  /**
   * Increment number of dislikes
   */
  const handleDislike = () => {
    alert("Note disliked");
  };

  /**
   * Share note on Facebook
   */
  const handleShare = () => {
    alert("Note shared");
  };

  /**
   * Delete note from database
   */
  const handleDelete = () => {
    deleteNote();
  };

  const showOwnerControls = note.user.id === authUserId;

  const ownerControls = (
    <>
      <Button
        variant="icon"
        iconType="fa-solid fa-trash"
        customClasses={classNames(styles.note__btn)}
        onClick={handleDelete}
      />

      <Button
        variant="icon"
        iconType="fa-solid fa-pen"
        customClasses={classNames(styles.note__btn)}
        url={`/dashboard/edit/${note.id}`}
      />
    </>
  );

  return (
    <div className={classNames(styles.note, customClasses)}>
      <div className={classNames(styles.note__row)}>
        <span className={classNames(styles.note__title)}>{note.title}</span>
        <span className={classNames(styles.note__date)}>
          {formatNoteDate(note.createdAt)}
        </span>
      </div>

      <div className={classNames(styles.note__row)}>
        <p className={classNames(styles.note__description)}>
          {note.description}
        </p>
      </div>
      <div className={classNames(styles.note__row)}>
        <span className={classNames(styles.note__createdby)}>
          Created By{" "}
          <span className={classNames(styles.note__username)}>
            {note.user.username}
          </span>
        </span>
        <div className={classNames(styles.note__actions)}>
          <Button
            variant="icon"
            iconType="fa-solid fa-thumbs-down"
            customClasses={classNames(styles.note__btn)}
            onClick={handleDislike}
          />

          <Button
            variant="icon"
            iconType="fa-solid fa-thumbs-up"
            customClasses={classNames(styles.note__btn)}
            onClick={handleLike}
          />

          <Button
            variant="icon"
            iconType="fa-solid fa-share-nodes"
            customClasses={classNames(styles.note__btn)}
            onClick={handleShare}
          />

          {showOwnerControls && ownerControls}
        </div>
      </div>
    </div>
  );
};

export default Note;
