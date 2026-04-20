import { useState } from 'react'

const App = () => {
  const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.',
  'A bug is never just a mistake. It represents something bigger — a misunderstanding of the problem.',
  'The best code is no code at all.',
  'Make it work, make it right, make it fast. In that order.',
  'Every line of code you write is a line someone else has to read.',
  'Weeks of programming can save you hours of planning.',
  'The most dangerous phrase in software is: it worked on my machine.',
  'Good software is not built, it is grown.',
  'Simplicity is the ultimate sophistication in code.',
  'A well-named variable is worth a thousand comments.',
  'The first version of anything is always wrong. Ship it anyway.', 
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)) 

  const randomIndex = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }

  const vote = () => {
    const copy = [...votes]   
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVotes = Math.max(...votes)
  const mostVoted = votes.indexOf(maxVotes)


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]}</p>
      <button onClick={vote}>vote</button>
      <button onClick={randomIndex}>next anecdote</button>
      <h1>Anecdotes with most votes is</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>with {votes[mostVoted]} votes </p>
    </div>
  )
}

export default App