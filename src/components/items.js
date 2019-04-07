import React from 'react';
import {data} from './data.js';

export const Items = () => {

   const list = data.map( (value) => 
     <div className="container" key={value.id}>
       <div className="row">
         <div className="col-sm-3">
           <h3>Nombre: {value.name}</h3>
           <h4>Apellido: {value.apellido}</h4>
           <p>Edad: {value.edad}</p>
           <p><strong>Ciudad: {value.ciudad}</strong></p>
         </div>
       </div>
       <hr/>
     </div>
   );

    return(
        <div>
          <h1 className="text-center">Listado de alumnos</h1>
          {list} 
        </div>
    );
}