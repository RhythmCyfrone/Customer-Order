import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../State/hooks"
import { setStartPosition } from "../../State/Slices/BackdropSlice"
import { OrderDTO } from "../../Models/HTTPServices/ResponseDTO"
import { getOrderByTableIdAPI } from "../../Services/HTTPServices/orders"

const useTableSelectedDashboardViewModel = () => {
  const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
  const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
  const dispatch = useAppDispatch()

  const [order, setOrder] = useState<OrderDTO | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [note, setNote] = useState(false)
  const [discount, setDiscount] = useState(false)
  const [combineBills, setCombineBills] = useState(false)
  const [splitBills, setSplitBills] = useState(false)

  const handleNotificationsClick = (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, initiator: string) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    dispatch(setStartPosition({ top: clickY, left: clickX, initiator: initiator }));

};
  useEffect(() => {
    setLoading(true)
    if(currentTable == 'None') {
      setLoading(false)
      return
    }
    const getOrder = async () => {
      try {
          const data = await getOrderByTableIdAPI(currentTable)
          console.log(data)
          if(data.status == 200) {
              setOrder(data.data)
          }else {
              throw new Error('Error fetching tables list')
          }
      } catch (error) {
          console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getOrder()
  }, [currentTable, currentFloor])

  return {
    currentFloor, currentTable, dispatch, order, setOrder, loading, setLoading, note, setNote,
    discount, setDiscount, handleNotificationsClick, combineBills, setCombineBills, splitBills, setSplitBills
  }
}

export default useTableSelectedDashboardViewModel