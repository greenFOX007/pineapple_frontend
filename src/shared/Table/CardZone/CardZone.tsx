import React, { useContext, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { cardListState } from '../../../store/CardList/action';
import { cardListUpdate, ICard } from '../../../store/CardList/reducer';
import { RootState } from '../../../store/reducer';
import itemTypes from '../../../utils/itemType';
import { CardContext } from '../Table';
import './cardzone.css';

interface ICardZone {
  children?:React.ReactNode,
  nameBord:string
}
interface IItem {
  id?:string,
  value:string,
  isDraggingActive:boolean,
  board:string
}

interface ICardGame {
  valueCard:string,
  idCard:string,
  isDraggActive:boolean,
  board:string
}

export function CardZone({children, nameBord}:ICardZone) {
const {changeList} = useContext(CardContext)
const dispatch = useDispatch()
const gameCard = useSelector<RootState,cardListState>(state=>state.cardList)

function change (arr:Array<ICardGame>):Array<ICardGame> {
  let newArr = arr.slice()
  return newArr
}


const [ {isOver}, drop]= useDrop(()=>({
  accept: itemTypes.CARD,
  drop:(card:IItem, monitor)=>{
 
    if(card.id){
      changeList(card.id,nameBord,card.isDraggingActive,card.value,card.board)
    }

  },

  collect: monitor =>({
    isOver: !!monitor.isOver()
  }),

}))

  return (
    <div  ref={drop} className='card_zone'>
      {children}
    </div>
  );
}
