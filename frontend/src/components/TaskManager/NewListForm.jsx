// NewListForm.js
import React, { useState } from 'react';

const NewListForm = ({ onAddList }) => {
    const [newListTitle, setNewListTitle] = useState('');

    const handleInputChange = (e) => {
        setNewListTitle(e.target.value);
    };

    const handleAddClick = () => {
        if (newListTitle.trim() !== '') {
            onAddList(newListTitle);
            setNewListTitle('');
        }
    };

    return (
        <div className="border rounded-md p-4 mb-4">
            <div>
                <input
                    type="text"
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="Título da nova lista de tarefas"
                    value={newListTitle}
                    onChange={handleInputChange}
                />
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddClick}>Adicionar Lista de Tarefas</button>
            </div>
        </div>
    );
};

export default NewListForm;
