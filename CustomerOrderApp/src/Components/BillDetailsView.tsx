import BillViewIcon from '../Assets/Icons/BillView.svg'
import SeparatingLine from '../Assets/Icons/SeparatingLine.svg'
import NoteIcon from '../Assets/Icons/Note.svg'
import PriceTagIcon from '../Assets/Icons/price-tag.svg'
import SplitBillIcon from '../Assets/Icons/SplitBIll.svg'
import CombineBillIcon from '../Assets/Icons/CombineBill.svg'
import CancelBillIcon from '../Assets/Icons/x-button.svg'
import BillOptionsBack from '../Assets/Icons/BillOptionsBack.svg'
import MoreIcon from '../Assets/Icons/More.svg'
import useBillDetailsViewModel from '../ViewModels/BillDetailsViewModel';
import '../Styles/Animations.css'
import '../Styles/Fonts.css'
import '../Styles/Scrollbars.css'

type BillDetailsProps = {
    note: boolean;
    setNote: React.Dispatch<React.SetStateAction<boolean>> ;
    discount: boolean;
    setDiscount: React.Dispatch<React.SetStateAction<boolean>> ;
    handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement | HTMLDivElement> , initiator: string) => void;
    setCombineBills: React.Dispatch<React.SetStateAction<boolean>> ;
    splitBills: boolean;
    setSplitBills: React.Dispatch<React.SetStateAction<boolean>> ;
    generateBill: boolean;
    setGenerateBill: React.Dispatch<React.SetStateAction<boolean>> ;
    takeaway: boolean;
}

const BillDetails = ({note, setNote, discount, setDiscount, 
                      handleNotificationsClick, setCombineBills,
                      splitBills, setSplitBills, generateBill, setGenerateBill,
                      takeaway
                    }: BillDetailsProps) => {
    const {
        isRotated,
        setIsRotated,
        viewBill,
        setViewBill,
        viewDetailsText,
        setViewDetailsText,
        closeText,
        setCloseText,
        viewMore,
        setViewMore,
        screenHeight,
        setScreenHeight,
        specialFeature,
        bottomPadding,
        topPadding,
        translate,
        handleIconClick
    } = useBillDetailsViewModel(note, discount, takeaway)
  return (
    <div className={`${!specialFeature?'hidden':''} absolute bottom-[0px] z-10`}>
        <div className={`relative w-[420px] bg-[#DDEBFF] rounded-t-[32px] flex flex-col transform-padding duration-500 ${topPadding}`}>
            {viewBill && 
                <div className={`ps-[32px] pe-[32px] flex flex-col ${isRotated?'fade-in ':'fade-out'}`} 
                    onAnimationEnd={() => {
                        if(!isRotated)
                            setViewBill(false)
                    }}
                >
                    <div className='flex justify-between p-0 items-center'>
                        <span className='font-poppins font-normal text-[16px]'>Sub Total</span>
                        <span className='font-poppins font-normal text-[20px]'>1000 /-</span>
                    </div>
                    <div className='flex flex-col gap-y-[4px]'>
                        <div className='flex justify-between p-0 items-center'>
                            <span className='font-poppins font-normal text-[16px]'>Discount (10%)</span>
                            <span className='font-poppins font-normal text-[16px] text-[#FF4F4F] cursor-pointer'>Remove</span>
                            <span className='font-poppins font-normal text-[16px]'>171</span>
                        </div>
                        <div className='flex justify-between p-0 items-center'>
                            <span className='font-poppins font-normal text-[16px]'>Service Charge (2%)</span>
                            <span className='font-poppins font-normal text-[16px] text-[#FF4F4F] cursor-pointer'>Remove</span>
                            <span className='font-poppins font-normal text-[16px]'>34.22</span>
                        </div>
                        <div className='flex justify-between p-0 items-center'>
                            <span className='font-poppins font-normal text-[16px]'>SGST (13%)</span>
                            <span className='font-poppins font-normal text-[16px]'>50.6</span>
                        </div>
                        <div className='flex justify-between mb-[16px] p-0 items-center'>
                            <span className='font-poppins font-normal text-[16px]'>CGST (13%)</span>
                            <span className='font-poppins font-normal text-[16px]'>90.71</span>
                        </div>
                    </div>
                    
                </div>
            }
            <div className={`absolute left-[50%] top-[0px] ${translate} -translate-x-[50%] transform-all duration-500 w-[147px] min-h-[80px] bg-[#DDEBFF] rounded-t-[16px]
                            flex flex-col items-center p-[8px]`}
            >
                <img
                    src={BillViewIcon}
                    className={`cursor-pointer transition-transform duration-500 ${
                        isRotated ? '-rotate-180':''
                    }`}
                    onClick={handleIconClick}
                />
                <div className='relative w-full'>
                    {
                        viewDetailsText && 
                        <span className={`absolute left-[50%] -translate-x-[50%] text-nowrap font-normal text-[14px] text-[#020202] ${isRotated?'fade-out-right':'fade-in-left'}`} 
                            onAnimationEnd={() => {if(isRotated) setViewDetailsText(false)}}
                        >View Bill Details</span>
                    }
                    {
                        closeText && 
                        <span className={`absolute left-[50%] -translate-x-[50%] font-normal text-[14px] text-[#020202] transform-opacity duration-400 ${isRotated?'opacity-100':'opacity-0'}`} 
                            onTransitionEnd={() => {if(!isRotated) setCloseText(false)}}
                        >Close</span>
                    }
                </div>
                
                
            </div>
            <div className='flex justify-between p-0 items-center ps-[32px] pe-[32px]'>
                <span className='font-poppins font-normal text-[16px]'>Grand Total</span>
                <span className='font-poppins font-normal text-[24px]'>1000 /-</span>
            </div>
            <img src={SeparatingLine} className='w-full' />
            {
                screenHeight <= 750 && viewBill && 
                <div className={`flex flex-wrap mt-[12px] gap-x-[32px] gap-y-[10px] ps-[32px] pe-[32px] ${isRotated?'fade-in-extras ':'fade-out-extras'}`}
                    onAnimationEnd={() => {
                        if(!isRotated)
                            setViewBill(false)
                    }}
                >
                    <div className='p-[5.5px] ps-[20px] pe-[20px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
                        onClick={() => setNote(!note)}
                    >
                        <img src={NoteIcon} />
                        <span className='font-poppins font-normal text-[10px] text-white'>Note</span>
                    </div>
                    <div className='p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
                        onClick={() => setDiscount(!discount)}
                    >
                        <img src={PriceTagIcon} />
                        <span className='font-poppins font-normal text-[10px] text-white'>Discount</span>
                    </div>
                    {!takeaway &&
                        <>
                            <div className='p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
                                onClick={() => setSplitBills(true)}
                            >
                                <img src={SplitBillIcon} />
                                <span className='font-poppins font-normal text-[10px] text-white'>Split Bill</span>
                            </div>
                            <div className={`p-[5.5px] ps-[12px] pe-[12px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer`}
                                onClick={() => setCombineBills(true)}
                            >
                                <img src={CombineBillIcon} />
                                <span className='font-poppins font-normal text-[10px] text-white'>Combine</span>
                            </div>
                        </>
                    }
                    <div className={` p-[5.5px] ps-[5px] pe-[5px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer`}
                        onClick={(e) => handleNotificationsClick(e, 'Cancel Order')}
                    >
                        <img src={CancelBillIcon} />
                        <span className='font-poppins font-normal text-[8.5px] text-white'>Cancel Order</span>
                    </div>
                </div>
            }
            {
                screenHeight > 750 &&
                <div className='flex flex-wrap mt-[12px] gap-x-[32px] gap-y-[10px] ps-[32px] pe-[32px] medium:hidden'>
                    <div className='p-[5.5px] ps-[20px] pe-[20px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
                        onClick={() => setNote(!note)}
                    >
                        <img src={NoteIcon} />
                        <span className='font-poppins font-normal text-[10px] text-white'>Note</span>
                    </div>
                    <div className='p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
                        onClick={() => setDiscount(!discount)}
                    >
                        <img src={PriceTagIcon} />
                        <span className='font-poppins font-normal text-[10px] text-white'>Discount</span>
                    </div>
                    {!takeaway && 
                        <>
                            <div className='p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
                                onClick={() => setSplitBills(true)}
                            >
                                <img src={SplitBillIcon} />
                                <span className='font-poppins font-normal text-[10px] text-white'>Split Bill</span>
                            </div>
                            <div className={`${viewMore?'hidden':''} p-[5.5px] ps-[20px] pe-[20px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer`}
                                onClick={() => setViewMore(!viewMore)}
                            >
                                <img src={MoreIcon} />
                                <span className='font-poppins font-normal text-[10px] text-white'>More</span>
                            </div>
                            <div className={`${viewMore?'':'hidden'} p-[5.5px] ps-[12px] pe-[12px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer`}
                                onClick={() => setCombineBills(true)}
                            >
                                <img src={CombineBillIcon} />
                                <span className='font-poppins font-normal text-[10px] text-white'>Combine</span>
                            </div>
                        </>
                    }
                    <div className={`${viewMore?'':'hidden'} p-[5.5px] ps-[5px] pe-[5px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer`}
                        onClick={(e) => handleNotificationsClick(e, 'Cancel Order')}
                    >
                        <img src={CancelBillIcon} />
                        <span className='font-poppins font-normal text-[8.5px] text-white'>Cancel Order</span>
                    </div>
                    {!takeaway &&
                        <div className={`${viewMore?'':'hidden'} flex-1 flex items-center justify-end item-end pe-[24px]`}>
                            <img src={BillOptionsBack} className='cursor-pointer'
                                onClick={() => setViewMore(!viewMore)}
                            />
                        </div>
                    }
                    
                </div>
            }
            
            <div className={`ps-[32px] pe-[32px] w-full mt-[12px] ${bottomPadding} transition-all duration-500`}>
                <div className='text-center fontButtonDefault bg-gradient-to-r from-[#3B82F6] to-[#0053DB] cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
                    onClick={() => setGenerateBill(true)}
                >
                    Generate Bill
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default BillDetails
