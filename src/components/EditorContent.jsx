import classes from "./EditorContent.module.css";

const EditorContent = ({ markedInput, setMarkedInput }) => {
  const handleChange = (e) => {
    setMarkedInput(e.target.value);
  };
  return (
    <textarea
      id="editor"
      className={classes.inputContainer}
      value={markedInput}
      onChange={handleChange}
    />
  );
};
export default EditorContent;
