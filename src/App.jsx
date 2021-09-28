import React from 'react';

import Teste from './Componentes/Teste';

const App = () => {
  return ( 
    <>
    <div className="bg-gray-600 p-10 sm:bg-pink-600 md:bg-blue-600 lg:bg-purple-600 xl:bg-pink-600">
      <Teste />

      <div className="block bg-green-600 text-white text-center p-2 mt-4 rounded-2xl mx-8 hover:bg-green-400 delay-100 duration-500 ease-linear md:mx-8 lg:mx-0">
        <a 
         href="#">proximo
        </a>
      </div>
    </div>
    </>
   );
}
 
export default App;
