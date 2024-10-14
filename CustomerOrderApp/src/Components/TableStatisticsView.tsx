const TableStatisticsView = () => {
    const ActualCapacity = 80;
  return (
    <div className='flex gap-x-[16px] flex-wrap gap-y-[8px] text-nowrap'>
        <div className='flex flex-1 gap-x-[8px] pt-[7px] pb-[7px] ps-[8px] pe-[8px] bg-[#EBF3FE] rounded-[8px] table-statistics-shadow'>
            <div className='flex flex-col'>
                <span className='font-poppins flex-1 font-[500] text-[16px] leading-[24px]'>Tables</span>
                <div className="flex gap-x-[16px]">
                    <div className="flex gap-x-[4px] items-center">
                        <div className="w-[8px] h-[8px] bg-[#02A909] rounded-full"></div>
                        <span className='font-poppins font-[500] text-[10px] leading-[15px]'>Free</span>
                        <span className='font-poppins font-[500] text-[#3B82F6] text-[14px]'>|</span>
                        <span className='font-poppins font-[500] text-[12px]'>12</span>
                    </div>
                    <div className="flex gap-x-[4px] items-center">
                        <div className="w-[8px] h-[8px] bg-[#3B82F6] rounded-full"></div>
                        <span className='font-poppins font-[500] text-[10px] leading-[15px]'>Occupied</span>
                        <span className='font-poppins font-[500] text-[#3B82F6] text-[14px]'>|</span>
                        <span className='font-poppins font-[500] text-[12px]'>06</span>
                    </div>
                    <div className="flex gap-x-[4px] items-center">
                        <div className="w-[8px] h-[8px] bg-[#FFD700] rounded-full"></div>
                        <span className='font-poppins font-[500] text-[10px] leading-[15px]'>Reserved</span>
                        <span className='font-poppins font-[500] text-[#3B82F6] text-[14px]'>|</span>
                        <span className='font-poppins font-[500] text-[12px]'>04</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 flex-col justify-between pt-[4px] pb-[6px]'>
                <span className='w-[40%] font-poppins font-[500] text-[12px] leading-[16px]'>
                    Actual Capacity
                    <span className='text-[#3B82F6] text-[14px]'> {ActualCapacity}%</span>
                </span>
                <div className='progress-bar h-[9px] w-full bg-[#C3DAFF] rounded-[4.5px]'>
                    <div className='progress-bar-fill h-full rounded-[4.5px] bg-[#3B82F6]'
                        style={{ width: `${ActualCapacity}%` }}>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-1 gap-x-[16px]'>
            <div className='flex flex-1 flex-col justify-between pt-[7px] pb-[7px] ps-[21px] pe-[21px] bg-[#EBF3FE] rounded-[8px] table-statistics-shadow'>
              <span className='font-poppins font-[500] text-[12px] leading-[16px] text-center text-nowrap'>Avg. table occupancy</span>
              <span className='font-poppins font-[500] text-[16px] leading-[20px] text-center text-nowrap text-[#02A909]'>80%</span>
            </div>
            <div className='flex flex-1 flex-col justify-between pt-[7px] pb-[7px] ps-[21px] pe-[21px] bg-[#EBF3FE] rounded-[8px] table-statistics-shadow'>
              <span className='font-poppins font-[500] text-[12px] leading-[16px] text-center text-nowrap'>Avg. Table turn over time</span>
              <span className='font-poppins font-[500] text-[16px] leading-[20px] text-center text-nowrap text-[#3B82F6]'>50 mins</span>
            </div>
        </div>
    </div>
  )
}

export default TableStatisticsView
