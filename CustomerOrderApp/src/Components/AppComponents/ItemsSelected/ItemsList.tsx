import ItemsNavbar from './ItemsNavbar'
import { useState, useEffect } from 'react'
import DownIcon from '../../../Assets/Icons/Down.svg'
import SeparatingLine from '../../../Assets/Icons/SeparatingLine.svg'
import NoteIcon from '../../../Assets/Icons/Note.svg'
import ItemsListItem from './ItemsListItem'
import { Checkbox } from '@mui/material'

type ItemsListProps = {
    viewAll?: boolean | null;
    setViewAll?: React.Dispatch<React.SetStateAction<boolean>> | null;
    note: boolean;
    setNote: React.Dispatch<React.SetStateAction<boolean>> | null;
}

const ItemsList = ({viewAll = null, setViewAll, note, setNote}: ItemsListProps) => {
    const [screenHeight, setScreenHeight] = useState(document.body.clientHeight)
    const [checkedAll, setCheckedAll] = useState<boolean>(false)

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
    <div className={`w-full flex flex-col gap-y-[4px] ${note?'flex-1 overflow-y-scroll':''}`}>
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
                    note={note}
                    setNote={setNote}
                />
            </div>
            :
            <div className={`flex flex-col gap-y-[4px] ${!note?'max-h-[150px] tall:max-h-[200px]':'flex-1'} overflow-y-scroll `}>
                <div className={`ps-[16px] pe-[16px] flex items-center ${note?'':'hidden'}`}>
                    <div className={`p-[4px]`}>
                        <Checkbox 
                            checked={checkedAll}
                            onChange={() => setCheckedAll(!checkedAll)}
                        />
                    </div>
                    <span className='flex-1'>All</span>
                </div>
                <img src={SeparatingLine} className={`${note?'':'hidden'}`} />
                <ItemsListItem 
                    itemName='Water Bottle'
                    itemCount={1}
                    note={note}
                    setNote={setNote}
                    checkedAll={checkedAll}
                />
                <ItemsListItem
                    itemName='Veg Salads'
                    itemCount={10}
                    note={note}
                    setNote={setNote}
                    checkedAll={checkedAll}
                />
                <ItemsListItem
                    itemName='Veg Salads'
                    itemCount={5}
                    note={note}
                    setNote={setNote}
                    checkedAll={checkedAll}
                />
                <ItemsListItem
                    itemName='Veg Salads'
                    itemCount={11}
                    note={note}
                    setNote={setNote}
                    checkedAll={checkedAll}
                />
                <ItemsListItem
                    itemName='Veg Salads'
                    itemCount={11}
                    note={note}
                    setNote={setNote}
                    checkedAll={checkedAll}
                />
            </div>
        }  
        <div className={`${note?'':'hidden'} mt-[16px] ps-[70px] pe-[16px] flex flex-col gap-y-[16px]`}>
            <div className='flex gap-x-[8px]'>
                <img src={NoteIcon} />
                <input
                    className='outline-none bg-[#DDEBFF] p-[11px] flex-1 rounded-[7px]'
                />
            </div>
        </div> 
        
    </div>
  )
}

export default ItemsList
