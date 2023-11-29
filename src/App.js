import { useState } from "react";
import PreviewContent from "./components/PreviewContent";
import EditorContent from "./components/EditorContent";
import CardLayout from "./layouts/CardLayout";
import "./App.css";

function App() {
	const [markedInput, setMarkedInput] = useState("");
	const handleChange = (value) => {
		setMarkedInput(value);
	};
	console.log("markedInput :>> ", markedInput);

	return (
		<div className="app">
			<CardLayout id="editor">
				<EditorContent handleChange={handleChange} />
			</CardLayout>
			<CardLayout id="preview">
				<PreviewContent markedInput={markedInput} />
			</CardLayout>
		</div>
	);
}

export default App;
