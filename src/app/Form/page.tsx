"use client";
import React, { useState } from 'react';
import Input from '../components/FormTools/Input/input'; // Ajuste o caminho conforme a estrutura do seu projeto
import Navbar from '../components/Navbar/navbar';
import AboutContent from '../components/FormTools/AboutContent/about';

const Form: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <>  
            <Navbar showButton={false}/>
            <main className='min-h-screen flex flex-col items-center bg-cinzabasico'>
                {/* Caixa com detalhes da area e formulário */}
                <AboutContent/>
                <div className="bg-white shadow-md rounded-lg p-8 mt-4 w-[80em] max-w-2x1">
                    <div className="container mx-auto p-4">
                        {/* Inputs obrigatórios */}
                        <Input 
                            name='EDV'
                            value={inputValue}
                            onChange={handleChange}
                            placeholder="Digite seu EDV..."
                        />
                        <Input 
                            name='E-mail'
                            value={inputValue}
                            onChange={handleChange}
                            placeholder="Digite seu e-mail..."
                        />
                        {/* Inputs obrigatórios */}
                        
                        {/* Adicionar icon mis tarde!!!!!!!!!!!!!!!!!!!!! */}
                        <i className="fas fa-plus-circle mr-2"></i><h1>Adicionar nova pergunta</h1>
                    </div>
                </div>
            </main>
        </>
        
    );
};

export default Form;
