import DeleteItemCountIcon from '../../../../Assets/Icons/DeleteItemCount.svg'
import AddItemCountIcon from '../../../../Assets/Icons/AddItemCount.svg'
import { Checkbox } from '@mui/material';
import ItemStatusToggle from '../ItemStatusToggle';
import useItemsListItemViewModel from './viewModel';

type ItemsListItemProps = {
    itemName: string;
    itemCount: number;
    note: boolean;
    setNote: React.Dispatch<React.SetStateAction<boolean>> | null;
    discount: boolean;
    setDiscount: React.Dispatch<React.SetStateAction<boolean>> ;
    checkedAll?: boolean
}
const ItemsListItem = ({itemName, itemCount, note, setNote, checkedAll = false, discount, setDiscount}: ItemsListItemProps) => {
    const {
        screen, displayCheckbox, displayCounters, checked, setChecked
    } = useItemsListItemViewModel({note, discount, checkedAll})
    
  return (
    <div className={`ps-[16px] pe-[16px] ${displayCheckbox?'':'pt-[8px]'} flex items-center`}>
            <div className='flex w-[40%]'>
                {
                    displayCheckbox && 
                    <div className={`p-[4px] `}>
                        <Checkbox 
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </div>
                }
                <div className='flex flex-1 flex-col'>
                    <span className='font-poppins font-medium text-[16px] leading-[24px]'>{itemName}</span>
                    <span className='font-poppins font-normal text-[10px] leading-[15px]'>(Single)</span>
                </div>
            </div>
            <div className='flex w-[25%] gap-x-[12px]'>
                <img src={DeleteItemCountIcon} className={`cursor-pointer ${displayCounters?'':'hidden'}`}/>
                <div className={`text-center ${displayCounters?'flex-1':'flex-1'}`}> 
                    <span className='font-poppins font-medium text-[16px] leading-[24px]'>{itemCount}</span>
                </div>
                <img src={AddItemCountIcon} className={`cursor-pointer ${displayCounters?'':'hidden'}`}/>
            </div>
            <ItemStatusToggle />
            <div className='w-[15%] text-right'> 
                <span className='font-poppins font-medium text-[20px] leading-[24px]'>25/-</span>
            </div>
        </div>
  )
}

export default ItemsListItem
