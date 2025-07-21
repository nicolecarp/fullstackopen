import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Tittle = ({ text }) => <h1>{text}</h1>;

const App = () => {
  const tittle = "give feedback";

  const [good, setGood] = useState(0);
  const increaseGood = () => {
    const newGood = good + 1;
    setGood(newGood);
  };

  const [neutral, setNeutral] = useState(0);
  const increaseNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };

  const [bad, setBad] = useState(0);
  const increaseBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
  };

  const average = (bad + good + neutral) / 3;
  console.log(average);

  return (
    <div>
      <Tittle text={tittle} />
      <Button onClick={increaseGood} text="good"></Button>
      <Button onClick={increaseNeutral} text="neutral"></Button>
      <Button onClick={increaseBad} text="bad"></Button>
      <Tittle text="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
