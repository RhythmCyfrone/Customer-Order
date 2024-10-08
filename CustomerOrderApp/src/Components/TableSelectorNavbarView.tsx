import type { TableSelectorNavbarProps } from '../ViewModels/TableSelectorNavbarViewModel';
import useTableSelectorNavbarViewModel from '../ViewModels/TableSelectorNavbarViewModel';

type selectorType = 'All' | 'Assigned' | 'Occupied'

interface SelectorButtonProps extends TableSelectorNavbarProps {
    selectorName: selectorType;
}

const SelectorButton = ({selectorName, statusFlter, setStatusFilter}: SelectorButtonProps) => {
    const {
        updateStatusSelector
    } = useTableSelectorNavbarViewModel({statusFlter, setStatusFilter})

    const padding = selectorName == 'All'?'ps-[20px] pe-[20px]':'ps-[10px] pe-[10px]'
    return (
        statusFlter == selectorName
        ?<div className={`p-[4px] cursor-pointer ${padding} rounded-[20px] bg-[#C3DAFF] border-[1px] border-[#3B82F6]`}>
            <span className='font-poppins font-normal text-[16px]'>
                {selectorName}
            </span>
        </div>
        :<div className= {`p-[4px] cursor-pointer ${padding} rounded-[20px] bg-[#EBF3FE] hover:bg-[#C3DAFF]`}
            onClick={() => updateStatusSelector(selectorName)}
        >
            <span className='font-poppins font-normal text-[16px]'>
                {selectorName}
            </span>
        </div>
    )
}

const TableSelectorNavbar = ({statusFlter, setStatusFilter}: TableSelectorNavbarProps) => {
  return (
    <div className='flex gap-x-[24px]'>
        <SelectorButton selectorName='All' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
        <SelectorButton selectorName='Assigned' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
        <SelectorButton selectorName='Occupied' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
    </div>
    
  )
}

export default TableSelectorNavbar
