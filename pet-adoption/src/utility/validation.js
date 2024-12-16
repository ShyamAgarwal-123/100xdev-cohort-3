export default function validator({petName,petType,breed,adopterName,email,phone}) {

    console.log(petName,petType,breed,adopterName,email,phone);
    
    if(petName == false || petType == false ||
        breed == false || adopterName == false || email == false
        || phone == false
    )  {return "Field is required"}

   
}