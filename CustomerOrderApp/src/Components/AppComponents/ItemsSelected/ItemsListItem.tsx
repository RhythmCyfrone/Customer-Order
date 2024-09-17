import DeleteItemCountIcon from '../../../Assets/Icons/DeleteItemCount.svg'
import AddItemCountIcon from '../../../Assets/Icons/AddItemCount.svg'
import { Checkbox } from '@mui/material';
import { useAppSelector } from '../../../State/hooks';
import { useEffect, useState } from 'react';

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
    const screen = useAppSelector(state => state.screen.screen)
    const displayCheckbox = note || discount
    const displayCounters = screen == 'Items Select' || !displayCheckbox
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if(checkedAll == true)
        {
            setChecked(true)
        }
    }, [checkedAll])
  return (
    <div className={`ps-[16px] pe-[16px] ${displayCheckbox?'':'pt-[8px]'} flex items-center`}>
            <div className='flex w-[40%]'>
                <div className={`p-[4px] ${displayCheckbox?'':'hidden'} `}>
                    <Checkbox 
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                </div>
                <div className='flex flex-1 flex-col'>
                    <span className='font-poppins font-medium text-[16px] leading-[24px]'>{itemName}</span>
                    <span className='font-poppins font-normal text-[10px] leading-[15px]'>(Single)</span>
                </div>
            </div>
            <div className='flex w-[25%] gap-x-[12px]'>
                <img src={DeleteItemCountIcon} className={`cursor-pointer ${displayCounters?'':'hidden'}`}/>
                <div className={`text-center ${displayCounters?'':'flex-1'}`}> 
                    <span className='font-poppins font-medium text-[16px] leading-[24px]'>{itemCount}</span>
                </div>
                <img src={AddItemCountIcon} className={`cursor-pointer ${displayCounters?'':'hidden'}`}/>
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
