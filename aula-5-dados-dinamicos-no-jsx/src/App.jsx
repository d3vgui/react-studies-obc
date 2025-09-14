function sum(a, b){
  return a + b
}

export default function App(){
  const name = "Jesus"
  const status = true
  return (
    <div>
      <h1>{name} is the way, the truth and the life.</h1>
      <h2>{name} spent {sum (35, 5)} days in the desert in prayer</h2>
      <h2>Status: {status ? "ON" : "OFF"}</h2>
    </div>
  )
}