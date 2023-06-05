import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectNumber } from '../features/number/numberSlice';

function Number() {
    
    const number = useSelector(selectNumber);
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number is {number}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            
        </div>
    )
}

export default Number
