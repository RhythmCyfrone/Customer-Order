import usePaymentBackdropViewModel from "../../../ViewModels/PaymentBackdropViewModel"
import PrintIconPrimary from '../../../Assets/Icons/PrintIconPrimary.svg'
import UpiIcon from '../../../Assets/Icons/Upi.svg'
import CardIcon from '../../../Assets/Icons/CreditCard.svg'
import CashIcon from '../../../Assets/Icons/Cash.svg'
import CalenderIcon from '../../../Assets/Icons/Calender.svg'
import { resetStartPosition, initialState } from "../../../State/Slices/BackdropSlice"
import UPI from "./UPIView"
import Cash from "./CashView"

type AcceptPaymentBackdropProps = {
    isAcceptPaymentBackdrop: boolean;
    setIsAcceptPaymentBackdrop: React.Dispatch<React.SetStateAction<boolean>>
}

const AcceptPaymentBackdrop = ({isAcceptPaymentBackdrop, setIsAcceptPaymentBackdrop}: AcceptPaymentBackdropProps) => {
    const {
        startPosition, currentTable, currentFloor, disableConfirm,
        selectPaymentMode, handlePaymentModeChange, gap, dispatch
    } = usePaymentBackdropViewModel()
  return (
    <div
            className={`flex justify-center items-center gap-y-[8px] flex-col backdrop-blur-[1px] z-20 backdrop absolute bg-opacity-20 bg-[#AAB8FF] ${isAcceptPaymentBackdrop?'transition-all duration-100':''}
            }`}
            style={{
                top: isAcceptPaymentBackdrop ? '0px' : `${startPosition.startPosition.top}px`,
                left: isAcceptPaymentBackdrop ? '0px' : `${startPosition.startPosition.left}px`,
                right: isAcceptPaymentBackdrop ? '0px' : `${document.body.clientWidth - startPosition.startPosition.left}px`,
                bottom: isAcceptPaymentBackdrop ? '0px' : `${document.body.clientHeight - startPosition.startPosition.top}px`,
            }}
        >
        {isAcceptPaymentBackdrop && 
            <div className={`flex flex-col bg-white min-w-[600px] ${gap} rounded-[25px] accept-payment-shadow
                            p-[20px]`}
            >
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-quicksand font-medium text-[12px] leading-[18px]">Table - </span>
                        <span className="font-quicksand font-medium text-[24px] leading-[36px] text-[#3B82F6]">{currentTable}</span>
                    </div> 
                    <div>
                        <span className="font-quicksand font-medium text-[12px] leading-[18px]">Grand Total -</span>
                        <span className="font-quicksand font-medium text-[16px] leading-[36px] text-[#3B82F6]">1024/-</span>
                    </div>
                </div>
                <div className="flex w-[470px] justify-between flex-1 self-center">
                    <div className={`flex flex-col justify-between cursor-pointer  ${selectPaymentMode == 'UPI'?'border-[1px] border-[#3B82F6]':''} rounded-[8px] p-[4px]`}
                        onClick={() => handlePaymentModeChange('UPI')}
                    >
                        <img src={UpiIcon} />
                        <span className="font-poppins text-[12px] leading-[18px] font-[500] text-center">UPI</span>
                    </div>
                    <div className={`flex flex-col justify-between cursor-pointer  ${selectPaymentMode == 'Card'?'border-[1px] border-[#3B82F6]':''} rounded-[8px] p-[4px] pt-0`}
                        onClick={() => handlePaymentModeChange('Card')}
                    >
                        <img src={CardIcon} />
                        <span className="font-poppins text-[12px] leading-[18px] font-[500] text-center">Card</span>
                    </div>
                    <div className={`flex flex-col justify-between cursor-pointer  ${selectPaymentMode == 'Cash'?'border-[1px] border-[#3B82F6]':''} rounded-[8px] p-[4px]`}
                        onClick={() => handlePaymentModeChange('Cash')}
                    >
                        <img src={CashIcon} />
                        <span className="font-poppins text-[12px] leading-[18px] font-[500] text-center">Cash</span>
                    </div>
                    <div className={`flex flex-col justify-between rounded-[8px] p-[4px]`}
                    >
                        <img src={CalenderIcon} />
                        <span className="font-poppins text-[12px] leading-[18px] font-[500] text-center">Due</span>
                    </div>
                </div>
                {
                    selectPaymentMode == 'UPI'
                    ?<UPI />
                    :selectPaymentMode == 'Cash'
                    ?<Cash />
                    :<></>
                }
                <div className="flex gap-x-[16px]">
                    <div className="flex-1">
                        <button className='text-center flex items-center gap-x-[8px] fontButtonDefault bg-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[16px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
                        >
                            <img src={PrintIconPrimary} alt="My Icon" className="icon-class" />
                            Print Bill
                        </button>
                    </div>
                        <button className='text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                            hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
                            onClick={() => {
                                dispatch(resetStartPosition(initialState))
                                setIsAcceptPaymentBackdrop(false)
                            }}
                        >
                            Cancel
                        </button>
                        <button className='text-center bg-[#3B82F6] fontButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                            hover:ShadowPrimaryHover active:shadow-none disabled:cursor-default disabled:bg-[#292929] disabled:bg-opacity-20 disabled:text-[#292929] disabled:opacity-80 disabled:border-[0px] disabled:shadow-none'
                            disabled={disableConfirm}
                        >
                            Confirm
                        </button>
                </div>
            </div>
        }
    </div>
  )
}

export default AcceptPaymentBackdrop
