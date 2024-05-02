import React, { useState } from 'react';

const NewTaskForm = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState({
        titulo: '',
        descricao: '',
        prioridade: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prevState => ({ ...prevState, [name]: value }));
    };

    const handleAddClick = () => {
        onAddTask(newTask);
        setNewTask({
            titulo: '',
            descricao: '',
            prioridade: '',
            status: ''
        });
    };

    return (
        <div className="border rounded-md p-4 mb-4">
            <div>
                <input
                    type="text"
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="Título"
                    name="titulo"
                    value={newTask.titulo}
                    onChange={handleChange}
                />
                <textarea
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="Descrição"
                    name="descricao"
                    value={newTask.descricao}
                    onChange={handleChange}
                />
                <select
                    className="border rounded-md p-2 mb-2 w-full"
                    name="status"
                    value={newTask.status}
                    onChange={handleChange}
                >
                    <option value="">Status</option>
                    <option value="A fazer">A fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Concluída">Concluída</option>
                </select>
                <select
                    className="border rounded-md p-2 mb-2 w-full"
                    name="prioridade"
                    value={newTask.prioridade}
                    onChange={handleChange}
                >
                    <option value="">Prioridade</option>
                    <option value="1">Prioridade 1</option>
                    <option value="2">Prioridade 2</option>
                    <option value="3">Prioridade 3</option>
                    <option value="4">Prioridade 4</option>
                </select>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddClick}>Adicionar</button>
            </div>
        </div>
    );
};

export default NewTaskForm;
