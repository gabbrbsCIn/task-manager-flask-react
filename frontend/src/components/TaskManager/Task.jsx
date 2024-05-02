import React from 'react';

const Task = ({ task, onEditClick, onDeleteClick }) => {
    const { id, titulo, descricao, status, prioridade } = task;

    return (
        <div className="border rounded-md p-4 mb-4">
            <div>
                <h3 className="text-lg font-semibold">{titulo}</h3>
                <p className="text-gray-700">{descricao}</p>
                <div className="flex justify-between mt-2">
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">{status}</span>
                    <span className={`px-2 py-1 ${getPriorityColor(prioridade)} rounded-md`}>Prioridade: {prioridade}</span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onEditClick(id)}>Editar</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => onDeleteClick(id)}>Excluir</button>
                </div>
            </div>
        </div>
    );
};

const getPriorityColor = (priority) => {
    switch (priority) {
        case 1:
            return 'bg-red-200 text-red-800';
        case 2:
            return 'bg-yellow-200 text-yellow-800';
        case 3:
            return 'bg-green-200 text-green-800';
        case 4:
            return 'bg-blue-200 text-blue-800';
        default:
            return 'bg-gray-200 text-gray-800';
    }
};

export default Task;
