import './App.css'
import Sidebar from './Components/AppComponents/Sidebar/Sidebar'
import TableSelected from './Components/AppComponents/TableSelected/TableSelected'
import Dashboard from './Screens/Dashboard'
import ItemsSelect from './Screens/ItemsSelect'
import { useAppSelector } from './State/hooks'


function App() {
  const screen = useAppSelector(state => state.screen.screen)
  return (
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
        <TableSelected />
      </div>
    </div>
  )
}

export default App
