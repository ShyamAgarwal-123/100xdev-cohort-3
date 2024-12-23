import {useEffect, useRef, useState} from 'react'

export function useFetch2(url,interval){
    const [state, setState] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    const reRenderRef = useRef(null)
    const fetchData = async ()=>{
        setLoading(true)
    try {
         const response = await fetch(url)
         const data = await response.json()
         setState(data)
    } catch (err) {
        setError(err)
    }finally{
        setLoading(false)
    }
    }


    useEffect(()=>{
        fetchData()
        if (interval) {
            reRenderRef.current = setInterval(()=> fetchData(),interval)
        }
        return () => clearInterval(reRenderRef)
    },[url])

    return { state, error,loading}
}