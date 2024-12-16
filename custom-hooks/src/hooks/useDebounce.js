import { useRef } from "react"


export default function useDebounce(fn){

    const ref = useRef();



    return function(){
        clearTimeout(ref.current)
        ref.current = setTimeout(()=>[
            fn()
        ],200)
    }
}