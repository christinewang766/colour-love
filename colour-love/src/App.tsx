import { Home } from "./Home"

function App() {

  return <div style={{
    margin: 0,
    padding: 0,
    background: '#7A98ED',
    border: '5px solid black',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }}>
    <Home />
  </div>
}

export default App