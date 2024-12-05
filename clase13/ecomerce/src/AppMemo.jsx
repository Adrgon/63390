import { useState, memo } from "react"

const Counter = memo(({count}) => {
        console.log('Renderizado Counter')
        return <h1>{count}</h1>
})

const AppMemo = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    return (
        <>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} />
                <hr />
            
            <button 
                onClick={() => setCount(count + 1)}>Sumar</button>
            <Counter count={count} />
        </>
    )
}

export default AppMemo;
