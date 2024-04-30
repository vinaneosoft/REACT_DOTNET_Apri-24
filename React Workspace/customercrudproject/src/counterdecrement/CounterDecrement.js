import { decrement } from "../redux/counterSlice"
import { useSelector,useDispatch } from "react-redux"

export function CounterDecrement(){

    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch(); // store concept
    return(
        <div>
            <h4>Decrement Component</h4>
            <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
            <p>
                {count}
            </p>
        </div>
    )
}