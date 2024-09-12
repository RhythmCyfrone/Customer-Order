import BackArrowIcon from '../Assets/Icons/BackArrow.svg'
import FoodTypeNavbar from '../Components/AppComponents/FoodTypeNavbar/FoodTypeNavbar'
import SearchIcon from '../Assets/Icons/Search.svg'
import { useAppDispatch, useAppSelector } from '../State/hooks'
import { selectScreen } from './ScreensSlice'
import { useEffect, useState } from 'react'
import FoodSelectorNavbar from '../Components/AppComponents/FoodSelectorNavbar/FoodSelectorNavbar'
import FoodItem from '../Components/AppComponents/FoodItem/FoodItem'

const ItemsSelect = () => {
    const [itemName, setItemName] = useState<string>('')
    const screen = useAppSelector(state => state.screen.screen)
    const [maxWidth, setMaxWidth] = useState<number>(document.body.clientWidth - 500 - 120-40);
    const dispatch = useAppDispatch()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.target.value);
    }

    useEffect(() => {
        const updateMaxWidth = () => setMaxWidth(document.body.clientWidth - 500 - 120-40);

        window.addEventListener('resize', updateMaxWidth);

        return () => window.removeEventListener('resize', updateMaxWidth);
    }, []);

  return (
    <div className='ItemsScreen flex-1 flex flex-col gap-y-[24px] pt-[65px] pb-[34px] ms-[80px] me-[40px]'>
        <div className='flex gap-x-[8px] items-center'>
            <img src={BackArrowIcon} className='cursor-pointer' 
                onClick={() => dispatch(selectScreen({
                    screen: 'Dashboard'
                }))}
            />
            <span className='font-poppins font-medium text-[24px] leading-[36px]'>
                Add Items to Order
            </span>
        </div>
        <div className='flex ps-[4px] flex-wrap gap-x-[40px] gap-y-[16px] justify-between items-center'>
            <FoodTypeNavbar />
            <div className='flex bg-[#EBF3FE] rounded-[20px] p-[8px] gap-x-[8px] w-[370px]'>
                <img src={SearchIcon} />
                <input
                    type='text'
                    value={itemName}
                    onChange={handleInputChange}
                    placeholder='Search Items'
                    className='bg-transparent font-poppins font-normal text-[16px] outline-none w-full'
                />
            </div>
        </div>
        <FoodSelectorNavbar />
        <div className='flex flex-col gap-y-[8px]'>
            <div className={`flex flex-col gap-y-[16px]  w-full`} style={{ maxWidth: `${maxWidth}px` }}>
                <span className='font-poppins font-semibold text-[12px] leading-[18px]'>
                    Frequently Order Items
                </span>
                <div className='flex gap-x-[36px] overflow-x-scroll'>
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>
            <div className={`flex flex-col gap-y-[16px]  w-full`} style={{ maxWidth: `${maxWidth}px` }}>
                <span className='font-poppins font-semibold text-[12px] leading-[18px]'>
                    Biryani
                </span>
                <div className='flex gap-x-[36px] overflow-x-scroll'>
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>
            <div className={`flex flex-col gap-y-[16px]  w-full`} style={{ maxWidth: `${maxWidth}px` }}>
                <span className='font-poppins font-semibold text-[12px] leading-[18px]'>
                    Burgers
                </span>
                <div className='flex gap-x-[36px] overflow-x-scroll'>
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>
        </div>
    </div>    
  )
}

export default ItemsSelect
