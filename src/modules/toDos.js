import uuid from "react-uuid";

const ADD_BTN = "ADD_BTN";
const DELETE_BTN = "DELETE_BTN";
const TOGGLE_BTN = "TOGGLE_BTN";

export const addBtn = (title, content) => {
  return {
    type: ADD_BTN,
    newToDo: {
      id: uuid(),
      title,
      content,
      isDone: false,
    },
  };
};

export const deleteBtn = (toDos, id) => {
  const deleteToDos = toDos.filter((filteredToDo) => filteredToDo.id !== id);
  return {
    type: DELETE_BTN,
    deleteToDos,
  };
};

export const toggleBtn = (toDos, id) => {
  const stateUpdateBtn = toDos.map((item) => {
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

const toDos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BTN:
      return [...state, action.newToDo];

    case DELETE_BTN:
      return action.deleteToDos;

    case TOGGLE_BTN:
      return action.stateUpdateBtn;

    default:
      return state;
  }
};

export default toDos;
