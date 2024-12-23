
export default function InfoComponent({children,tandc}) {
    return <div className='text-center'>
      <div className='mb-20 text-3xl font-300 text-[#35c2bd]'>Webinar.gg</div>
      <div className='text-2xl font-bold text-white mb-14'>{children}</div>
      {tandc && <div className='text-[#68809d] text-[12px]'>Please confirm your birth year.This data will not be stored.</div>}
    </div>
  }