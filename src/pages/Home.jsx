import "../App.css";
import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

function Home() {
  // toDos라는 상태와 그 상태를 변경할 수 있는 setToDos함수를 정의하고
  // 초기값으로 빈 배열을 설정
  const [toDos, setToDos] = useState([]);

  return (
    <>
      <div className="total">
        <Header />
        <main>
          {/* toDos와 setToDos를 props로 전달하여 목록에 변경이 생길 때마다 상태를 업데이트 */}
          <Input toDos={toDos} setToDos={setToDos} />
          {/* isDone props를 false로 설정하여 아직 완료되지 않은 목록을 표시 */}
          <TodoList toDos={toDos} setToDos={setToDos} isDone={false} />
          {/* isDone props를 true로 설정하여 이미 완료된 할 일을 표시 */}
          <TodoList toDos={toDos} setToDos={setToDos} isDone={true} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
