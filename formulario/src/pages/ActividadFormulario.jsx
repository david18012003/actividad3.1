import React, { useEffect, useState } from 'react'
import axios from "axios";
import { validar } from '../../../backend/src/controllers/seguridad.controller';

    
    const baseURL ="https://localhost:3000/usuarios/registrar"


const token = validar();

export const ActividadFormulario = () => {
    const [post,setPost]=useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
          setPost(response.data);
        });
      }, []);
    
      function createPost() {
        axios
          .post(baseURL, {
            header: token,
            body: {
                
                "identificacion":"id",
                "telefono":"tel",
                "nombre":"name",
                "correo_electronico":"email",
                "tipo_usuario":"type",
                "password":"pass"

            }
          })
          .then((response) => {
            setPost(response.data);
          });
      }

  return (
    <div className='bg-[#E6E6E6]'>
        <div className='flex'>
            <div >
            <form action='#' method='Post'>
            <div className='flex flex-col m-5'>
                        <label > Identificacion: </label>
                        <input name='id' type="number" placeholder='Ingrese la Identificacion' />
                    </div>
                    <div   >
                        <label > Nombre: </label>
                        <input name='name' type='text'  placeholder='Ingrese su nombre'/>
                    </div>
                    <div className='flex flex-col m-5'>
                        <label > Telefono: </label>
                        <input name='tel' type='number' placeholder='Ingrese su Telefono'/>
                    </div>
                    <div className='flex flex-col m-5'>
                        <label > Correo: </label>
                        <input name='email' type="text" placeholder='Ingrese el Correo' />
                    </div>
                    <div className='flex flex-col m-5 justify-center items-center'>
                        <button onClick={createPost} type="button">Registrar</button>
                    </div>
            </form>
                
            </div>
            
        </div>
        
    </div>
  )
}
