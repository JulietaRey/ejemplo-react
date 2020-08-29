import React from "react";
import { Button } from "@material-ui/core";

import "./index.scss";
import CreadorDeTareas from "../CreadorDeTareas";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tareas: [],
    };
  }

  agregarTarea = (titulo) => {
    const tareas = this.state.tareas;
    this.setState({
      tareas: [
        ...tareas,
        {
          title: titulo,
          done: false,
        },
      ],
    });
  };

  terminarTarea = (pos) => {
    const tareas = [...this.state.tareas];
    tareas[pos].done = true;
    this.setState({
      tareas: tareas,
    });
  };

  render() {
    return (
      <div className="todo-list-container">
        <div>
          <h3>Agregar Tarea</h3>
          <div className="create-task">
            <CreadorDeTareas minChar={10} agregarTarea={this.agregarTarea} />
          </div>
        </div>
        <div>
          <h3>Lista de Tareas</h3>
          <div className="task-list">
            {this.state.tareas.map((task, index) =>
              !task.done ? (
                <div>
                  <span>{task.title}</span>
                  <Button
                    onClick={() => this.terminarTarea(index)}
                    variant="outlined"
                    color="primary"
                    size="small"
                  >
                    Done
                  </Button>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
