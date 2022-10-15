import { useState, useContext } from "react"
import { ThemeContext } from './App'
// use contact 是，外界给你的。那你说这个刚才 props 难道不是外界吗？ props 是外界，但是它是怎么传递的？它是直接传递给你了对吧？但是 context 不一样， context 这东西是不是直接传递给你了？它是由外界以什么形式呢？以这种调用的形式传递给你的，这种形式你 import 进来传递给你的话，你会装在这个 context 里面，它不能装在这个 use state 里面，因为装的 use state 变成你自己的状态了？状态你变成你自己状态了，而是我们希望什么呢？这东西不是你自己的状态，而是所有的状态所有人都持有这么一个状态对吧？如果变成你自己状态，那你改了别人不会改对吧。所以我们希望的这个状态是由外界来持有，然后你这里边只是用它而已。
export default function CounterHook({myCount}){

  const [count, setCount] = useState(myCount)
  //第一个东西是你这个里边的值，这个值就会被变成我这一个状态就会变成 state 就会变成状态。第二个值是为了改变第一个 state 你去看这里边这个 state 是你自己写的，下边这个 set state 也是你自己写的。我跟大家说这两个东西是由它自己约定俗成带来的对吧？然而我们这个里面认为像这样的状态不要写在这一个里面，你可以写多份。
  //我们理解它的时候只需要这么理解，把这个东西当做一个状态，给它用 use state 给它提取出来，然后把这个提取出来的东西直接放进去。
  const style = useContext(ThemeContext)
  console.log('FUNCTION COMPONENT');

  return (
    <>  
      <button style={style} onClick={()=> setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button style={style} onClick={()=> setCount(prevCount => prevCount + 1)}>+</button>
    </>
  )
}
//onClick方法体，里面是setCount