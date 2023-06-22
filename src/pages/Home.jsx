import "../App.css";
import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import Router from "../shared/Router";

function Home() {
  const [toDos, setToDos] = useState([]);

  return (
    <>
      <div className="total">
        <Header />
        <main>
          <Input toDos={toDos} setToDos={setToDos} />
          <TodoList toDos={toDos} setToDos={setToDos} isDone={false} />
          <TodoList toDos={toDos} setToDos={setToDos} isDone={true} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;

// // src/pages/home.js
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <button
//       onClick={() => {
//         navigate("/Detail");
//       }}
//     >
//       Detail
//     </button>
//   );
// };

// export default Home;
