import React, {useState} from 'react'
import './Counter-Style.css';


const Counter = () => {

    const [count, setCount] = useState(0);


    return (
        <div>
            <div className='counter-content'>
                <div className='counter-box' onClick={
                    () => setCount(count + 1)
                }>
                
                </div>

                <div className='reset-counter'>
                    <button onClick={
                        () => setCount(count - count)
                    }><i class="fas fa-eraser"></i>Clique aqui para resetar a contagem</button>
                </div>
            </div>
            

            <div>
                <h1 className='value'>{count}</h1>
            </div>
        </div>
        
    )
}

export default Counter
