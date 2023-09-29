import { useState } from 'react'

const StatisticLine =({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = (good,neutral,bad) => {
  
  <div>
  <h1>Statistics</h1>
  <table>
    <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticsLine text="All" value ={good+neutral+bad} />
      <StatisticsLine text="average" value ={(good+neutral+bad)/3} />
      <StatisticsLine text="positive" value ={good/(good+neutral+bad)*100 + "%"} />
    </tbody>
  </table>
 </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good +1);
  }
  const badClick = () => {
    setBad(bad +1);
  }

  const neutralClick = () => {
    setNeutral(neutral +1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={neutralClick} text="Neutral" />
      <Button onClick={goodClick} text="Good" />
      <Button onClick={badClick} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App