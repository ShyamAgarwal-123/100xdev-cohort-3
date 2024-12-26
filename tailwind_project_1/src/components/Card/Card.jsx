

function Card({children,style}) {
  return (
    <div className={`bg-white ${style} border-[#EEEEEF] border-[1px] shadow-sm`}>
        {children}
    </div>
  )
}

export default Card