import { useState } from 'react'
import './App.css'
import Sidebar from './Components/AppComponents/Sidebar/Sidebar'
import TableSelected from './Components/AppComponents/TableSelected/TableSelected'
import Table from './Components/AppComponents/Table/Table'
import OrderTypeBar from './Components/AppComponents/OrderType/OrderType'
import FloorNavbar from './Components/AppComponents/FloorNavbar/FloorNavbar'
import SeachNavbar from './Components/AppComponents/SearchNavbar/SeachNavbar'
import TableSelectorNavbar from './Components/AppComponents/TableSelectorNavbar/TableSelectorNavbar'


function App() {
  return (
    <div className='w-full h-full flex'>  
      <Sidebar />
      <div className='flex-1 flex'>
        <div className='flex-1 flex flex-col gap-y-[24px] pt-[34px] pb-[34px] ms-[80px] me-[40px]'>
          <OrderTypeBar />
          <div className='flex justify-between items-center'>
            <FloorNavbar />
            <SeachNavbar />
          </div>
          <TableSelectorNavbar />
          <div className='flex gap-x-[61px] gap-y-[20px]  flex-wrap'>
            <Table status='Free' floor='1' tableNumber='A1' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A2' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A3' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A4' time='30 mins' occupancy={2} />
            <Table status='Order Confirm' floor='1' tableNumber='A5' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A6' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A7' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A8' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A9' time='30 mins' occupancy={2} />
            <Table status='Reserved' floor='1' tableNumber='A10' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A11' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A12' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A13' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A14' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A15' time='30 mins' occupancy={2} />            <Table status='Free' floor='1' tableNumber='A7' time='30 mins' occupancy={2} />
            <Table status='Preparing' floor='1' tableNumber='A16' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A17' time='30 mins' occupancy={2} />
            <Table status='Generate Bill' floor='1' tableNumber='A18' time='30 mins' occupancy={2} />
            <Table status='Free' floor='1' tableNumber='A19' time='30 mins' occupancy={2} />
          </div>
        </div>
        <TableSelected />
      </div>
    </div>
  )
}

export default App
