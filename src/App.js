import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

// Una buena práctica es agrupar las cosas que importo . En las lineas superiores importe cosas de librerías instaladas al proyecto
// Debajo tengo componentes que cree yo.

import NavBar from './components/NavBar';
import Home from './components/Home';
import TodoList from './components/TodoList';

const theme = createMuiTheme({ // Configuracion de un tema de materialui - cada librería tiene su manera de hacer esto. esto es a modo de ejemplo
  palette: {
    primary: {
      main: '#FF5722',
    }
  },
  typography: {
    fontFamily: 'monospace',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <header>
        <NavBar /> 
        {/* Todo componente que cree y quiero mostrar debo importarlo y llamarlo con su Tag. 
          Para diferenciar y porque originalmente son clases, los componentes react se escriben con mayusculas, 
          header y main, son tags html , y estan en minusculas.
        */}
      </header>
      <main>
        {/* <Home greeting="Hello World !" /> */}
        <TodoList />
      </main>

    </ThemeProvider>
  );
}

export default App;
