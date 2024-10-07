import useMenuItemBackdropViewModel from "./MenuItemBackdropViewModel";
import CrossIcon from '../../../Assets/Icons/Cross.svg'
import WaterBottle from '../../../Assets/Food Images/WaterBottle.png'

type MenuItemBackdropProps = {
  isMenuItemBackdrop: boolean;
  setIsMenuItemBackdrop: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuItemBackdrop = ({isMenuItemBackdrop, setIsMenuItemBackdrop}: MenuItemBackdropProps) => {
  const {
    startPosition, handleRemoveBackdrop
  } = useMenuItemBackdropViewModel({isMenuItemBackdrop, setIsMenuItemBackdrop})
  return (
    <div
        className={`backdrop-blur-[1px] z-10 backdrop absolute bg-opacity-20 bg-black flex justify-center items-center ${isMenuItemBackdrop?'transition-all duration-200':''}
        }`}
        style={{
            top: isMenuItemBackdrop ? '0px' : `${startPosition.startPosition.top}px`,
            left: isMenuItemBackdrop ? '81px' : `${startPosition.startPosition.left}px`,
            right: isMenuItemBackdrop ? '420px' : `${document.body.clientWidth - startPosition.startPosition.left}px`,
            bottom: isMenuItemBackdrop ? '0px' : `${document.body.clientHeight - startPosition.startPosition.top}px`,
        }}
    >
        <div className='relative max-w-[400px] bg-white rounded-[21px] p-[24px] flex flex-col gap-y-[20px]'>
            <img src={CrossIcon} className='absolute top-[12px] right-[12px]' 
                onClick={() => handleRemoveBackdrop()}
            />
            <div className="flex justify-around items-center">
              <img src={WaterBottle} />
              <div className="flex flex-col">
                <span className="font-poppins font-[400] text-[18px] leading-[27px]">Water Bottle</span>
                <span className="font-poppins font-[400] text-[10px] leading-[16px]">(500ml)</span>
                <span className="font-poppins font-[400] text-[18px] leading-[27px] mt-[4px]">29/-</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-[24px]">
                <span className="font-poppins font-[400] text-[12px] leading-[16px] text-wrap">
                  This is the description of the water bottle. similar to this other items will have their own description
                </span>
                <div className="flex flex-col">
                  <span className="font-poppins font-[400] text-[14px] leading-[21px]">Main ingredients</span>
                  <div className="flex gap-x-[8px] flex-wrap mt-[4px]">
                    <div className= {`cursor-pointer flex justify-center items-center pt-[4px] pb-[4px] ps-[8px] pe-[8px] rounded-[20px] bg-[#EBF3FE] hover:bg-[#C3DAFF]`}
                    >
                        <span className='font-poppins font-normal text-[11.68px]'>
                            Water
                        </span>
                    </div>
                    <div className= {`cursor-pointer flex justify-center items-center pt-[4px] pb-[4px] ps-[8px] pe-[8px] rounded-[20px] bg-[#EBF3FE] hover:bg-[#C3DAFF]`}
                    >
                        <span className='font-poppins font-normal text-[11.68px]'>
                            Plastic
                        </span>
                    </div>
                    <div className= {`cursor-pointer flex justify-center items-center pt-[4px] pb-[4px] ps-[8px] pe-[8px] rounded-[20px] bg-[#EBF3FE] hover:bg-[#C3DAFF]`}
                    >
                        <span className='font-poppins font-normal text-[11.68px]'>
                            Salts
                        </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-[24px] gap-y-[8px]">
                    <span className="font-poppins font-[400] text-[14px] leading-[21px]">Nutritional Info - (160g) </span>
                    <div className="flex">
                      <span className="w-[30%] font-poppins font-[400] text-[10px] leading-[15px]">Calories:</span>
                      <span className="w-[70%] font-poppins font-[400] text-[10px] leading-[15px]">137 kcal</span>
                    </div>
                    <div className="flex">
                      <span className="w-[30%] font-poppins font-[400] text-[10px] leading-[15px]">Carbohydrates:</span>
                      <span className="w-[70%] font-poppins font-[400] text-[10px] leading-[15px]">23 g</span>
                    </div>
                    <div className="flex">
                      <span className="w-[30%] font-poppins font-[400] text-[10px] leading-[15px]">Proteins:</span>
                      <span className="w-[70%] font-poppins font-[400] text-[10px] leading-[15px]">23 g </span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuItemBackdrop
