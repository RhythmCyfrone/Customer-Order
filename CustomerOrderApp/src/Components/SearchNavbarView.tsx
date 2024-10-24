import SearchIcon from '../Assets/Icons/Search.svg'
import AddIcon from '../Assets/Icons/Add.svg'
import CancelSearchIcon from '../Assets/Icons/CancelSearch.svg'
import useSearchNavbarViewModel from '../ViewModels/SearchNavbarViewModel'
import type { SearchNavbarProps } from '../ViewModels/SearchNavbarViewModel'

const SearchNavbar = ({tableName, setTableName}: SearchNavbarProps) => {
    const {
        screen, handleInputChange, handleScreenChange
    } = useSearchNavbarViewModel({tableName, setTableName})

  return (
    <div className='flex gap-x-[8px] desktop-max:w-full desktop-max:justify-between'>
        <div className={`flex bg-[#EBF3FE] ${screen == 'Dashboard'?'max-w-[160px]':'min-w-[320px]'} flex-1 rounded-[20px] p-[8px] gap-x-[8px]`}>
            <img src={SearchIcon} />
            <input
                type='text'
                value={tableName}
                onChange={handleInputChange}
                placeholder='Search Table'
                className='bg-transparent font-poppins font-normal text-[16px] outline-none w-full'
            />
            {
                tableName !== '' && 
                <img src={CancelSearchIcon} className='cursor-pointer'
                    onClick={() => setTableName('')}
                />
            }
        </div>
        {
            screen == 'Dashboard' &&
            <button className='text-center flex items-center gap-x-[8px] fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[8px] pe-[16px] hover:ShadowPrimaryHover
                    hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
                onClick={() => handleScreenChange()}
            >
                <img src={AddIcon} alt="My Icon" className="icon-class" />
                Assign New Table
            </button>
        }
        
    </div>
  )
}

export default SearchNavbar
