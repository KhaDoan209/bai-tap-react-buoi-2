import React from 'react';

const GlassList = (props) => {
   return (
      <div className='row col-7'>
         {props.glasses.map((item) => {
            return (
               <div
                  key={item.id}
                  className='col-6 mt-2'
               >
                  <img
                     onClick={() => {
                        props.changeGlass(item);
                     }}
                     className='img-fluid'
                     src={item.url}
                  />
               </div>
            );
         })}
      </div>
   );
};

export default GlassList;
