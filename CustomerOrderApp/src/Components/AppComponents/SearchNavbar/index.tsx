import SearchIcon from '../../../Assets/Icons/Search.svg'
import SecondaryWithIcon from '../../Shared/Buttons/SecondaryWithIcon'
import AddIcon from '../../../Assets/Icons/Add.svg'
import useSearchNavbarViewModel from './viewModel'
import type { SearchNavbarProps } from './viewModel'

const SearchNavbar = ({tableName, setTableName}: SearchNavbarProps) => {
    const {
        handleInputChange
    } = useSearchNavbarViewModel({tableName, setTableName})

  return (
    <div className='flex gap-x-[8px] desktop-max:w-full desktop-max:justify-between'>
        <div className='flex bg-[#EBF3FE] max-w-[160px] rounded-[20px] p-[8px] gap-x-[8px]'>
            <img src={SearchIcon} />
            <input
                type='text'
                value={tableName}
                onChange={handleInputChange}
                placeholder='Search Table'
                className='bg-transparent font-poppins font-normal text-[16px] outline-none w-full'
            />
        </div>
        <SecondaryWithIcon
            content='Assign New Table'
            iconSrc={AddIcon}
        />
    </div>
  )
}

export default SearchNavbar
