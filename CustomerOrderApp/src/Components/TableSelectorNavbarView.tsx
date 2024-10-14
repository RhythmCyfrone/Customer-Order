import type { TableSelectorNavbarProps } from '../ViewModels/TableSelectorNavbarViewModel';
import useTableSelectorNavbarViewModel from '../ViewModels/TableSelectorNavbarViewModel';

type selectorType = 'All' | 'Reserved' | 'Occupied' | 'Free' | 'Assigned' | 'Ordered' | 'Served' | 'Billed' | 'Paid';

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
    const {
        screen
    } = useTableSelectorNavbarViewModel({statusFlter, setStatusFilter})
  return (
    <div className='flex gap-x-[20px] flex-wrap gap-y-[20px]'>
        <SelectorButton selectorName='All' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
        {
            screen == 'Table Management'
            ?
            <>
                <SelectorButton selectorName='Free' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
                <SelectorButton selectorName='Reserved' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
                <SelectorButton selectorName='Occupied' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
            </>
            :
            <>
                <SelectorButton selectorName='Assigned' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
                <SelectorButton selectorName='Ordered' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
                <SelectorButton selectorName='Served' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
                <SelectorButton selectorName='Billed' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
                <SelectorButton selectorName='Paid' statusFlter={statusFlter} setStatusFilter={setStatusFilter} />
            </>
        }
        
    </div>
    
  )
}

export default TableSelectorNavbar
