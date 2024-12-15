export default function PostComponent({
    title,
    subTitle1,
    subTitle2,
    discription
  
  }){
    return (
      <div style={{
        backgroundColor: "white",
        width: "300px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin : 10
      }}>
        <div style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginBottom: "10px"
        }}>
          <img src={"https://media.licdn.com/dms/image/v2/D4D03AQGV60QKrSjyUw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693766282815?e=1739404800&v=beta&t=TxzfuPYQuWF1EvCzaK0fgeA8wufwbx-N5zNYNqPng-0"} width={"50"} height={"50"} style={{ borderRadius: "50%" }} />
          <div style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 12
          }}>
            <strong>{title}</strong>
            <span>{subTitle1}</span>
            {subTitle2 !== undefined && subTitle2 !== null && <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start"
            }}>
            <span>{subTitle2}</span>
              <img src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas=" width={20}
            style={{
            }}
            />
            </div>}
           
          </div>
        </div>
        <p style={{ margin: 0 }}>
          {discription}
        </p>
      </div>
    )
  }