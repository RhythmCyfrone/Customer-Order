import { useAppDispatch, useAppSelector } from '../../../State/hooks'
import { selectorType, selectTableSelector } from './TableSelectorSlice'

const SelectorButton = ({selectorName}: {selectorName: selectorType}) => {
    const selector = useAppSelector(state => state.tableSelector.selector)
    const dispatch = useAppDispatch()
    const padding = selectorName == 'All'?'ps-[20px] pe-[20px]':'ps-[10px] pe-[10px]'
    return (
        selector == selectorName
        ?<div className={`p-[4px] cursor-pointer ${padding} rounded-[20px] bg-[#C3DAFF] border-[1px] border-[#3B82F6]`}>
            <span className='font-poppins font-normal text-[16px]'>
                {selectorName}
            </span>
        </div>
        :<div className= {`p-[4px] cursor-pointer ${padding} rounded-[20px] bg-[#EBF3FE] hover:bg-[#C3DAFF]`}
            onClick={() => dispatch(selectTableSelector(selectorName))}
        >
            <span className='font-poppins font-normal text-[16px]'>
                {selectorName}
            </span>
        </div>
    )
}

const TableSelectorNavbar = () => {
  return (
    <div className='flex gap-x-[24px]'>
        <SelectorButton selectorName='All' />
        <SelectorButton selectorName='Assigned' />
        <SelectorButton selectorName='Occupied' />
    </div>
    
  )
}

export default TableSelectorNavbar
