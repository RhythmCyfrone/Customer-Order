import Table from '../../Components/AppComponents/Table'
import OrderTypeBar from '../../Components/AppComponents/OrderType'
import FloorNavbar from '../../Components/AppComponents/FloorNavbar'
import SeachNavbar from '../../Components/AppComponents/SearchNavbar'
import TableSelectorNavbar from '../../Components/AppComponents/TableSelectorNavbar'
import BackdropHandler from '../../Components/AppComponents/Backdrops/BackdropHandler'
import useDashboardViewModel from './DashboardViewModel'

function Dashboard() {
    const {
        isNotificationsVisible, setIsNotificationsVisible,
        loading, tablesList, tableName, setTableName, displayTables,
        statusFlter, setStatusFilter
    } = useDashboardViewModel()

    return (
        <div className='flex-1 flex flex-col gap-y-[24px] pt-[34px] pb-[34px] ms-[80px] me-[40px]'>
          <BackdropHandler 
              isNotificationsVisible={isNotificationsVisible}
              setIsNotificationsVisible={setIsNotificationsVisible}
          />
          <OrderTypeBar />
          <div className='flex flex-wrap gap-y-[16px] gap-x-[16px] justify-between items-center'>
            <FloorNavbar />
            <SeachNavbar 
              tableName={tableName}
              setTableName={setTableName}
            />
          </div>
          <TableSelectorNavbar 
            statusFlter={statusFlter}
            setStatusFilter={setStatusFilter}
          />
          <div className='flex gap-x-[61px] gap-y-[20px]  flex-wrap overflow-y-scroll'>
            {loading
            ?<span>Loading ...</span>
            :displayTables.map((table, index) => {
                return <Table
                    key={index}
                    tableNumber={table['id']}
                    floor={table['floor']}
                    occupancy={table['siting']}
                    status={table['curr_status']}
                    time='30 mins'
                  />
              })
            }
          </div>
        </div>
    )
  }
  
  export default Dashboard