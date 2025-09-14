import Status from "./components/Status"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"

function sum(a, b){
  return a + b
}

export default function App(){
  const name = "Jesus"
  const status = true
  
  return (
    <div>
      <Title />
      <Subtitle />
      <Status />
    </div>
  )
}