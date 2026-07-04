import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

const Todos = () => {
    // 객체 배열 - <Todo[]>
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        /*
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setTodos(response.data)
            })
            .catch(err => console.log(err))
        */

        // fetchTodos 함수를 정의
        const fetchTodos = async() => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
                setTodos(response.data);    // API에서 데이터를 가져와 상태 저장
            } catch(err) {
                alert(`할 일 목록을 가져오는 중 오류가 발생하였습니다.`);
            }
        }

        // fetchTodos 함수 호출
        fetchTodos();
    }, []);

    return (
        <div>
            <h2>할 일 목록</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <Link to={`/${todo.id}`}>{todo.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos;