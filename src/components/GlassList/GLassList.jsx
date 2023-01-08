import React, { Component } from 'react';

export default class GLassList extends Component {
   render() {
      return (
         <div className='row col-7'>
            {this.props.glasses.map((item) => {
               return (
                  <div
                     key={item.id}
                     className='col-6 mt-2'
                  >
                     <img
                        onClick={() => {
                           this.props.changeGlass(item);
                        }}
                        className='img-fluid'
                        src={item.url}
                     />
                  </div>
               );
            })}
         </div>
      );
   }
}
