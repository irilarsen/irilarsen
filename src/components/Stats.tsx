import "./Stats.css";

type StatsProps = {
  charactersWithSpaces: number;
  charactersWithoutSpaces: number;
  wordCount: number;
  authorSheets: string;
};

const Stats = ({
  charactersWithSpaces,
  charactersWithoutSpaces,
  wordCount,
  authorSheets,
}: StatsProps) => {
  return (
    <header className="stats">
      <div className="stat">
        <span className="label">Characters (with spaces)</span>
        <span className="value">{charactersWithSpaces}</span>
      </div>
      <div className="stat">
        <span className="label">Characters (no spaces)</span>
        <span className="value">{charactersWithoutSpaces}</span>
      </div>
      <div className="stat">
        <span className="label">Words</span>
        <span className="value">{wordCount}</span>
      </div>
      <div className="stat">
        <span className="label">Author sheets</span>
        <span className="value">{authorSheets}</span>
      </div>
    </header>
  );
};

export default Stats;
