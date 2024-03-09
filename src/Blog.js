import { useEffect, useState } from "react";
import { connect } from "react-redux"


import List from './components/blog/List'
import Add from './components/blog/Add'

function Blog(props){
    const [action,setAction] = useState('list')

    console.log(props.blogs)
    const [blogs, setBlogs] = useState([
        { id: 1, title: "post 1", description: "Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", description: "Quisque cursus, metus vitae pharetra" },
      ])

    const addBlog = (data)=>{
        let d = [...blogs];
        d.push(data)
        setBlogs(d)
    }

    return (
        <div>
        <button onClick={()=>setAction('add')}>Add Blog</button>
        <button onClick={()=>setAction('list')}>List Blog</button>
        {action == 'list'?<List blogs={props.blogs}/>:''}       
        {action == 'add'?<Add inital={blogs} addBlog={addBlog}/> :''}      
        </div>
    )
}

const mapStateToProps = state => {
    return {
      blogs: state.blogs,
    }
  }


export default connect(mapStateToProps)(Blog)

