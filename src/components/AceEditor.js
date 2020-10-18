import React from "react";

// Ace editor configs
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-c_cpp";
import "ace-builds/src-min-noconflict/theme-twilight";
import "ace-builds/src-min-noconflict/ext-language_tools";

function AceEditor() {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  // This get value from Ace Editor
  const onChange = (newValue) => {
    setData(newValue);
  };

  const run = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/run", { code: data });
      setLoading(false);
      setResult(response.data);
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <AceEditor
      mode="c_cpp"
      theme="twilight"
      onChange={onChange}
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
  );
}

export default AceEditor;
