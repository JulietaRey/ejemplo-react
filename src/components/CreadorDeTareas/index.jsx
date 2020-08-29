import React, { useState } from "react";
import { Button } from "@material-ui/core";

// class CreadorDeTareas extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       titulo: ''
//     };
//   }
//   guardarTarea = () => {
//     this.props.agregarTarea(this.state.titulo);
//   };

//   handleChange = (evento) => {
//     this.setState({
//       titulo: evento.target.value
//     })
//   }

//   render() {
//     return (
//       <form>
//         <div>
//           <label>Titulo</label>
//           <input onChange={this.handleChange}  />
//         </div>
//         <Button
//           onClick={this.guardarTarea}
//           color="secondary"
//           variant="outlined"
//         >
//           Crear
//         </Button>
//       </form>
//     );
//   }
// }

const CreadorDeTareas = (props) => {
  const [titulo, setTitulo] = useState("");

  const guardarTarea = () => {
    if (titulo.length >= props.minChar) {
      props.agregarTarea(titulo);
      setTitulo('');
    } else {
      alert(`Minimo de caracteres ${props.minChar}`);
    }
  };

  const handleChange = (evento) => {
    setTitulo(evento.target.value);
  };

  return (
    <form>
      <div>
        <label>Titulo</label>
        <input value={titulo} onChange={handleChange} />
      </div>
      <Button onClick={guardarTarea} color="secondary" variant="outlined">
        Crear
      </Button>
    </form>
  );
};

export default CreadorDeTareas;
