import React, { useState } from 'react';
import './Model.scss';
const Model = (props) => {
   let { id, url, price, name, desc } = props.glass;

   return (
      <div className='row col-5'>
         <div className='model ms-3'>
            <img
               style={{ height: '100%', objectFit: 'cover' }}
               className='img-fluid'
               src='./glassesImage/model.jpg'
            />
            <div className='model-glasses'>
               <img src={url} />
            </div>
            <div className='glass-infor'>
               <h3>{name}</h3>
               <span>
                  <b>Price:</b> {price}$
               </span>
               <br />
               <span>{desc}</span>
            </div>
         </div>
      </div>
   );
};

export default Model;
