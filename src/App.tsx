import perro from './assets/perro.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a target="_blank">
          <img src={perro} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>CI / CD</h1>

      <p className="subtitle-home">
        Equipo 10 - Ingenieria de Software <br /> Bienvenidos a Mercado Libro.
      </p>
    </>
  )
}

export default App
