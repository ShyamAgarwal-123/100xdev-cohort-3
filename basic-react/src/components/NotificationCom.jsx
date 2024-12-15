import { useEffect , useState} from "react"

export default function NotificationComponent(){

    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        setInterval(()=> setCount(count => count+1),1000)
      },[])

    return <div style={{
        position: "absolute",
        top: "50px"
    }}>

        <span style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "px",
            position: "absolute",
            top : "-10px",
            right: "-10px",
            padding: "5px",
            height: "auto",
            textAlign: "center",
            borderRadius: "50%"


        }}> 
            {count}
        </span>
        <img src="https://media.istockphoto.com/id/1598038956/vector/bell-icon-vector-illustration-symbol.jpg?s=612x612&w=0&k=20&c=Ly_vjHmtbwhlsuCl8YkGqZ6zkOJKH03D_BhDY89Qzdg=" style={{
            height: 40,
            width: 40,
            borderRadius: 20

        }}/>
    </div>
}