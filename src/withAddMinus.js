import { useState } from "react";

export const withAddMinus=(Component)=>{
    return(props)=>{
        const[count,setCount]=useState(1)
        return(
            <div>
                <Component  name="sunil" count={count} increment={()=>setCount(count=>count+1)}></Component>
            </div>
        )
    }
}

