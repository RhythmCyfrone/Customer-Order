import DeleteItemCountIcon from '../../../Assets/Icons/DeleteItemCount.svg'
import AddItemCountIcon from '../../../Assets/Icons/AddItemCount.svg'
import Checkbox from '@mui/material/Checkbox';

type ItemsListItemProps = {
    itemName: string;
    itemCount: number
}
const NewItemsListItem = ({itemName, itemCount}: ItemsListItemProps) => {
  return (
    <div className='ps-[16px] pe-[16px] flex items-center'>
            <div className='p-[4px]'>
                <Checkbox />
            </div>
            <div className='ps-[16px] flex flex-1 flex-col'>
                <span className='font-poppins font-medium text-[16px] leading-[24px]'>{itemName}</span>
                <span className='font-poppins font-normal text-[10px] leading-[15px]'>(Single)</span>
            </div>
            <div className='flex w-[23%] gap-x-[12px]'>
                <img src={DeleteItemCountIcon} className='cursor-pointer'/>
                <div className='text-center flex-1'> 
                    <span className='font-poppins font-medium text-[16px] leading-[24px]'>{itemCount}</span>
                </div>
                <img src={AddItemCountIcon} className='cursor-pointer'/>
            </div>
            <div className='w-[20%] text-right'> 
                <span className='font-poppins font-medium text-[20px] leading-[24px]'>25/-</span>
            </div>
        </div>
  )
}

export default NewItemsListItem
