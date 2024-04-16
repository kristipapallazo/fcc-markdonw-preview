import "./PreviewContent.css";
import { marked } from "marked";

const PreviewContent = ({ markedInput: input }) => {
  const output = marked(input, { breaks: true });

  return <div id="preview" dangerouslySetInnerHTML={{ __html: output }}></div>;
};

export default PreviewContent;
