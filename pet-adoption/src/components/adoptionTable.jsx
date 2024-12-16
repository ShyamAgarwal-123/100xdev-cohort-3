
export default function AdoptionTable({adoptionTable,setGoBack}){    
    return <div className="main-table">
    <div className="table">
        {adoptionTable.map((data)=> <Row
        key={adoptionTable.indexOf(data)} 
        petName={data.petName} 
        petType={data.petType}
        breed={data.breed}
        adopterName={data.adopterName}
        email={data.email}
        phone={data.phone}
        />)}
    </div>
    <GoBackButton  setGoBack={setGoBack}/>
    </div>
}


function Row({petName,petType,breed,adopterName,email,phone}){
    return <>
      <div>{petName}</div>
        <div>{petType}</div>
        <div>{breed}</div>
        <div>{adopterName}</div>
        <div>{email}</div>
        <div>{phone}</div>
    </>
}


function GoBackButton({setGoBack}) {

    const back = ()=> setGoBack((goBack)=> !goBack)
  
    return <div>
      <button onClick={back}>
        Go Back
      </button>
    </div>
  }