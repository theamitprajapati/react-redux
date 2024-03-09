import react, { useState } from 'react';
import { connect } from "react-redux"


function Add(props){
    const [body,setBody] = useState({})
    const setFieldValue = (e)=>{
        let data = {...body}
        data[e.target.id]  = e.target.value
        setBody(data)
    }

    console.log("Props::",props.init)
    const addBlog = (e)=>{
        e.preventDefault()
        props.addBlog('ADDBLOG',body)
        e.target.reset();
    }
    return (
        <form onSubmit={addBlog} className="add-article" defaultValue={props.init}>
        <input
          type="text"
          id="title"
          defaultValue={props.init.id}
          placeholder="Title"
          onChange={setFieldValue}
        />
        <input
          type="text"
          id="description"
          defaultValue={props.init.description}
          placeholder="Body"
          onChange={setFieldValue}
        />
         <input
          type="time"
          id="time"
          defaultValue={props.init.time}

          name='time'
          placeholder="Body"
          onChange={setFieldValue}
        />
        <button>Add article</button>
      </form>
    )
}
const initValue = data=>{
    console.log("data",data)
    return {
        init:data.addForm
    }
}



const mapDispatchToProps = dispatch => {
    return {
      addBlog:(action,data)=>dispatch({ type: action, blogsData: data }),
    }
  }

  export default connect(
    initValue,
    mapDispatchToProps
  )(Add)
