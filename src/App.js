import React, { useState } from 'react';
import Counter from './counter'
import CounterHook from './counterHook';

export const ThemeContext = React.createContext() //引用主题

function App() {
  console.log('APP');
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={ {background: theme } }>
      <div>Class Counter:</div>
      <Counter myCount ={2} />
      <div>Function Counter:</div>
      <CounterHook myCount ={10}/>
      <br></br>
      <button onClick={() => setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red'})} >
      Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;