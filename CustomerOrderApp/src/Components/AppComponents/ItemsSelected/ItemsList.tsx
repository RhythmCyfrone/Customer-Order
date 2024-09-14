import ItemsNavbar from './ItemsNavbar'
import { useState, useEffect } from 'react'
import DownIcon from '../../../Assets/Icons/Down.svg'
import ItemsListItem from './ItemsListItem'

type ItemsListProps = {
    viewAll?: boolean | null;
    setViewAll?: React.Dispatch<React.SetStateAction<boolean>> | null
}
const ItemsList = ({viewAll = null, setViewAll}: ItemsListProps) => {
    const [screenHeight, setScreenHeight] = useState(document.body.clientHeight)

    const handleViewAll = () => {
        if (setViewAll) {
            setViewAll(!viewAll);
        }
    };

    useEffect(() => {
        const updateMaxHeight = () => {
            setScreenHeight(document.body.clientHeight)
        };

        window.addEventListener('resize', updateMaxHeight);

        return () => window.removeEventListener('resize', updateMaxHeight);
    }, []);
  return (
    <div className='w-full flex flex-col gap-y-[4px]'>
        <ItemsNavbar />
        {
            viewAll != null && screenHeight < 750 && !viewAll
            ?
            <div className='relative flex flex-col gap-y-[4px]'>
                <div className='z-10 cursor-pointer absolute flex justify-center items-center bg-white bg-opacity-80 top-0 bottom-0 left-0 right-0'
                    onClick={() => handleViewAll()}
                >
                    <div className='bg-[#C3DAFF] pt-[8px] pe-[16px] pb-[8px] ps-[16px] flex justify-center rounded-[15px] items-center gap-x-[4px]'>
                        <span className='font-poppins text-[10px] leading-[15px] font-normal '>View All</span>
                        <img src={DownIcon} />
                    </div>
                </div>
                <ItemsListItem 
                    itemName='Water Bottle'
                    itemCount={1}
                />
            </div>
            :
            <div className='flex flex-col gap-y-[4px] max-h-[150px] overflow-y-scroll tall:max-h-[200px]'>
                <ItemsListItem 
                    itemName='Water Bottle'
                    itemCount={1}
                />
                <ItemsListItem
                    itemName='Veg Salads'
                    itemCount={10}
                />
                <ItemsListItem
                    itemName='Veg Salads'
                    itemCount={5}
                />
                <ItemsListItem
                    itemName='Veg Salads'
                    itemCount={11}
                />
            </div>
        }   
        
    </div>
  )
}

export default ItemsList
