import React, { useState } from 'react';
import axios from 'axios';

const LoginRegisterBox = ({ onLoginSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = async () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const url = 'http://127.0.0.1:5000/';
        const route = isLogin ? 'login' : 'users';

        try {
            const response = await axios.post(url + route, {
                nome: data.username,
                email: data.email,
                senha: data.password
            });

            alert(isLogin ? 'Login realizado com sucesso!' : 'Cadastro realizado com sucesso!');
            onLoginSuccess(response.data);

        } catch (error) {
            alert(isLogin ? 'E-mail ou Senha inválidos!' : 'Erro ao cadastrar usuário!');
            console.error('Erro ao enviar requisição:', error);
        }

    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="bg-white rounded px-7 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-bold mb-4">{isLogin ? 'Login' : 'Cadastro'}</h2>
                <form onSubmit={handleSubmit} className="mb-4">
                    {!isLogin && (
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                            <input type="text" id="username" name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {isLogin ? 'Login' : 'Cadastrar'}
                    </button>
                </form>
                <button onClick={handleToggle} className="text-blue-500 hover:text-blue-700">
                    {isLogin ? 'Criar uma conta' : 'Já tenho uma conta'}
                </button>
            </div>
        </div>

    );
};

export default LoginRegisterBox;