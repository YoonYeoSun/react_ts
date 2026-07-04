import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Todo } from "./Todos";


const TodoDetail = () => {

    const {id} = useParams();
    const [todo, setTodo] = useState<Todo | null>(null);

    useEffect(() => {
        /*
        axios.get("https://jsonplaceholder.typicode.com/todos/{id}")
            .then(response => {
                setTodos(response.data)
            })
            .catch(err => console.log(err))
        */

        // fetchTodos 함수를 정의
        const fetchTodo = async() => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
                setTodo(response.data);    // API에서 데이터를 가져와 상태 저장
            } catch(err) {
                alert(`할 일을 가져오는 중 오류가 발생하였습니다.`);
            }
        }

        // fetchTodo 함수 호출
        fetchTodo();
    }, [id]);

    // todo가 아직 로딩되지 않았을 때 로딩 메시지 표시 - 없으면 에러남
    if(!todo) {
        return <div>로딩 중...</div>;
    }

    return (
        <>
            <div> 
                <h2>할 일 상세정보</h2>
                <p>ID: {todo.id}</p>
                <p>TITLE: {todo.title}</p>
            </div>
            <button className="mtl10"><Link to="/">목록으로</Link></button>
        </>
    )
}

export default TodoDetail;