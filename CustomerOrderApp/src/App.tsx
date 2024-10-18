import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './Components/SidebarView'
import TableSelectedDashboard from './Components/TableSelectedDashboard'
import TableSelectedItemsSelect from './Components/TableSelectedItemsSelectView'
import Dashboard from './Pages/DashboardView'
import ItemsSelect from './Pages/ItemsSelectView'
import LoginScreen from './Pages/LoginScreenView'
import { useAppSelector } from './State/hooks'
import TableManagementView from './Pages/TableManagementView'
import { MasterEndpoints } from './Services/HTTPServices/master'
import * as masterService from './Services/HTTPServices/master'
import { setMaster, clearMaster } from './State/Slices/masterSlice'
import { useAppDispatch } from './State/hooks'


function App() {
  const screen = useAppSelector(state => state.screen.screen)
  const sidebar = useAppSelector(state => state.sidebar.currentTab)
  const dispatch = useAppDispatch()
  const [logged, setLogged] = useState(true)

  type MasterServiceKeys = keyof typeof masterService;

  const callApiFunctions = async () => {
    try {
      const promises = Object.keys(MasterEndpoints).map(async (key) => {
        const functionName = key as MasterServiceKeys;
    
        if (masterService[functionName] && typeof masterService[functionName] === 'function') {
          try {
            const res = await masterService[functionName]();
      
            if (res.status === 200) {
              return Promise.resolve({
                functionName,
                status: 'fulfilled',
                data: res.data,
                error: null
              });
            } else {
              throw new Error(res.statusText || 'Unknown error');
            }
          } catch (error: any) {
            // Handle any errors, including non-200 statuses
            return Promise.reject({
              functionName,
              status: 'rejected',
              data: null,
              error: error.message || error
            });
          }
        } else {
          return Promise.reject({
            functionName,
            status: 'rejected',
            data: null,
            error: `Function ${functionName} not found`
          });
        }
      });
    
      const results = await Promise.allSettled(promises);
    
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          dispatch(setMaster({
            key: MasterEndpoints[result.value.functionName].data,
            data: result.value.data
          }));
          console.log(`${result.value.functionName} response: `, result.value.data);
        } else if (result.status === 'rejected') {
          console.error(`${result.reason.functionName} error: `, result.reason.error);
        }
      });
    
    } catch (err: any) {
      console.error('Error fetching master data: ', err.message);
    }
  };

  useEffect(() => {
    callApiFunctions();
  }, []);

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
