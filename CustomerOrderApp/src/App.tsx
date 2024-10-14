import { useState } from 'react'
import './App.css'
import Sidebar from './Components/SidebarView'
import TableSelectedDashboard from './Components/TableSelectedDashboard'
import TableSelectedItemsSelect from './Components/TableSelectedItemsSelectView'
import Dashboard from './Pages/DashboardView'
import ItemsSelect from './Pages/ItemsSelectView'
import LoginScreen from './Pages/LoginScreenView'
import { useAppSelector } from './State/hooks'
import TableManagementView from './Pages/TableManagementView'


function App() {
  const screen = useAppSelector(state => state.screen.screen)
  const sidebar = useAppSelector(state => state.sidebar.currentTab)
  const [logged, setLogged] = useState(true)
  return (
    !logged
      ?<LoginScreen />
      :
      <div className='w-full h-full flex'>  
        <Sidebar />
        {
          sidebar == 'POS'
          ?<div className='flex-1 flex'>
            {
              screen == 'Dashboard'
              ?<Dashboard />
              :screen == 'Items Select'
              ?<ItemsSelect />
              :<></>
            }
            {
              screen == 'Items Select'
              ?<TableSelectedItemsSelect />
              :<TableSelectedDashboard />
            }
          </div>
          :<div className='flex-1 flex'>
            {
              screen == 'Table Management'
              ?<TableManagementView />
              :<></>
            }
            {
              <TableSelectedDashboard />
            }
          </div>
        }
      </div>
  )
}

export default App
