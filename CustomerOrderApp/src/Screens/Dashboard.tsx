import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../State/hooks'
import Table from '../Components/AppComponents/Table/Table'
import OrderTypeBar from '../Components/AppComponents/OrderType/OrderType'
import CrossIcon from '../Assets/Icons/Cross.svg'
import FloorNavbar from '../Components/AppComponents/FloorNavbar/FloorNavbar'
import SeachNavbar from '../Components/AppComponents/SearchNavbar/SeachNavbar'
import TableSelectorNavbar from '../Components/AppComponents/TableSelectorNavbar/TableSelectorNavbar'
import { resetStartPosition, initialState } from './BackdropSlice'

function Dashboard() {
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);
  const startPosition = useAppSelector(state => state.backdrop)
  const dispatch = useAppDispatch()

    useEffect(() => {
       if(startPosition.initiator == 'Notifications' && (startPosition.startPosition.top !== 0 || startPosition.startPosition.left !== 0)) {
          setIsNotificationsVisible(true)
       }
    }, [startPosition]);
    return (
        <div className='flex-1 flex flex-col gap-y-[24px] pt-[34px] pb-[34px] ms-[80px] me-[40px]'>
          <div
                className={`backdrop-blur-[1px] z-20 backdrop absolute bg-opacity-20 bg-black flex justify-center items-center ${isNotificationsVisible?'transition-all duration-200':''}
                }`}
                style={{
                    top: isNotificationsVisible ? '95px' : `${startPosition.startPosition.top}px`,
                    left: isNotificationsVisible ? '81px' : `${startPosition.startPosition.left}px`,
                    right: isNotificationsVisible ? '0' : `${document.body.clientWidth - startPosition.startPosition.left}px`,
                    bottom: isNotificationsVisible ? '0px' : `${document.body.clientHeight - startPosition.startPosition.top}px`,
                }}
            >
                <div className='relative w-[300px] h-[400px] bg-white rounded-[10px]'>
                    <img src={CrossIcon} className='absolute top-[8px] right-[8px]' 
                        onClick={() => {
                          dispatch(resetStartPosition(initialState))
                          setIsNotificationsVisible(false)
                      }}
                    />
                </div>
            </div>
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