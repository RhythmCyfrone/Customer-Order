import Table from '../../Components/AppComponents/Table'
import OrderTypeBar from '../../Components/AppComponents/OrderType'
import FloorNavbar from '../../Components/AppComponents/FloorNavbar'
import SeachNavbar from '../../Components/AppComponents/SearchNavbar'
import TableSelectorNavbar from '../../Components/AppComponents/TableSelectorNavbar'
import BackdropHandler from '../../Components/AppComponents/Backdrops/BackdropHandler'
import useDashboardViewModel from './viewModel'

function Dashboard() {
    const {
        isNotificationsVisible, setIsNotificationsVisible, startPosition, dispatch
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
            <SeachNavbar />
          </div>
          <TableSelectorNavbar />
          <div className='flex gap-x-[61px] gap-y-[20px]  flex-wrap overflow-y-scroll'>
            <Table status='Free' floor='1' tableNumber='A1' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A2' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A3' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A4' time='30 mins' occupancy={2} />
            <Table status='Ordered' floor='1' tableNumber='A5' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A6' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A7' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A8' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A9' time='30 mins' occupancy={2} />
            <Table status='Reserved' floor='1' tableNumber='A10' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A11' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A12' time='30 mins' occupancy={2} />
            <Table status='Billed' floor='1' tableNumber='A13' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A14' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A15' time='30 mins' occupancy={2} />
            <Table status='Paid' floor='1' tableNumber='A16' time='30 mins' occupancy={2} />            
            <Table status='Free' floor='1' tableNumber='A17' time='30 mins' occupancy={2} />
            <Table status='Billed' floor='1' tableNumber='A18' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A19' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A20' time='30 mins' occupancy={2} />
          </div>
        </div>
    )
  }
  
  export default Dashboard