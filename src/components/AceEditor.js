import React, { useState } from "react";

// Ace editor configs
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-c_cpp";
import "ace-builds/src-min-noconflict/theme-twilight";
import "ace-builds/src-min-noconflict/ext-language_tools";

import axios from "../api/axios";

function AceTextEditor() {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");

  // This get value from Ace Editor
  // const onChange = (newValue) => {
  //   setData(newValue);
  // };

  // const run = async () => {
  //   try {
  //     const response = await axios.post("/run", { code: data });

  //     setResult(response.data);
  //   } catch (error) {
  //     alert(error.response.data);
  //   }
  // };
  return (
    <div>
      <AceEditor
        mode="c_cpp"
        theme="twilight"
        name="editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableEmmet: true,
          enableMultiselect: true,
          enableSnippets: true,
        }}
      />
    </div>
  );
}

export default AceTextEditor;
