import React from 'react'

const Card = ({ mascota }) => {
    return (
      <>
        <h4>Nueva mascota del tipo: {mascota.tipo}!</h4>
        <h4>
          Nombre{" "}
          {mascota.nombre}.
        
        </h4>
        <h4 style={{color:"yellow"}}>  ¡Cuida a tu nueva mascota!</h4>
      </>
    );
  };

export default Card
