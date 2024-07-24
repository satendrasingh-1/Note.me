import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatDate } from "../../../utils/formatDate";
import utils from "../../../utils/localstorage";
import Button from "../../../components/atoms/button";
import styles from "./note.module.scss";

function Note(props) {
  const { text, date, color } = props;
  const [expand, setExpand] = useState(false);
  const [noteText, setNoteText] = useState("");

  const handleSave = () => {
    const authToken = utils.getFromLocalStorage("auth_key");

    if(!authToken) toast.error("User should be authentic!")

    if (!noteText.length || noteText.split(" ").length < 2 )
      toast.error("Notes text should atleast contain 2 words!");

    fetch("http://localhost:8080/api/notes", {
      headers: {
        "Content-Type": "application/json",
        authorization: authToken,
      },
      body: JSON.stringify({
        text: noteText,
        color,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success === 200) {
          toast.success("Notes added successfully!");
        } else {
          toast.error(data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Notes creation failed!");
      });
  };

  return (
    <article className={styles.container} style={{ backgroundColor: color }}>
      <div>
        {!text.length ? (
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className={styles.textarea}
          />
        ) : (
          <>
            <p className={expand ? styles.expanded : ""}>
              {text.substring(0, 154)}
            </p>
            {text.length > 154 ? (
              <button onClick={() => setExpand((prev) => !prev)}>
                Read {expand ? "less" : "more"}
              </button>
            ) : null}
          </>
        )}
      </div>
      <footer className={styles.footer}>
        <div>{formatDate(date)}</div>
        {/* <div>{date}</div> */}
        {noteText.length ? (
          <Button
            text={"save"}
            className={styles.saveBtn}
            handleClick={handleSave}
          />
        ) : null}
        {/* <button>save</button> */}
      </footer>
    </article>
  );
}

export default Note;
