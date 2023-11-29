import { useEffect, useState } from "react";
import classes from "./EditorContent.module.css";

const defaultMarkdown = `# Heading 1
## Heading 2

[Link](https://www.example.com)

Inline code: \`const example = 'Hello, World!';\`

\`\`\`javascript
// Code block
function example() {
  console.log('Hello, World!');
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://www.example.com/image.jpg)

**Bolded text**`;

const EditorContent = ({ markedInput, handleChange }) => {
	const [input, setInput] = useState("test");
	const onChange = (e) => {
		const value = e.target.value;
		setInput(value);
		// handleChange(value);
	};
	useEffect(() => {
		setInput(defaultMarkdown);
	}, []);

	useEffect(() => {
		handleChange(input);
	}, [input, handleChange]);
	return (
		<textarea
			id="editor"
			className={classes.inputContainer}
			value={input}
			onChange={onChange}
		/>
	);
};

export default EditorContent;
