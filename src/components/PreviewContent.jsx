// import ReactMarkdown from "react-markdown";
import "./PreviewContent.css";
import { useEffect, useState } from "react";
import { marked } from "marked";

const PreviewContent = ({ markedInput: input }) => {
	const [output, setOutput] = useState("");
	useEffect(() => {
		const renderedOutput = marked(input, { breaks: true });
		setOutput(renderedOutput);
	}, [input]);

	return <div id="preview" dangerouslySetInnerHTML={{ __html: output }}></div>;
};

export default PreviewContent;
