import { useCallback, useMemo, useState } from "react";
import Editor from "./components/Editor";
import Stats from "./components/Stats";
import "./App.css";

const STORAGE_KEY = "minimal-editor-content";

const getInitialContent = (): string => {
  if (typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(STORAGE_KEY) ?? "";
};

const countWords = (text: string): number => {
  const trimmed = text.trim();
  if (!trimmed) {
    return 0;
  }
  return trimmed.split(/\s+/).length;
};

function App() {
  const [content, setContent] = useState<string>(() => getInitialContent());
  const [plainText, setPlainText] = useState<string>("");

  const handleContentChange = useCallback((nextContent: string, text: string) => {
    setContent(nextContent);
    setPlainText(text);
    localStorage.setItem(STORAGE_KEY, nextContent);
  }, []);

  const stats = useMemo(() => {
    const charactersWithSpaces = plainText.length;
    const charactersWithoutSpaces = plainText.replace(/\s/g, "").length;
    const wordCount = countWords(plainText);
    const authorSheets = (charactersWithSpaces / 40000).toFixed(2);

    return {
      charactersWithSpaces,
      charactersWithoutSpaces,
      wordCount,
      authorSheets,
    };
  }, [plainText]);

  return (
    <div className="app">
      <Stats
        charactersWithSpaces={stats.charactersWithSpaces}
        charactersWithoutSpaces={stats.charactersWithoutSpaces}
        wordCount={stats.wordCount}
        authorSheets={stats.authorSheets}
      />
      <main className="editor-shell">
        <Editor initialContent={content} onChange={handleContentChange} />
      </main>
    </div>
  );
}

export default App;
