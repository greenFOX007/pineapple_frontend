import { Reducer } from "react"
import { CARDLIST, cardListAction, ICard } from "./reducer"


export type cardListState = Array<ICard>

export const cardListReducer: Reducer<cardListState, cardListAction> = (state, action) => {

    switch(action.type){
        case CARDLIST:
           return{
            ...state,
            cardList:[...action.cardList],
           }
        default:
            return state

    }
}