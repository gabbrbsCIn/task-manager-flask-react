import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import NewListForm from './NewListForm';
import TaskFilter from './TaskFilter';

const TaskManager = ({ user }) => {
    const [taskLists, setTaskLists] = useState([]);
    const [expandedListId, setExpandedListId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');

    const url = 'http://127.0.0.1:5000/';

    useEffect(() => {
        axios.post(url + '/todolist', { userId: user.id })
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setTaskLists(response.data);
                } else {
                    setTaskLists([]);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (expandedListId) {
            const selectedList = taskLists.find(list => list.id === expandedListId);
            if (selectedList) {
                setLoading(true);
                axios.get(`http://127.0.0.1:5000/todolist/${selectedList.id}/task`)
                    .then(response => {
                        setTaskLists(prevState => {
                            return prevState.map(list => {
                                if (list.id === selectedList.id) {
                                    return { ...list, tasks: response.data };
                                }
                                return list;
                            });
                        });
                        setLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                        setLoading(false);
                    });
            }
        }
    }, [expandedListId]);

    const toggleListExpansion = (listId) => {
        setExpandedListId(prevState => prevState === listId ? null : listId);
    };

    const handleTaskDelete = (taskId) => {
        axios.delete(`http://127.0.0.1:5000/todolist/${expandedListId}/task/${taskId}`)
            .then(() => {
                setTaskLists(prevState => {
                    return prevState.map(list => {
                        if (list.id === expandedListId) {
                            return { ...list, tasks: list.tasks.filter(task => task.id !== taskId) };
                        }
                        return list;
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleListAdd = (newListTitle) => {
        axios.post(`http://127.0.0.1:5000/create_todolist`, { userId: user.id, titulo: newListTitle })
            .then(response => {
                setTaskLists(prevState => [...prevState, response.data]);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleTaskAdd = (newTask) => {
        axios.post(`http://127.0.0.1:5000/todolist/${expandedListId}/task`, newTask)
            .then(response => {
                setTaskLists(prevState => {
                    return prevState.map(list => {
                        if (list.id === expandedListId) {
                            return { ...list, tasks: [...list.tasks, response.data] };
                        }
                        return list;
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleEditClick = (taskId, editedTask) => {
        axios.put(`http://127.0.0.1:5000/todolist/${expandedListId}/task/${taskId}`, editedTask)
            .then(response => {
                setTaskLists(prevState => {
                    return prevState.map(list => {
                        if (list.id === expandedListId) {
                            return {
                                ...list,
                                tasks: list.tasks.map(task => {
                                    if (task.id === taskId) {
                                        return response.data;
                                    }
                                    return task;
                                })
                            };
                        }
                        return list;
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4 pt-5">Olá, {user.nome}!</h1>

            <TaskFilter
                statusFilter={statusFilter}
                priorityFilter={priorityFilter}
                onStatusChange={setStatusFilter}
                onPriorityChange={setPriorityFilter}
            />

            {taskLists.map(taskList => (
                <TaskList
                    key={taskList.id}
                    taskList={taskList}
                    expanded={expandedListId === taskList.id}
                    onToggleExpansion={toggleListExpansion}
                    onEditTask={handleEditClick}
                    onDeleteTask={handleTaskDelete}
                    statusFilter={statusFilter}
                    priorityFilter={priorityFilter}
                />
            ))}

            <NewListForm onAddList={handleListAdd} />

            {expandedListId && <NewTaskForm onAddTask={handleTaskAdd} />}
        </div>
    );
};

export default TaskManager;
