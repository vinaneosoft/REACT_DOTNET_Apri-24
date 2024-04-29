import { useSelector,useDispatch } from "react-redux"
import { decrement,increment } from "../redux/counterSlice"
export function Counter(){
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch();

    return(
        <>
        <div>
            <button onClick={()=>dispatch(increment())}>INCREMENT</button>
        </div>
        <div>
            {count}
        </div>
        <div>
        <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
        </div>
        </>
    )
}