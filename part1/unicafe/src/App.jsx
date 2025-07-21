import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Tittle = ({ text }) => <h1>{text}</h1>;

const Statistics = (props) => {
  if (props.all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.percent}</p>
    </div>
  );
};

const App = () => {
  const tittle = "give feedback";

  const [all, setAll] = useState(0);

  const [good, setGood] = useState(0);
  const increaseGood = () => {
    const newGood = good + 1;
    setGood(newGood);
    setAll(newGood + neutral + bad);
  };

  const [neutral, setNeutral] = useState(0);
  const increaseNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setAll(good + newNeutral + bad);
  };

  const [bad, setBad] = useState(0);
  const increaseBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setAll(good + neutral + newBad);
  };

  const average = (good * 1 + bad * -1 + neutral * 0) / all;

  const positivePercent = (good / all) * 100;
  const formattedPercent = `${positivePercent} % `;

  return (
    <div>
      <Tittle text={tittle} />
      <Button onClick={increaseGood} text="good"></Button>
      <Button onClick={increaseNeutral} text="neutral"></Button>
      <Button onClick={increaseBad} text="bad"></Button>
      <Tittle text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        percent={formattedPercent}
      />
    </div>
  );
};

export default App;
