// createStore는 Redux store를 생성하기 위해 사용
import { createStore } from "redux";
// combineReducers 함수는 여러 개의 리듀서를 결합하여 하나의 리듀서 생성
import { combineReducers } from "redux";
import toDos from "../modules/toDos";

// combineReducers 함수를 사용하여 리듀서들을 결합하여
// rootReducer를 생성
const rootReducer = combineReducers({
  // toDos 리듀서를 toDos라는 키로 사용하여 결합
  toDos: toDos,
});

// createStore함수를 호출
// rootReducer를 인자로 전달하여 스토어를 생성
// store는 Redux 애플리케이션의 상태를 보관하고 action에 따라 상태를 업데이트
const store = createStore(rootReducer);

export default store;
