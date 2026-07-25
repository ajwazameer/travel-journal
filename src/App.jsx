import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Jokes from "./components/Jokes";
import data from "./data";

const entries = data.map((entry) => {
  return (
    <Entry
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  );
});
export default function App() {
  return (
    <>
      <Header />
      {entries}
    </>
  );
}
