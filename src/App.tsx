import { useState } from "react";
import "./App.css";

const INITIAL_SUBS: Sub[] = [
  {
    nick: "Jorge",
    subMonths: 1,
    subType: "Prime",
    description: "Prime sub",
  },
  {
    nick: "Pis",
    subMonths: 2,
    subType: "Prime",
    description: "Prime sub",
  },
];

interface Sub {
  nick: string;
  subMonths: number;
  subType: string;
  description: string;
}

interface AppState {
  subs: Sub[];
}
function App() {
  const [subs, setSubs] = useState<AppState["subs"]>(INITIAL_SUBS);
  return (
    <>
      <h1>Twitch Subs</h1>
      <ul>
        {subs.map((sub) => (
          <li>
            <p>{sub.nick}</p>
            <p>{sub.subMonths}</p>
            <p>{sub.subType}</p>
            <p>{sub.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
