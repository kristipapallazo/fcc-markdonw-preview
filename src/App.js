import { useState } from "react";
import PreviewContent from "./components/PreviewContent";
import EditorContent from "./components/EditorContent";
import CardLayout from "./layouts/CardLayout";
import "./App.css";

const defaultMarkdown = `# Welcome to My Markdown Previewer!

## Introduction                  
Welcome to my Markdown Previewer! This is a simple application that allows you to write Markdown on the left and see the rendered HTML output on the right in real-time.  

### Features
- **Live Preview:** See the rendered HTML as you type Markdown.
- **GitHub Flavored Markdown Support:** Use GitHub flavored Markdown syntax with ease.
- **Customizable:** Feel free to customize the app according to your needs.

## Usage
To get started, simply start typing Markdown in the editor on the left. You'll see the corresponding HTML output in the preview area on the right. You can experiment with different Markdown syntax and see how it's rendered instantly.


Inline code: \`const example = 'Hello, World!';\`

\`\`\`javascript
// Code block
function example() {
  console.log('Hello, World!');
}
\`\`\`

**_Supported programming languages:_** 
- JavaScript
- Python
- Java
- C#
- Ruby




[For more projects follow my portfolio](https://codesandbox.io/p/sandbox/exciting-black-t2l646)
> 
![Image](data:image/png;base64,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)
`;
/* dont remove the (>) in the upper content, is requesite for the blockquote element */

function App() {
  const [markedInput, setMarkedInput] = useState(defaultMarkdown);
  const [cardWidthArr, setCardWidthArr] = useState(["50%", "50%"]);

  const handleWidthChange = (id) => {
    setCardWidthArr((prev) => {
      let newArr = [...prev];

      const index = id === "editor" ? 0 : 1;
      switch (newArr[index]) {
        case "25%": {
          newArr = ["50%", "50%"];
          break;
        }
        case "50%": {
          newArr = id === "editor" ? ["75%", "25%"] : ["25%", "75%"];
          break;
        }
        default: {
          console.log("defaultWidth");
        }
      }
      return newArr;
    });
  };

  return (
    <div className="app">
      <CardLayout
        id="editor"
        label="Editor"
        width={cardWidthArr[0]}
        handleWidthChange={handleWidthChange}
      >
        <EditorContent
          markedInput={markedInput}
          setMarkedInput={setMarkedInput}
        />
      </CardLayout>
      <CardLayout
        id="preview"
        label="Preview"
        width={cardWidthArr[1]}
        handleWidthChange={handleWidthChange}
      >
        <PreviewContent markedInput={markedInput} />
      </CardLayout>
    </div>
  );
}

export default App;
