import React, { useEffect, useState } from "react";

import styles from "./notes.module.scss";
import Wrapper from "../hoc/wrapper";
import Greeting from "../components/atoms/greeting";
import Note from "../components/card/note";
import utils from "../utils/localstorage";
import types from "../config/types";

import notesData from "../data/notes.json";

function Notes() {
  const [notesColl, setNotesColl] = useState([]);
  const data = utils.getFromLocalStorage(types.NOTES_DATA);


  useEffect(() => {
    if (data && data.length) {
      setNotesColl(data);
    } else {
      utils.addToLocalStorage(types.NOTES_DATA, notesData);
      setNotesColl(notesData);
    }
  }, [data]);

  return (
    <section className={styles.container}>
      <Greeting />
      <main>
        {notesColl.map((note, i) => {
          return (
            <Note
              key={note.id}
              text={note.text}
              color={note.color}
              date={note.createdAt}
            />
          );
        })}
      </main>
    </section>
  );
}

export default Wrapper(Notes);



