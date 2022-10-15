import React, { Component } from 'react'
import { ThemeContext } from './App'
export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.myCount
    }////那怎么样才能变成一个状态呢？出现状态，我们得需要用到 constructor 作为一个 class 它有一个 constructor 他才能接受我们的 props props 就是外界传进来的信息对不对？你外界传这个 props 是啥？是我们的那个叫做 initial count 对不对？ initial count 所以这地方我们先要做这个 super 为什么要做 super 因为你这是做有一个extension ，你做一个 extension 你必须得有一个 super 在这，你得把这个 props 给它传进去，首先得给它传进去，调完了之后还不够。你自己还得做活，你自己也得把它变成你的状态。把它变成你的状态。得有个叫做 is state this 我之前讲课讲了对不对？类似是什么？是我自己。我本身也就是说我们现在这个 content 的这个里边它本身有一个叫做 state 的一个状态。
//那这个状态我们有个count ，这个 count 我们是通过谁来的？ props 下的 props 下的叫做 initialinitial 的 count 这个东西就是根据我们 App 下边的这个地方，我们通过它传的对不对？你这名字随便改，你改成什么都行。比如说我 my count 这个你总不认为是他自己定义的了吧。

//下面。Consumer 先用style包裹，然后style={style} 传进去
  }
  render(){
    console.log('CLASS COMPONENT');
    return (
      <ThemeContext.Consumer>
        { style => (
          <>
            <button style={style} onClick={()=>{ this.changeCount(-1) }}>-</button>
            <span>{this.state.count}</span>
            <button style={style} onClick={()=>{ this.changeCount(+1) }}>+</button>
          </>
        )}
      </ThemeContext.Consumer>
    )
  }

  changeCount (amount) {
    // this.setState({count: this.state.count + amount })
    // this.setState((prevState) => {
    //   return {count: prevState.count + amount }
    // })
    this.setState((prevState) => {
      return {count: prevState.count + amount }
    })
  }
}
//我们来捋一下这个过程它是怎么实现这件事。首先我们的 App 执行了这个，我们这往里传了一个值，这个值是我们从外界定义的，我们从外界定义，要想传去，我们怎么识别得需要给它往里放。你如果说直接想用这个值怎么办？我们直接把这个值放在这就行。但是我们不能直接引用，不能直接引用这个 props 因为什么呢？因为我们的这个 on click 的时候，它得知道你当前的状态是什么，你外界传过来那个值它只是一个值，你就不能做加和减，你做加减了之后，那就不是外界传的值对不对？所以那就是得变成我们自己的一个状态，我们自己的状态才能在自己的状态上做这个操作。这种状态我们管它叫做有状态的组件，叫做有状态组件。