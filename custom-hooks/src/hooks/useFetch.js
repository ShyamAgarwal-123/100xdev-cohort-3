import { useEffect, useState } from 'react'

export function useFetch(url){

  const [post, setPost] = useState({});


  const fetchPost = async () =>{
    const response = await fetch(url)
    setPost(await response.json())
  }

  useEffect(()=>{
    fetchPost()
  },[])

  return {post}
}