import { useState } from 'react'

const StatisticsLine = ({ text, operation }) => {
  return <p>{text} {operation}</p>
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return <p>No feedback given</p>
  }

  const average = ((good - bad) / all).toFixed(2)
  const positive = ((good / all) * 100).toFixed(1)

  return (
    <div>
      <StatisticsLine text="good" operation={good} />
      <StatisticsLine text="neutral" operation={neutral} />
      <StatisticsLine text="bad" operation={bad} />
      <StatisticsLine text="all" operation={all} />
      <StatisticsLine text="average" operation={average} />
      <StatisticsLine text="positive" operation={positive + ' %'} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App