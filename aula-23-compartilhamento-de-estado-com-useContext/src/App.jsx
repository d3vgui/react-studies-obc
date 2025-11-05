import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/UserContext"

export default function App() {
  const user = {
    name: "Guilherme",
    email: "guilherme@email.com",
  }
  return (
    <UserContext.Provider value={user}>
      <Header/>
      <h1>Usando contexto</h1>
      <Container>
        <p>Este é nosso app com contexto</p>
      </Container>
    </UserContext.Provider>
  )
}
