import React from 'react';
import { useDrag } from 'react-dnd';
import itemTypes from '../../../utils/itemType';
import './handcard.css';

interface IHandCard {
  idCard:string,
  value:string,
  isDraggingActive:boolean,
  board:string
}

export function HandCard({idCard,value,isDraggingActive,board}:IHandCard) {
 

  const [{ isDragging }, drag] = useDrag(() => ({
    type:itemTypes.CARD,
    item:{
      id:idCard,
      value:value,
      isDraggingActive:isDraggingActive,
      board:board
    },
    end: (item, monitor) => {
      // console.log(item)
    },
  
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <>
    {isDraggingActive && 
       <div style={{opacity:isDragging?0.5:1}} ref={drag} id={idCard} className='card_container'>
         {value}
       </div>
    }
    {!isDraggingActive && 
       <div id={idCard} className='card_container'>
         {value}
       </div>
    }
    </>
    
  );
}
