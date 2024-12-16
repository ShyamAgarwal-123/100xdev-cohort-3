import {z} from "zod";

export const formSchema  = z.object({
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