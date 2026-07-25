import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Jokes from "./components/Jokes";
import data from "./data";

const entries = data.map((entry) => {
  return <Entry key={entry.id} {...entry} />;
});
export default function App() {
  return (
    <>
      <Header />
      {entries}
    </>
  );
}
