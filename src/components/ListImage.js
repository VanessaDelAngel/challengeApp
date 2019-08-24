import React, { useState } from 'react';

export default function ListImage(props){
    return (
    <div>
        <div id="imagenlist">
          {props.dataImages.map(image=> {
            return <img className="list-img" src={image} />
          } 
          )}
      </div>
      <div className="card-body bodyCard">
        <h5 className="card-title cardTitle">Paisajes De Japón</h5>
      < p className="card-text">El turismo en Japón es uno de los mejores en el continente asiático. Sin duda, es un destino predilecto por los viajeros en cualquier época del año porque es un país que regala contrastes, colores, magia, misticismo y espiritualidad.</p>
      </div>
    </div>
    );
  }