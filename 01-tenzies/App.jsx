import Die from "./Die";

export default function App() {
  return (
    <main>
      <div className="dice-container">
        <Die value={3} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
        <Die value={2} />
      </div>
    </main>
  );
}
