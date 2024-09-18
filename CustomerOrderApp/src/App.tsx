import { useState } from 'react'
import './App.css'
import Sidebar from './Components/AppComponents/Sidebar/Sidebar'
import TableSelectedDashboard from './Components/AppComponents/TableSelectedDashboard/TableSelected'
import TableSelectedItemsSelect from './Components/AppComponents/TableSelectedItemsSelect/TableSelected'
import Dashboard from './Screens/Dashboard'
import ItemsSelect from './Screens/ItemsSelect'
import LoginScreen from './Screens/LoginScreen'
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
