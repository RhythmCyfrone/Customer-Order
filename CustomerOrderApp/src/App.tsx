import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import TableSelectedDashboard from './Components/TableSelectedDashboard'
import TableSelectedItemsSelect from './Components/TableSelectedItemsSelect'
import Dashboard from './Pages/Dashboard'
import ItemsSelect from './Pages/ItemsSelect'
import LoginScreen from './Pages/LoginScreen'
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
