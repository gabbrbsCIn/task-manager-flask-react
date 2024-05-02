// TaskFilter.js
import React from 'react';

const TaskFilter = ({ statusFilter, priorityFilter, onStatusChange, onPriorityChange }) => {
    return (
        <div className="flex justify-between mb-4">
            <div>
                <label htmlFor="statusFilter" className="mr-2">Filtrar por Status:</label>
                <select
                    id="statusFilter"
                    className="border rounded-md p-2"
                    value={statusFilter}
                    onChange={(e) => onStatusChange(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="A fazer">A fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Concluída">Concluída</option>
                </select>
            </div>
            <div>
                <label htmlFor="priorityFilter" className="mr-2">Filtrar por Prioridade:</label>
                <select
                    id="priorityFilter"
                    className="border rounded-md p-2"
                    value={priorityFilter}
                    onChange={(e) => onPriorityChange(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="1">Prioridade 1</option>
                    <option value="2">Prioridade 2</option>
                    <option value="3">Prioridade 3</option>
                    <option value="4">Prioridade 4</option>
                </select>
            </div>
        </div>
    );
};

export default TaskFilter;
