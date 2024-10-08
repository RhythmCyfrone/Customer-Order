import { useState } from 'react'
import './App.css'
import Sidebar from './Components/SidebarView'
import TableSelectedDashboard from './Components/TableSelectedDashboard'
import TableSelectedItemsSelect from './Components/TableSelectedItemsSelectView'
import Dashboard from './Pages/DashboardView'
import ItemsSelect from './Pages/ItemsSelectView'
import LoginScreen from './Pages/LoginScreenView'
import { useAppSelector } from './State/hooks'


function App() {
  const screen = useAppSelector(state => state.screen.screen)
  const [logged, setLogged] = useState(true)
  return (
    !logged
      ?<LoginScreen />
      :
      <div className='w-full h-full flex'>  
        <Sidebar />
        <div className='flex-1 flex'>
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
      </div>
  )
}

export default App
