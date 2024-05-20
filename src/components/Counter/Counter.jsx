"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [counter , setCounter] = useState(0)

    console.log('hellw world')
    return (
        <div>
             <h1>Counter: {counter}</h1>
             <button onClick={()=>setCounter(counter + 1)} className='px-4 border rounded mx-4 py-2 bg-amber-600'>Increase</button>
             <button onClick={()=>setCounter(counter - 1)} className='px-4 py-2 border rounded bg-amber-600'>Increase</button>
        </div>
    );
};

export default Counter;