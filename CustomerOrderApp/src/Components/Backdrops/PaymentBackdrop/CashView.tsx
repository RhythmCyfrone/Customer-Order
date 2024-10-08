import DropdownIcon from '../../../Assets/Icons/DropDown.svg'
import DenominationAdd from '../../../Assets/Icons/DenominationAdd.svg'
import DenominationSubtract from '../../../Assets/Icons/DenominationSubtract.svg'
import useCashViewModel from '../../../ViewModels/CashViewModel'
const Cash = () => {
    const {
        viewCashDenomination,
        viewReturnCashDenomination,
        handleViewCashDenomination,
        handleViewReturnCashDenomination,
        cashDenominations,
        returnCashDenominations,
        handleCashDenominationChange,
        handleReturnCashDenominationChange,
    } = useCashViewModel()
  return (
    <div className="flex flex-col ">
        <div className="flex w-full justify-between">
            <span className="font-poppins font-[500] text-[20px] leading-[30px] text-[#3B82F6]">Cash</span>
            <span className="font-poppins font-[500] text-[16px] leading-[24px] text-[#3B82F6]">Enter Amount</span>
        </div>
        <div className="flex w-full justify-between mt-[8px] items-center">
            <div className='cursor-pointer flex gap-x-[12px]'
                onClick={() => handleViewCashDenomination()}
            >
                <span className='font-poppins font-[500] text-[16px] leading-[24px]'>Denomination</span>
                <img src={DropdownIcon} />
            </div>
            <input type="text" className="w-[220px] p-[8px] text-[12px] font-poppins h-[40px] border-[1px] border-[#3B82F6] rounded-[4px] leading-[18px]
                                          focus:outline-none text-right"     
            
            />
        </div>
        <div className={`flex flex-col w-full ${viewCashDenomination?'mt-[20px] max-h-[250px]':'mt-0 max-h-0'} overflow-hidden me-[8px] gap-y-[8px] transition-all duration-300`}>
            {
                cashDenominations.map((denomination, index) => {
                    return (
                        <div className='flex w-full justify-between ps-[8px]' key={index}>
                            <span className='flex-1 font-poppins font-[500] text-[12px] leading-[16px]'>{denomination.denomination}</span>
                            <div className='flex gap-x-[20px] items-center'>
                                <img src={DenominationSubtract} className='cursor-pointer'
                                    onClick={() => handleCashDenominationChange(index, denomination.count-1)}
                                />
                                <input type="number" className="w-[100px] p-[4px] text-[12px] font-poppins rounded-[6px] leading-[18px] bg-[#C3DAFF]
                                                    focus:outline-none text-center"
                                    value={denomination.count} onChange={(e) => {
                                        handleCashDenominationChange(index, parseInt(e.target.value))
                                    }}
                                />
                                <img src={DenominationAdd} className='cursor-pointer'
                                    onClick={() => handleCashDenominationChange(index, denomination.count+1)}
                                />
                            </div>
                            <span className='flex-1 font-poppins font-[500] text-[12px] leading-[16px] text-right'>{denomination.count == 0 || Number.isNaN(denomination.count)?'_':denomination.count}</span>
                        </div>
                    )
                })
            }
        </div>
        <div className="flex w-full justify-between mt-[24px]">
            <span className="font-poppins font-[500] text-[20px] leading-[30px] text-[#3B82F6]">Return Amount</span>
            <span className="font-poppins font-[500] text-[16px] leading-[24px] text-[#3B82F6]">Enter Amount</span>
        </div>
        <div className="flex w-full justify-between mt-[8px] items-center">
            <div className='cursor-pointer flex gap-x-[12px]'
                onClick={() => handleViewReturnCashDenomination()}
            >
                <span className='font-poppins font-[500] text-[16px] leading-[24px]'>Denomination</span>
                <img src={DropdownIcon} />
            </div>
            <input type="text" className="w-[220px] p-[8px] text-[12px] font-poppins h-[40px] border-[1px] border-[#3B82F6] rounded-[4px] leading-[18px]
                                          focus:outline-none text-right"     
            
            />
        </div>
        <div className={`flex flex-col w-full ${viewReturnCashDenomination?'mt-[20px] max-h-[250px]':'mt-0 max-h-0'} overflow-hidden me-[8px] gap-y-[8px] transition-height duration-300`}>
            {
                returnCashDenominations.map((denomination, index) => {
                    return (
                        <div className='flex w-full justify-between ps-[8px]' key={index}>
                            <span className='flex-1 font-poppins font-[500] text-[12px] leading-[16px]'>{denomination.denomination}</span>
                            <div className='flex gap-x-[20px] items-center'>
                                <img src={DenominationSubtract} className='cursor-pointer'
                                    onClick={() => handleReturnCashDenominationChange(index, denomination.count-1)}
                                />
                                <input type="number" className="w-[100px] p-[4px] text-[12px] font-poppins rounded-[6px] leading-[18px] bg-[#C3DAFF]
                                                    focus:outline-none text-center"
                                    value={denomination.count} onChange={(e) => {
                                        handleReturnCashDenominationChange(index, parseInt(e.target.value))
                                    }}
                                />
                                <img src={DenominationAdd} className='cursor-pointer'
                                    onClick={() => handleReturnCashDenominationChange(index, denomination.count+1)}
                                />
                            </div>
                            <span className='flex-1 font-poppins font-[500] text-[12px] leading-[16px] text-right'>{denomination.count == 0 || Number.isNaN(denomination.count)?'_':denomination.count}</span>
                        </div>
                    )
                })
            }
            </div>
    </div>
  )
}

export default Cash
