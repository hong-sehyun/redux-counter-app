import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
// import counter from './reducers';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// CreateStore(): 앱의 전체 상태 트리를 보유하는 Redux 저장소를 만듦
// 앱에는 하나의 스토어만 있어야 함

// const store = createStore(counter);
const store = createStore(rootReducer);

store.dispatch({
  type: "ADD_TODO",
  text: "USE REDUX"
})

console.log("store.getState", store.getState());

const render = () => root.render(
  // getState(): 애플리케이션의 현재 상태 트리를 반환함
  // 스토어의 reducer가 반환한 마지막 값과 같음
  <React.StrictMode>
    <Provider store={store}>      
      <App value={store.getState()}
      onIncrement={()=> store.dispatch({type: "INCREMENT"})}
      onDecrement={()=> store.dispatch({type: "DECREMENT"})}
      />
    </Provider>
  </React.StrictMode>
);

// subscribe(): change listner를 추가함
// 작업이 전달될 때마다 호출되며 상태 트리의 일부가 잠재적으로 변경되었을 수 있음
// 그런 다음 getState()를 호출하여 콜백 내부느이 현재 상태 트리를 읽을 수 있음
render();
store.subscribe(render);

reportWebVitals();
