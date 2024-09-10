import DeleteItemCountIcon from '../../../Assets/Icons/DeleteItemCount.svg'
import AddItemCountIcon from '../../../Assets/Icons/AddItemCount.svg'

type ItemsListItemProps = {
    itemName: string;
    itemCount: number
}
const ItemsListItem = ({itemName, itemCount}: ItemsListItemProps) => {
  return (
    <div className='ps-[16px] pe-[16px] pt-[8px] flex items-center'>
            <div className='flex w-[40%] flex-col'>
                <span className='font-poppins font-medium text-[16px] leading-[24px]'>{itemName}</span>
                <span className='font-poppins font-normal text-[10px] leading-[15px]'>(Single)</span>
            </div>
            <div className='flex w-[25%] gap-x-[16px]'>
                <img src={DeleteItemCountIcon} className='cursor-pointer'/>
                <div className='flex-1 text-center'> 
                    <span className='font-poppins font-medium text-[16px] leading-[24px]'>{itemCount}</span>
                </div>
                <img src={AddItemCountIcon} className='cursor-pointer'/>
            </div>
            <div className='flex w-[25%] flex-col items-center gap-y-[2px]'>
                <div className='w-[14px] h-[14px] rounded-[50%] border-[1.5px] border-[#3B82F6] bg-[#FFFF00]'></div>
                <span className='font-quicksand font-normal text-[8px] leading-[10px]'>Placed</span>
            </div>
            <div className='w-[15%] text-right'> 
                <span className='font-poppins font-medium text-[20px] leading-[24px]'>25/-</span>
            </div>
        </div>
  )
}

export default ItemsListItem
