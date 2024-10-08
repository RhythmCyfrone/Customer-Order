import { useState } from "react"

const ItemStatusToggle = () => {
    const [status, setStatus] = useState<'Ready' | 'Served'>('Ready')
  return (
    <div className='flex w-[25%] flex-col items-center gap-y-[2px]'>
        {
            status == 'Ready'
            ?<div className='cursor-pointer w-[33px]  p-[4px] flex items-center rounded-[66px] border-[1.5px] border-[#FFB800] bg-[#FFF9C8]'
                onClick={() => setStatus('Served')}
            >
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#FFB800]">
                </div>
            </div>
            :
            <div className='cursor-pointer w-[35px]  p-[4px] flex items-center justify-end rounded-[63px] bg-[#00D930]'
                onClick={() => setStatus('Ready')}
            >
                <div className="w-[15px] h-[15px] rounded-[50%] bg-white">
                </div>
            </div>
        }
        <span className='font-quicksand font-normal text-[8px] leading-[10px]'>
            {status}
        </span>
    </div>
  )
}

export default ItemStatusToggle
