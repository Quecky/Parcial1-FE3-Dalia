import React, { useState } from 'react'
import Card from './Card';

const Form = () => {
        

    const[show,setShow]=useState(false);
    const[error,setError]=useState(false);
    const espacio= /^\s/;

    const [mascota,setMascota]=useState(
        {
            tipo:"",
            nombre:"",

        }

    );

    const handleChangeName=(event)=>{

        setMascota({...mascota,nombre:event.target.value});

    }
    const handleChangeTipo=(event)=>{

        setMascota({...mascota,tipo:event.target.value});
 
    }

   

    const handleSubmit =(e)=>{
       e.preventDefault();

        if(mascota.tipo.length>=3 && !espacio.test(mascota.tipo) && mascota.nombre.length>=6)
        {
              setShow(true);
              setError(false);
        }
        else{
            setError(true)
        }
      
    }

    const reset = () =>
    {
        setMascota({
        nombre:"",
        tipo:"",
       });
    }
  return (
  <>
  
        <form onSubmit={handleSubmit}>

            <label >Tipo de mascota: </label>
            <input type="text" value={mascota.tipo} onChange={handleChangeTipo}/>
            <label >Nombre: </label>
            <input type="text" value={mascota.nombre} onChange={handleChangeName}/>
           
            <button>Enviar</button>
        </form>

        <button onClick={reset}>Reset form</button>

      
      
        {
            error ?(
                <>
                <h4 style={{color:"red"}}>Por favor chequea que la información sea correcta</h4>
                 </>
            ):null
        }

{
            show ? (
                <Card mascota={mascota} />
            ):null
        }
      
       
  </>
  )
}

export default Form
