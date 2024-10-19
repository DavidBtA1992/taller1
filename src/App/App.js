import logo from "../logo.svg";
import "./App.css";
import Card from "../Components/Card/Card";
import Header from "../Components/Header/Header";

//TODO: EN GENERAL MEJORAR LOS ESTILOS


function App() {
  //TODO: PENDIENTE REALIZAR EL RECORRIDO DE LOS PERSONAJES AUTOMATICAMENTE DE ACUERDO A LA CANTIDAD DE PERSONAJES TRAIDOS CON EL FETCH
  const arreglo = [...Array(19).keys()];

  return (
    <div className="App">
      <Header/>
      {arreglo.map((arr) => (
        <Card numero={arr} />
      ))}
    </div>
  );
}

export default App;
