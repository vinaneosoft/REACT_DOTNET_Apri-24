import { useSelector} from "react-redux"
import { CounterIncrement } from "../counterincrement/CounterIncrement";
import { CounterDecrement } from "../counterdecrement/CounterDecrement";
import { CounterPayload } from "../counterpayload/CounterPayload";
export function Counter(){
    const count=useSelector(state=>state.counter.value) // listening mode (store updates)
   
    return(
        <>
            <CounterIncrement></CounterIncrement>
            <div>
                {count}
            </div>
            <CounterDecrement></CounterDecrement>
            <CounterPayload></CounterPayload>
        </>
    )
}