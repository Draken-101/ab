import { Graphviz } from 'graphviz-react';
import Grafo from './assets/js/red';
import { useState } from 'react';

function App() {
  const [p, setPersona] = useState('');
  const RedSocial = new Grafo();
  RedSocial.agregarPersona("p");

  const agregarP = () => {
    const nombrePersona = p.trim();
    
    if (nombrePersona) {
      RedSocial.agregarPersona(nombrePersona);
      console.log(nombrePersona + RedSocial.obtenerDetallesConexiones());
    }
  }

  return (
    <>
      <Graphviz dot={`digraph {
        ${RedSocial.obtenerDetallesConexiones()}
      }`} />
      <input 
        placeholder='Agregar Persona' 
        onChange={(c) => {
          setPersona(c.target.value)
        }}
        onBlur={agregarP}
      />
    </>
  )
}

export default App;
