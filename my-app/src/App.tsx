import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import DrinkList from './components/DrinkList'
import Greet from './components/Greet'
import InputValueState from './components/InputValueState'
import Player from './components/Player'
import Player2 from './components/Player2'
import Todos from './placeholder/Todos'
import TodoDetail from './placeholder/TodoDetail'

function App() {

  const playerObj = {
    name: "신유빈",
    age: 22
  }

  const clickHandler = () => {
    alert("버튼이 클릭되었습니다.");
  }

  return (
    <>
      <section className="app">
        {/* <h2>TypeScript 기반 React 프로젝트</h2> */}
        {/* <Greet name="타입스크립트" /> */}
        {/* <Player 
          player={playerObj} 
          clickHandler={clickHandler}
        /> */}
        {/* <Player2 
          player={playerObj} 
          clickHandler={clickHandler}
        /> */}
        {/* <Counter /> */}
        {/* <InputValueState /> */}
        {/* <DrinkList /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/:id" element={<TodoDetail />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
