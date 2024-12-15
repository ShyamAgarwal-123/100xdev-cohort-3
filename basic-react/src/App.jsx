import { useEffect, useState } from "react"
import PostComponent from "./components/Post.jsx"
import NotificationComponent from "./components/NotificationCom.jsx"

function App() {

  const [post, setPost] = useState([])
  


  const addPost= function(){
    setPost([...post,    {
      title: "Shyam Agarwal",
      subTitle1: "20M follower",
      subTitle2: "20min aga",
      discription : "my name is Shyam Agarwal"
    }])
  }

  const postComponents = post.map((post)=>{
    return<PostComponent title={post.title} subTitle1={post.subTitle1} subTitle2={post.subTitle2} discription={post.discription}/>
  })


  return (
    <div style={{
      backgroundColor : "#e1e8f2",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",

    }}>

      <button onClick={addPost} style={{
        position: "absolute",
        zIndex:1,
        top:0,
        left: 0
      }}>Add Post</button>
      <div>
{/* {[        <PostComponent title={"Shyam Agarwal"} subTitle1={"20M follower"} subTitle2={"20min aga"} discription={"my name is Shyam Agarwal"}/>,<br/>,
        <PostComponent title={"Rishav Agarwal"} subTitle1={"Promted"} discription={"I am very Happy to anoumce that i have been promoted"}/>]} */}

        
        <NotificationComponent/>
        {postComponents}

      </div>
    </div>
  )
}

export default App
