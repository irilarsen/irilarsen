import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

type EditorProps = {
  initialContent: string;
  onChange: (content: string, text: string) => void;
};

const Editor = ({ initialContent, onChange }: EditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    onUpdate: ({ editor: activeEditor }) => {
      onChange(activeEditor.getHTML(), activeEditor.getText());
    },
  });

  useEffect(() => {
    if (editor) {
      onChange(editor.getHTML(), editor.getText());
    }
  }, [editor, onChange]);

  return <EditorContent editor={editor} className="editor" />;
};

export default Editor;
