import { ActionCreator,Reducer } from "redux"
import { cardListReducer, cardListState } from "./CardList/action"
import { CARDLIST, cardListAction, ICard } from "./CardList/reducer"

export type RootState ={
    cardList:cardListState
}

export const initialState:RootState = {
    cardList:[
        {idCard:'1',isDraggActive:false,valueCard:'1',board:'top'},
        {idCard:'2',isDraggActive:false,valueCard:'2',board:'top'},
        {idCard:'3',isDraggActive:false,valueCard:'3',board:'middle'},
        {idCard:'4',isDraggActive:false,valueCard:'4',board:'middle'},
        {idCard:'5',isDraggActive:false,valueCard:'5',board:'bottom'},
        {idCard:'6',isDraggActive:true,valueCard:'6',board:'hand'},
        {idCard:'7',isDraggActive:true,valueCard:'7',board:'hand'},
        {idCard:'8',isDraggActive:true,valueCard:'8',board:'hand'},
        {idCard:'9',isDraggActive:true,valueCard:'9',board:'hand'},
      ]  
}

export type MyAction = cardListAction

export const rootReducer:Reducer<RootState,MyAction> = (state=initialState,action)=>{
    switch(action.type){
        case CARDLIST:
            return{
                ...state,
                cardList:cardListReducer(state.cardList,action)
            }
          default:
            return state  
    }
}