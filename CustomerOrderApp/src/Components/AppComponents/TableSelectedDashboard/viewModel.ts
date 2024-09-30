import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../State/hooks"
import { setStartPosition } from "../../../Screens/BackdropSlice"
import { OrderDTO } from "../../../models/api/orders"
import useOrderModel from "../../../models/useOrderModel"

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

  const {getOrderByTableId} = useOrderModel()

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
      const err = await getOrderByTableId({setOrder, tableId: currentTable})
      if(err !== null) {
        setLoading(false)
      }else {
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