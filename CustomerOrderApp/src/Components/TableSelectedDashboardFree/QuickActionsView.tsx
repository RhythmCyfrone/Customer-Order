import PersonAddIcon from '../../Assets/Icons/PersonAdd.svg'
import PersonSubtractIcon from '../../Assets/Icons/PersonSubtract.svg'
import DropDownIcon from '../../Assets/Icons/DropDown.svg'
import SearchIcon from '../../Assets/Icons/MobileSearch.svg'


type QuickActionsViewProps = {
    newCustomerName: string
    newCustomerMobile: string
    countPersons: number
    updateCountPersons: (count: number) => void
    handleNewCustomerNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleNewCustomerMobileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const QuickActionsView = ({
    newCustomerName, newCustomerMobile, countPersons, updateCountPersons,
    handleNewCustomerNameChange, handleNewCustomerMobileChange
  }: QuickActionsViewProps) => {

  return (
    <div className='flex w-[335px] flex-col p-[4px] mt-[16px] mb-[16px]'>
        <span className='font-poppins font-[500] text-[20px] leading-[30px] w-[335px] text-start'>Assign Table</span>
        <span className='font-poppins font-[500] text-[18px] leading-[30px] w-[335px] text-center'>No. of Persons</span>
        <div className='flex justify-center w-full items-center gap-x-[16px] mt-[16px]'>
            <img src={PersonAddIcon} className='cursor-pointer' 
                onClick={() => updateCountPersons(countPersons+1)}
            />
            <input
                className='text-center outline-none bg-[#DDEBFF] p-[11px] w-[50px] rounded-[11px]'
                type='text'
                value={countPersons}
                onChange={(e) => updateCountPersons(Math.max(parseInt(e.target.value), 0))}
            />
            <img src={PersonSubtractIcon} className='cursor-pointer' 
                onClick={() => updateCountPersons(Math.max(countPersons-1, 0))}
            />
        </div>
        <span className='font-poppins font-[600] mt-[12px] text-[12px] leading-[18px] w-[335px] text-start'>Mobile Number</span>
        <div className='flex gap-x-[16px] w-[335px] mt-[8px]'>
            <div className=' bg-[#DDEBFF] rounded-[11px] flex justify-center items-center gap-x-[8px] p-[8px]'>
                <img src={DropDownIcon} />
                <span className='font-quicksand font-[500] text-[16px] leading-[20px]'>91</span>
            </div>
            <div className='flex flex-1'>
                <input className='outline-none bg-[#DDEBFF] p-[11px] flex-1 rounded-l-[11px]'
                        type='text'
                        value={newCustomerMobile}
                        onChange={(e) => handleNewCustomerMobileChange(e)}
                />
                <div className='rounded-r-[11px] bg-[#3B82F6] p-[11px] flex justify-center items-center'>
                    <img src={SearchIcon}/>
                </div>
            </div>
        </div>
        <span className='font-poppins font-[600] mt-[12px] text-[12px] leading-[18px] w-[335px] text-start'>Customer Name</span>
        <input
            className='outline-none bg-[#DDEBFF] p-[11px] w-[335px] mt-[8px] rounded-[11px]'
            type='text'
            value={newCustomerName}
            onChange={(e) => handleNewCustomerNameChange(e)}
        />
    </div>
  )
}

export default QuickActionsView
