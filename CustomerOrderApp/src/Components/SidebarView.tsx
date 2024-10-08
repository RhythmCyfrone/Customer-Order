import '../Styles/Shadows.css'
import '../Styles/Fonts.css'
import PosSelectedSidebarIcon from '../Assets/Icons/PosSelectedSidebar.svg'
import PosUnselectedSidebarIcon from '../Assets/Icons/PosUnselectedSidebar.svg'
import TableSidebarUnselectedIcon from '../Assets/Icons/TableSidebarUnselected.svg'
import TableSidebarSelectedIcon from '../Assets/Icons/TableSidebarSelected.svg'
import { useAppSelector, useAppDispatch } from '../State/hooks'
import {toggle} from '../State/Slices/sidebarSlice'



const Sidebar = () => {
  const sidebarTab = useAppSelector(state => state.sidebar.currentTab)
  const dispatch = useAppDispatch()
  return (
    <div className='relative w-[80px] shadow-sidebar p-[10px] pt-[15px] pb-[15px]'>
      <div className='fontSidebarHeading text-CustomBrand-300 text-[25px]'>
        ZUCI
      </div>
      <div className='text-center p-[1px] fontSidebarSubHeading text-CustomBrand-200 text-[11px] mt-[-5px]'>
        jubilee hills
      </div>
      <div className='absolute top-[150px] flex flex-col gap-y-[40px] left-[15px] right-[15px]'>
        {sidebarTab == 'POS'
        ?<>
          <div className='bg-CustomBrand-300 rounded-[5px] flex justify-center p-[11px] cursor-pointer'>
            <img src={PosSelectedSidebarIcon} />
          </div>
          <div className='rounded-[5px] flex justify-center ps-[8px] pe-[8px] pt-[7px] pb-[7px] cursor-pointer hover:bg-[#EBF3FE]'
            onClick={() => dispatch(toggle())}  
          >
            <img src={TableSidebarUnselectedIcon} />
          </div>
        </>
        :<>
          <div className='rounded-[5px] flex justify-center p-[11px] cursor-pointer hover:bg-[#EBF3FE]'
            onClick={() => dispatch(toggle())}
          >
            <img src={PosUnselectedSidebarIcon} />
          </div>
          <div className='bg-CustomBrand-300 rounded-[5px] flex justify-center ps-[8px] pe-[8px] pt-[7px] pb-[7px] cursor-pointer '>
            <img src={TableSidebarSelectedIcon} />
          </div>
        </>
        }
      </div>
    </div>
  )
}

export default Sidebar
