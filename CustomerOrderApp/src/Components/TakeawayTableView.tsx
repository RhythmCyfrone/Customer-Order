import useTakeawayTableViewModel, { Status } from "../ViewModels/TakeawayTableViewModel";

type TakeawayTableViewProps = {
    tableNumber: string;
    status: Status;
}
const TakeawayTableView = ({tableNumber, status}: TakeawayTableViewProps) => {
    const {
        selectedTable, dispatch, statusColorClass, statusColorText, handleTakeAwayClick
    } = useTakeawayTableViewModel(status)

  return (
    <div className='flex w-[156px] min-h-[88px] cursor-pointer'
        onClick={() => handleTakeAwayClick(tableNumber)}
    >
        <div className={`table-status w-[8px] rounded-l-[10px] ${statusColorClass}`}>
        </div>
        {
            selectedTable == tableNumber
            ?
            <div className='relative flex-1 bg-CustomBrand-300 p-[4px] flex flex-col justify-center items-center shadow-table rounded-r-[10px]'
            >
                <span className="font-poppins font-[500] text-[16px] leading-[24px] text-white text-wrap">{tableNumber}</span>
                <span className={`font-poppins font-[500] text-[16px] leading-[24px] text-white text-wrap ${statusColorText}`}>{status}</span>
            </div>
            :<div className='flex-1 bg-[#EBF3FE] p-[4px] flex flex-col justify-center items-center shadow-table rounded-r-[10px]
                            hover:bg-[#D6E6FF] hover:ShadowTableHover active:bg-[#EBF3FE]'
            >
                <span className="font-poppins font-[500] text-[16px] leading-[24px]  text-wrap">{tableNumber}</span>
                <span className={`font-poppins font-[500] text-[16px] leading-[24px] text-wrap ${statusColorText}`}>{status}</span>
            </div>
        }
    </div>
  )
}

export default TakeawayTableView

