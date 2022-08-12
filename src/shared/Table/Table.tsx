import React, { createContext, startTransition, useEffect, useState } from 'react';
import itemTypes from '../../utils/itemType';
import { CardZone } from './CardZone';
import { HandCard } from './HandCard';
import './table.css';

export const CardContext = createContext({
  changeList:(id:string,nameBord:string,isDraggActive:boolean,valueCard:string,nameBordDrag:string)=>{},
})

export function Table() {

  // interface ICardGame {
  //   valueCard:string,
  //   idCard:string,
  //   isDraggActive:boolean,
  //   board:string,
  //   position : number
  // }

  interface ICardGame {
    valueCard:string,
    idCard:string,
    isDraggActive:boolean,
    nameBoardOn:string
  }

  interface IItem  {
    board : Array<ICardGame>,
    name : string
  }

  interface IListItem{
    boads : Array<IItem>
  }

  const [list,setList] = useState<IListItem>({
    boads:[
      {
        board:[
          {idCard:'1',isDraggActive:false,valueCard:'1',nameBoardOn:'top'},
        ],
        name:'top'
      },
      {
        board:[
          {idCard:'2',isDraggActive:false,valueCard:'2',nameBoardOn:'middle'},
        ],
        name:'middle'
      },
      {
        board:[
          {idCard:'3',isDraggActive:false,valueCard:'3',nameBoardOn:'bottom'},
          {idCard:'4',isDraggActive:false,valueCard:'4',nameBoardOn:'bottom'},
          {idCard:'5',isDraggActive:false,valueCard:'5',nameBoardOn:'bottom'},
        ],
        name:'bottom'
      },      {
        board:[
          {idCard:'6',isDraggActive:true,valueCard:'6',nameBoardOn:'hand'},
          {idCard:'7',isDraggActive:true,valueCard:'7',nameBoardOn:'hand'},
          {idCard:'8',isDraggActive:true,valueCard:'8',nameBoardOn:'hand'},
          {idCard:'9',isDraggActive:true,valueCard:'9',nameBoardOn:'hand'},
          {idCard:'10',isDraggActive:true,valueCard:'10',nameBoardOn:'hand'},
        ],
        name:'hand'
      }
    ]
  })


  // const [gameCard,setGameCards] = useState<Array<ICardGame>>([
  //   {idCard:'14',isDraggActive:false,valueCard:'14',board:'top', position: 1},
  //   {idCard:'42',isDraggActive:false,valueCard:'42',board:'top', position: 2},
  //   {idCard:'13',isDraggActive:false,valueCard:'13',board:'middle', position: 1},
  //   {idCard:'31',isDraggActive:false,valueCard:'31',board:'middle', position: 2},
  //   {idCard:'5',isDraggActive:false,valueCard:'5',board:'bottom', position: 1},
  //   {idCard:'6',isDraggActive:true,valueCard:'6',board:'hand', position: 1},
  //   {idCard:'7',isDraggActive:true,valueCard:'7',board:'hand', position: 2},
  //   {idCard:'10',isDraggActive:true,valueCard:'10',board:'hand', position: 3},
  //   {idCard:'19',isDraggActive:true,valueCard:'19',board:'hand', position: 4},
  //   {idCard:'11',isDraggActive:true,valueCard:'11',board:'hand', position: 5},
  // ])


  let changeList = (id:string,nameBord:string,isDraggActive:boolean,valueCard:string,nameBordDrag:string)=>{
  let a:IListItem = Object.assign({},list)  
  let b:ICardGame = {
    idCard:id,
    isDraggActive:isDraggActive,
    valueCard:valueCard,
    nameBoardOn:nameBord,
  }
  console.log(`взял ${nameBordDrag}`)
  console.log(`drop ${nameBord}`)
  a.boads.filter((item)=>item.name === nameBordDrag)[0].board.filter((item)=>item.idCard === id).splice(0,1)
 
  a.boads.filter((item)=>item.name === nameBord)[0].board.push(b)
  
    setList(a)
  // setList(a.boads.filter((item:IItem)=>item.name === nameBord)[0].filter((item:ICardGame)=>item.idCard === id).pop())
 
  }
  
  useEffect(()=>{
   
    console.log(list)
  },[list])
  
  
  return (
    <CardContext.Provider value={{changeList}}>
    <div className='container'>
      <div className='board_cards_container'>
       <CardZone nameBord={'top'}>
          {
            list.boads.filter((item)=>item.name ==='top')[0].board
            .map((item)=>(<HandCard idCard={item.idCard} isDraggingActive={item.isDraggActive} value={item.valueCard} board={item.nameBoardOn}/>
          ))}
       </CardZone>
       <CardZone nameBord={'middle'}>
        { list.boads.filter((item)=>item.name ==='middle')[0].board
            .map((item)=>(<HandCard idCard={item.idCard} isDraggingActive={item.isDraggActive} value={item.valueCard} board={item.nameBoardOn}/>
          ))}
       </CardZone>
       <CardZone nameBord={'bottom'}>
           { list.boads.filter((item)=>item.name ==='bottom')[0].board
            .map((item)=>(<HandCard idCard={item.idCard} isDraggingActive={item.isDraggActive} value={item.valueCard} board={item.nameBoardOn}/>
          ))}
       </CardZone>
      </div>
      <CardZone nameBord={'hand'}>
         { list.boads.filter((item)=>item.name ==='hand')[0].board
            .map((item)=>(<HandCard idCard={item.idCard} isDraggingActive={item.isDraggActive} value={item.valueCard} board={item.nameBoardOn}/>
          ))}
      </CardZone>

    </div>
    </CardContext.Provider>
  );
}







