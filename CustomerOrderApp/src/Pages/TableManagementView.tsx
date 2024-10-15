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
        loadingTable, tableName, setTableName, displayTables, statusFlter,
        setStatusFilter, tablesRef, tableStastics
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
                      tableNumber={table.tableName}
                      floor={'1st floor'}
                      occupancy={table.tableMaxPax}
                      status={table.tableTrackingStatusName}
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

