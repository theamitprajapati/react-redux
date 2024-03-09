import React ,{useState,memo} from 'react'



function Hook(props){

    console.log("Hook cmp")
    return <button onClick={()=>props.f(props.a+1)}>+{props.a} A</button> 
}


export default memo(Hook)