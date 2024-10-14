import Table from '../Components/Table/TableView'
import FloorNavbar from '../Components/FloorNavbarView'
import SeachNavbar from '../Components/SearchNavbarView'
import TableSelectorNavbar from '../Components/TableSelectorNavbarView'
import BackdropHandler from '../Components/Backdrops/BackdropHandlerView'
import useTableManagementViewModel from '../ViewModels/TableManagementViewModel'
import SeparatingLine from '../Assets/Icons/SeparatingLine.svg'
import TableStatisticsView from '../Components/TableStatisticsView'

const TableManagementView
 = () => {
    const {
        isNotificationsVisible, setIsNotificationsVisible,
        loadingTable, loadingTakeaways, takeawaysList, tableName, setTableName, displayTables, statusFlter,
        setStatusFilter, takeAway, setTakeAway, takeawayRef, scrollToTakeaway,
        tablesRef, scrollToTables
    } = useTableManagementViewModel()
    
    return (
        <div className='flex-1 flex flex-col gap-y-[24px] pt-[90px] pb-[34px] ms-[80px] me-[40px]'>
          <BackdropHandler 
              isNotificationsVisible={isNotificationsVisible}
              setIsNotificationsVisible={setIsNotificationsVisible}
          />
          
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
          <div className='flex-1 flex flex-col gap-y-[20px] overflow-y-scroll'>
            <div className='flex gap-x-[61px] gap-y-[20px]  flex-wrap ' ref={tablesRef}>
              {loadingTable
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
            <img src={SeparatingLine} />
          </div>
          <TableStatisticsView />
          
        </div>
    )
}

export default TableManagementView

