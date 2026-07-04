import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)} className="mtl10">감소</button>
            <button onClick={() => setCount(0)} className="mtl10">초기화</button>
        </div>
    )
}

export default Counter;