import React, { createContext } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import './App.css';
import { Table } from './shared/Table';
import { rootReducer } from './store/reducer';


const store = createStore(rootReducer,composeWithDevTools())


function App() {
  return (
   <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
      <Table/>
    </DndProvider>  
   </Provider> 
    
    
  );
}

export default App;


