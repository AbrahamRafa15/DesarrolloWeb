import { useEffect, useState } from "react";

function NewItemsForm( { onAgregar}) {
    const [nuevoTexto, setNuevoTexto] = useState("");

    const manejarAgregar = () => {
        const textoTrim = nuevoTexto.trim();
        if (textoTrim === "") return;
        onAgregar(textoTrim);

        setNuevoTexto("");
    }

    return (
        <div className="mb-3">
            <input 
                type="text"
                className="form-control mb-2"
                placeholder="Nueva tarea"
                value={nuevoTexto}
                onChange={(e) => setNuevoTexto(e.target.value)} 
            />
            <button className="btn btn-primary" onClick={manejarAgregar}>
                Agregar tarea
            </button>
        </div>
    );
}

// Componente para representar un ítem de la lista
// Creado como funcion con declaración clásica
function ListItem({ id, completado, texto, cambiaValor }) {
    return (
        <li>
        <input
            className="form-check-input"
            type="checkbox"
            checked={completado}
            id={`check-${id}`}
            // Cuando se le da click al elemento, se llama a la función cambiaValor pasada como prop
            // Lo correcto sería usar onChange en lugar de onClick para inputs de tipo checkbox
            onChange={() => cambiaValor()}
        />
        <span>{texto}</span>
        </li>
    );
}

// Componente principal de la lista de tareas
// Creado como función con expresión de función flecha
const TodoList = () => {
    // Estado para las tareas. Se usa useState para manejar la variable de estado 'tareas'
    // El usar useState permite que se recuerde el valor entre renderizados y que al cambiar el valor
    // se vuelva a renderizar el componente
    const [tareas, setTareas] = useState([
        { id: 1, completado: true, texto: "Aprender HTML" },
        { id: 2, completado: false, texto: "Aprender CSS" },
    ]);

    // Estado para la última hora de cambios
    const [ultimaHoraDeCambios, setUltimaHoraDeCambios] = useState("");

    // Efecto secundario para actualizar la última hora de cambios cuando las tareas cambian
    useEffect(() => {
        const cambio = new Date().toLocaleTimeString();
        setUltimaHoraDeCambios(cambio);
    }, [tareas]);

    // Función para cambiar el estado de una tarea por su ID
    // Lo correcto sería usar un map en lugar de find y filter para evitar mutaciones directas
    const cambiaTareaPorId = (id) => {
        setTareas((arregloPrevio) => {
            return arregloPrevio.map((tarea) => {
                if (tarea.id === id) {
                    return { ...tarea, completado: !tarea.completado };
                }
                return tarea;
            });
        });
    };

    const agregarTarea = (texto) => {
        const nuevaTarea = {
            id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
            texto,
            completado: false,
        };
        setTareas([...tareas, nuevaTarea])
    }

    return (
        <>
        <div className="container">
            <h1>Todo list</h1>
            <NewItemsForm onAgregar={agregarTarea}/>
            {tareas.map((tarea) => (
            <ListItem
                key={tarea.id}
                id={tarea.id}
                completado={tarea.completado}
                texto={tarea.texto}
                cambiaValor={() => cambiaTareaPorId(tarea.id)}
            />
            ))}
        </div>
        <div>Ultimo cambio: {ultimaHoraDeCambios}</div>
        </>
    );
};
export default TodoList;