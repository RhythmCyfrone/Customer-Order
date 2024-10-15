import Table from '../Components/Table/TableView'
import OrderTypeBar from '../Components/OrderTypeView'
import FloorNavbar from '../Components/FloorNavbarView'
import SeachNavbar from '../Components/SearchNavbarView'
import TableSelectorNavbar from '../Components/TableSelectorNavbarView'
import BackdropHandler from '../Components/Backdrops/BackdropHandlerView'
import useDashboardViewModel from '../ViewModels/DashboardViewModel'
import LunchBagIcon from '../Assets/Icons/lunch-bag.svg'
import SeparatingLine from '../Assets/Icons/SeparatingLine.svg'
import Takeaway from '../Components/Takeaway'
import TakeawayTableView from '../Components/TakeawayTableView'
import TableStatisticsView from '../Components/TableStatisticsView'

function Dashboard() {
    const {
        isNotificationsVisible, setIsNotificationsVisible,
        loadingTable, loadingTakeaways, takeawaysList, tableName, setTableName, displayTables, statusFlter,
        setStatusFilter, takeAway, setTakeAway, takeawayRef, scrollToTakeaway,
        tablesRef, scrollToTables, tableStastics
    } = useDashboardViewModel()

    return (
        <div className='flex-1 flex flex-col gap-y-[24px] pt-[34px] pb-[34px] ms-[80px] me-[40px]'>
          <BackdropHandler 
              isNotificationsVisible={isNotificationsVisible}
              setIsNotificationsVisible={setIsNotificationsVisible}
          />
          <OrderTypeBar 
            scrollToTakeaway={scrollToTakeaway}
            scrollToTables={scrollToTables}
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
            <div className='flex gap-x-[8px] justify-start items-center'>
                <img src={LunchBagIcon} />
                <span className='font-poppins text-nowrap font-normal text-[14px]'>Take away</span>
            </div>
            <div className='flex gap-x-[61px] gap-y-[20px] flex-wrap ' ref={takeawayRef}>
              <Takeaway 
                takeAway={takeAway}
                setTakeaway={setTakeAway}
              />
              {loadingTakeaways
              ?<span>Loading ...</span>
              :takeawaysList.map((takeaway, index) => {
                  return <TakeawayTableView
                      key={index}
                      tableNumber={takeaway['orderId']}
                      status={takeaway['curr_status']}
                  />
                })

              }
            </div>
            
          </div>
          <TableStatisticsView
          />
        </div>
    )
  }
  
  export default Dashboard