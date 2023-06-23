import uuid from "react-uuid";

// action type 정의
const ADD_BTN = "ADD_BTN";
const DELETE_BTN = "DELETE_BTN";
const TOGGLE_BTN = "TOGGLE_BTN";

// action creator

// 새로운 toDo를 추가하기 위한 action 생성
// title과 content를 매개변수로 받음
export const addBtn = (title, content) => {
  return {
    type: ADD_BTN,
    newToDo: {
      // uuid() 함수를 사용하여 고유한 식별자를 할 일의 id 속성에 할당
      id: uuid(),
      title,
      content,
      isDone: false,
    },
  };
};

// toDo를 삭제하기 위한 action 생성
// toDos와 id를 매개변수로 받음
export const deleteBtn = (toDos, id) => {
  // toDos 배열에서 해당 id와 일치하지 않는 할 일들을 필터링
  const deleteToDos = toDos.filter((filteredToDo) => filteredToDo.id !== id);
  return {
    // 새로운 배열을 생성하고 action 객체로 반환
    type: DELETE_BTN,
    deleteToDos,
  };
};

// toDos의 완료 상태를 토글하기 위한 action을 생성
// // toDos와 id를 매개변수로 받음
export const toggleBtn = (toDos, id) => {
  // toDos 배열을 순회 => map
  const stateUpdateBtn = toDos.map((item) => {
    // isDone속성을 반전시킨 객체로 업데이트한 배열을 생성하고
    // 액션 객체로 반환
    if (item.id === id) {
      return { ...item, isDone: !item.isDone };
    } else {
      return item;
    }
  });

  return {
    type: TOGGLE_BTN,
    stateUpdateBtn,
  };
};

// toDos 목록을 나타내는 객체들의 배열
const initialState = [
  {
    id: uuid(),
    title: "React Advanced Course",
    content: "Managing state with redux",
    isDone: false,
  },
  {
    id: uuid(),
    title: "Algorithm Study",
    content: "Resolving Programmer '양꼬치'",
    isDone: true,
  },
];

// toDos 리듀서 함수
// 현재 상태 = state 와 액션 = action을 받아 상태를 업데이트
const toDos = (state = initialState, action) => {
  // switch 문을 사용하여 action type에 따라 적절한 처리를 수행
  switch (action.type) {
    // ADD_BTN action이 들어오면 기존 상태 배열에 새로운 toDo를 추가한
    // 새로운 배열을 반환
    case ADD_BTN:
      return [...state, action.newToDo];

    // DELETE_BTN action이 들어오면 해당 id를 가진 toDo를 삭제한 배열을 반환
    // 그 외의 action들에 대해서는 현재 상태 = state를 그대로 반환
    case DELETE_BTN:
      return action.deleteToDos;

    case TOGGLE_BTN:
      return action.stateUpdateBtn;

    default:
      return state;
  }
};

export default toDos;
