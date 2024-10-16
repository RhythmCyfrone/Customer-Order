import { resetStartPosition, initialState } from "../../State/Slices/BackdropSlice";
import useCancelOrderBackdropViewModel from "../../ViewModels/CancelOrderBackdropViewModel";

type CancelOrderBackdropProps = {
    isCancelOrderBackdrop: boolean;
    setIsCancelOrderBackdrop: React.Dispatch<React.SetStateAction<boolean>>
}
const CancelOrderBackdrop = ({isCancelOrderBackdrop, setIsCancelOrderBackdrop}: CancelOrderBackdropProps) => {
    const {startPosition, currentTable, dispatch} = useCancelOrderBackdropViewModel()
  return (
    <div
            className={`flex justify-center items-center gap-y-[8px] flex-col backdrop-blur-[1px] z-20 backdrop absolute bg-opacity-20 bg-[#AAB8FF] ${isCancelOrderBackdrop?'transition-all duration-100':''}
            }`}
            style={{
                top: isCancelOrderBackdrop ? '0px' : `${startPosition.startPosition.top}px`,
                left: isCancelOrderBackdrop ? '0px' : `${startPosition.startPosition.left}px`,
                right: isCancelOrderBackdrop ? '0px' : `${document.body.clientWidth - startPosition.startPosition.left}px`,
                bottom: isCancelOrderBackdrop ? '0px' : `${document.body.clientHeight - startPosition.startPosition.top}px`,
            }}
        >{
          isCancelOrderBackdrop &&
          <>
            <div className="w-[800px]">
              <div className="w-[160px] flex flex-col gap-y-[16px] rounded-[18px] ps-[16px] pe-[16px] pt-[8px] pb-[8px] bg-white">
                <div>
                  <span className="font-quicksand font-medium text-[16px] leading-[20px]">Table  </span>
                  <span className="font-quicksand font-medium text-[31px] leading-[40px] text-[#3B82F6]">{currentTable}</span>
                </div>
                <span className="font-quicksand font-medium text-[14px] leading-[18px] text-[#FF1F1F]">Cancel Order</span>
              </div>
            </div>
            <textarea placeholder="Enter Description" className="outline-none  w-[800px] h-[190px] align-top bg-white p-[24px] rounded-[18px]">
            </textarea>
            <div className="w-[800px]">
              <button className='text-center bg-[#FF3B5F] fontButtonDefault cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                                      hover:ShadowPrimaryHover active:shadow-none'
                  onClick={() => {
                      dispatch(resetStartPosition(initialState))
                      setIsCancelOrderBackdrop(false)
                  }}
                >
                    Cancel Order
              </button>
            </div>
            

          </>
          

        }
          
    </div>
  )
}

export default CancelOrderBackdrop
