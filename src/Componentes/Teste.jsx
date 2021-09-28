import React from 'react';

import img from '../Imgs/add.jpg'
const Teste = () => {
    return ( 
        <>
        <div className="bg-gray-200 p-8 rounded-3xl overflow-hidden md:flex md:p-0 ">
            <div>
            <img className="w-32 h-32  rounded-full mx-auto sm:h-full md:max-w-lg   md:rounded-none" src={img} alt=""/>
            </div>

            <div className="pt-6 text-center text-base space-y-4">
                <div className="m-0 md:">
                    <p>
                        "Quando eu comecei o curso, eu sabia nada de nada
                        mas depois de um ano estudando quando tinha tempo
                        consegui um emprego de desenvolvedor front-end."
                    </p>
                </div>

                <div>
                    <div className="uppercase ">
                        <h1 className="font-black">Marcos Vinicius.</h1>
                    </div>

                    <div>
                        <h2 className="font-bold">Aluno mais fodão.</h2>
                    </div>
                </div>

            </div>

        </div>
        </>
     );
}
 
export default Teste;
