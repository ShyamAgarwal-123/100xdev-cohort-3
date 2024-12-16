import {useRef} from "react"
import {z} from "zod";

const formSchema  = z.object({
    petName: z.string().min(3,{
        message: "Minimum 3 Character is Required"
    }).max(50,{
        message: "maximum 50 characters is allowed"
    }),
    petType: z.string(),
    breed: z.string().min(3,{
        message: "Minimum 3 Character is Required"
    }).max(50,{
        message: "maximum 50 characters is allowed"
    }),
    adopterName: z.string().min(3,{
        message: "Minimum 3 Character is Required"
    }).max(50,{
        message: "maximum 50 characters is allowed"
    }),
    email: z.string().email("Invalid Email"),
    phone: z.string().regex(/^\d{10}$/, { message: "Number must be of 10 Digit" })
})






export default function Form({setGoBack, setAdoptionTable}){
    const formRef = useRef({
        petName: "",
        petType: "",
        breed: "Dog",
        adopterName: "",
        email: "",
        phone: ""
    })
    const handelChange = function(event){
        const {name, value} = event.target;
        console.log(formSchema.safeParse(formRef));
        formRef[name] = value
    }

    const submitForm = function(event){  
        event.preventDefault()
        console.log(event);
        console.log(formSchema.safeParse(formRef));
        if (formSchema.safeParse(formRef).success) {
            setAdoptionTable((prevData)=>[...prevData,formRef])
            setGoBack((goback)=> !goback) 
            return
        }
        alert("All fields are Requied")
             
    }
    


    
    return <form className="adoption-form">
        <div>
            <label htmlFor="petName">Pet Name</label>
            <input type="text" placeholder="Pet Name" name="petName" onChange={handelChange} required/>
        </div>
        <div>
            <label htmlFor="petName">Pet Type</label>
            <select name="petType" onChange={handelChange} >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabit">Rabit</option>
            </select>
        </div>
        <div>
            <label htmlFor="breed">Breed</label>
            <input type="text" placeholder="breed" name="breed" onChange={handelChange} required/>
        </div>
        <div>
            <label htmlFor="adopterName">Your Name</label>
            <input type="text" name="adopterName" placeholder="Your Name" onChange={handelChange} required/>
        </div>
        <div>
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" placeholder="Email" onChange={handelChange} required/>
        </div>
        <div>
            <label htmlFor="phone">Phone</label>
            <input type="number" placeholder="Phone" name="phone" onChange={handelChange} required/>
        </div>

        <div>
            <button type="submit" onClick={submitForm}>
                Submit
            </button>
        </div>
    </form>
}