import {useState} from 'react'
import type {Blog} from "../../common/type"
export default function Blogs() {
     const [blog, setBlog] = useState<Blog>({msg:""});
     const click = async()=>{
         fetch("http://localhost:3000/").then(e=> e.json()).then(e=> setBlog({msg: e.data})) 
     }  
  return (
    <div>Blog
        <div>
            <div style={{padding:"3px"}}>{blog.msg} </div>  
            <button onClick={click}>click</button>
        </div>
    </div>
  )
}
