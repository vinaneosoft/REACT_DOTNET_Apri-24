import { increment } from "../redux/counterSlice"
import { useSelector,useDispatch } from "react-redux"

export function CounterIncrement(){

    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch();
    return(
        <div>
            <h4>Increment Component</h4>
            <button onClick={()=>dispatch(increment())}>INCREMENT</button>
            <p>
                {count}
            </p>
        </div>
    )
}