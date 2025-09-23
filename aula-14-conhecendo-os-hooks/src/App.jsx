import './App.css'
import useCounter from './hooks/useCounter'

// regra 1: onde usar os hooks
// o hook nao pode ser chamado fora de um component react ou do seu proprio hook customaizado

// regra 2: a ordem dos hooks
// nao se deve utilizar um hook fora do 'top level' do seu componente, ex: nao podemos utilizar os hooks dentro de condicionais, loopins e etc

function App() {
  const counter = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
