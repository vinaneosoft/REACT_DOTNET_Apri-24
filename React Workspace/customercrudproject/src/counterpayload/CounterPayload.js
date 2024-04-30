import { useRef } from "react";
import { incrementByAmount } from "../redux/counterSlice"
import { useSelector,useDispatch } from "react-redux"

export function CounterPayload(){

    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch();
    const control=useRef();
    return(
        <div>
            <h4>Increment with Payload Component</h4>
            <input type="number" ref={control}></input>
            <button onClick={()=>dispatch(incrementByAmount(parseInt(control.current.value)))}>INCREMENT</button>
            <p>
                {count}
            </p>
        </div>
    )
}