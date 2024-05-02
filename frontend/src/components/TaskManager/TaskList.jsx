// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ taskList, expanded, onToggleExpansion, onEditTask, onDeleteTask, statusFilter, priorityFilter }) => {
    const { id, titulo, tasks } = taskList;

    return (
        <div className="bg-white rounded-md shadow-md p-4 mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => onToggleExpansion(id)}>
                <h2 className="text-xl font-bold mb-2">{titulo}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${expanded ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {expanded && (
                <div className="mt-4">
                    {tasks && tasks.length > 0 ? (
                        tasks
                            .filter(task => {
                                if (statusFilter && priorityFilter) {
                                    return task.status === statusFilter && task.prioridade.toString() === priorityFilter;
                                } else if (statusFilter) {
                                    return task.status === statusFilter;
                                } else if (priorityFilter) {
                                    return task.prioridade.toString() === priorityFilter;
                                } else {
                                    return true;
                                }
                            })
                            .map(task => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    onEdit={() => onEditTask(task.id)}
                                    onDelete={() => onDeleteTask(task.id)}
                                />
                            ))
                    ) : (
                        <p>Não há tarefas nesta lista.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default TaskList;
