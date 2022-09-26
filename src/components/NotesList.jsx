import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="notes-list">
      {notes.map(({id, text, date}) => (
        <Note
          key={id}
          id={id}
          text={text}
          date={date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
