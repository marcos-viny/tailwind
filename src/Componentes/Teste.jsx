import React from 'react';

import img from '../Imgs/add.jpg'
const Teste = () => {
    return ( 
        <>
        <div className="bg-gray-200 p-8 rounded-3xl md:">
            <div>
            <img className="w-32 h-32 rounded-full mx-auto " src={img} alt=""/>
            </div>

            <div className="pt-6 text-center text-base space-y-4">
                <div className="m-0 md:mx-56">
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
