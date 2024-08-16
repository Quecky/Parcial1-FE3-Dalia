import React from 'react'
import CardStyles from "../Styles/Card.module.css";

const Card = ({ mascota }) => {
    return (
      <div className={CardStyles.cardContainer}> 
        <h4>Nueva mascota del tipo: {mascota.tipo}!</h4>
        <h4>
          Nombre:{" "}
          {mascota.nombre}.
        
        </h4>
        <h4 style={{color:"yellow"}}>  ¡Cuida a tu nueva mascota!</h4>
      </div>
    );
  };

export default Card
