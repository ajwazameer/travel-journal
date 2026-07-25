export default function Jokes({ setup, punchline }) {
  return (
    <ul>
      <li>
        <h1>{setup}</h1>
        <hr />
        <li>{punchline}</li>
      </li>
    </ul>
  );
}
