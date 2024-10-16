const TableStatisticsView = () => {
    const ActualCapacity = 80;
    const screenWidth = document.body.clientWidth;
  return (
    <div className={`flex gap-y-[8px] text-nowrap  ${screenWidth <= 1200?'items-center gap-x-[12px]':'gap-x-[16px]'}`}>
        <div className={`flex flex-1 items-start gap-x-[8px] pt-[7px] pb-[7px] ps-[8px] pe-[8px] bg-[#EBF3FE] rounded-[8px] table-statistics-shadow`}>
            <div className={`flex flex-col ${screenWidth <= 1200?'':'gap-y-[4px]'}`}>
                <span className={`font-poppins flex-1 font-[500] ${screenWidth <= 1200?'text-[12px] leading-[16px]':'text-[16px] leading-[24px]'} `}>Tables</span>
                <div className="flex gap-x-[16px] flex-wrap">
                    <div className="flex gap-x-[4px] items-center flex-1">
                        <div className="w-[8px] h-[8px] bg-[#6C0141] rounded-full"></div>
                        <span className='font-poppins flex-1 font-[500] text-[10px] '>Free</span>
                        <span className='font-poppins font-[500] text-[#3B82F6] text-[14px]'>|</span>
                        <span className='font-poppins font-[500] text-[12px]'>12</span>
                    </div>
                    <div className="flex gap-x-[4px] items-center">
                        <div className="w-[8px] h-[8px] bg-[#3B82F6] rounded-full"></div>
                        <span className='font-poppins flex-1 font-[500] text-[10px] '>Occupied</span>
                        <span className='font-poppins font-[500] text-[#3B82F6] text-[14px]'>|</span>
                        <span className='font-poppins font-[500] text-[12px]'>06</span>
                    </div>
                    <div className="flex gap-x-[4px] items-center">
                        <div className="w-[8px] h-[8px] bg-[#FFD700] rounded-full"></div>
                        <span className='font-poppins flex-1 font-[500] text-[10px] '>Reserved</span>
                        <span className='font-poppins font-[500] text-[#3B82F6] text-[14px]'>|</span>
                        <span className='font-poppins font-[500] text-[12px]'>04</span>
                    </div>
                </div>
            </div>
            <div className={`flex flex-1 flex-col justify-between ${screenWidth <= 1200?'gap-y-[6px]':''}`}>
                <span className={`text-center font-poppins font-[500] text-[12px] ${screenWidth <= 1200?'':'leading-[16px]'}`}>
                    Current Capacity
                </span>
                <div className="text-center">
                    
                </div>
                <div className="flex justify-center">
                    <div className={`circular-progress-bar ${screenWidth <= 1200?'h-[37px] w-[37px]':'h-[33px] w-[33px]'} flex items-center justify-center rounded-[50%]`}
                        style={{
                            backgroundImage: `conic-gradient(#FFFFFF 0% ${100-ActualCapacity}%, #3B82F6 ${100-ActualCapacity}% 100%)`
                        }}
                    >
                        <div className={`progress-bar-fill ${screenWidth <= 1200?'h-[26px] w-[26px]':'h-[24px] w-[24px]'} rounded-[50%] bg-[#EBF3FE] flex justify-center items-center`}>
                            <span className="text-[9.5px] font-poppins font-[500] text-[#3B82F6]">
                                {ActualCapacity}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`flex ${screenWidth <= 1200?'gap-x-[8px]':'flex-1 gap-x-[16px]'}`}>
            <div className={`flex flex-col flex-1 justify-between pt-[7px] pb-[7px] ps-[8px] pe-[8px]  bg-[#EBF3FE] rounded-[8px] table-statistics-shadow gap-y-[8px]`}>
              <span className={`font-poppins font-[500] ${screenWidth <= 1200?'text-[8px] leading-[12px]':'text-[14px] leading-[20px]'}  text-center text-nowrap`}>Avg. table occupancy</span>
              <span className={`font-poppins font-[500] ${screenWidth <= 1200?'text-[12px] leading-[16px]':'text-[16px] leading-[20px]'} text-center text-nowrap text-[#02A909]`}>80%</span>
            </div>
            <div className={`flex flex-col flex-1 justify-between pt-[7px] pb-[7px] ps-[8px] pe-[8px] bg-[#EBF3FE] rounded-[8px] table-statistics-shadow gap-y-[8px]`}>
              <span className={`font-poppins font-[500] ${screenWidth <= 1200?'text-[8px] leading-[12px]':'text-[14px] leading-[20px]'} text-center text-nowrap`}>Avg. Table turn over time</span>
              <span className={`font-poppins font-[500] ${screenWidth <= 1200?'text-[12px] leading-[16px]':'text-[16px] leading-[20px]'} text-center text-nowrap text-[#02A909]`}>50 mins</span>
            </div>
        </div>
    </div>
  )
}

export default TableStatisticsView
