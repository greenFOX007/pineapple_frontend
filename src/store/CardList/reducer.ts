import { connect } from "react-redux";
import { ActionCreator } from "redux";


export interface ICard {
    valueCard:string,
    idCard:string,
    isDraggActive:boolean,
    board:string
}

export const CARDLIST = 'CARDLIST'
export  type cardListAction = {
    type: typeof CARDLIST;
    cardList: Array<ICard>
}
export  const cardListUpdate:ActionCreator<cardListAction> = (cardList)=>({
    type:CARDLIST,
    cardList
})
  