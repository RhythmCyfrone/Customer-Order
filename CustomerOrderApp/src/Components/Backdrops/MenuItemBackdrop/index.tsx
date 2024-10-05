import useMenuItemBackdropViewModel from "./MenuItemBackdropViewModel";
import CrossIcon from '../../../Assets/Icons/Cross.svg'

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
            top: isMenuItemBackdrop ? '101px' : `${startPosition.startPosition.top}px`,
            left: isMenuItemBackdrop ? '81px' : `${startPosition.startPosition.left}px`,
            right: isMenuItemBackdrop ? '420px' : `${document.body.clientWidth - startPosition.startPosition.left}px`,
            bottom: isMenuItemBackdrop ? '0px' : `${document.body.clientHeight - startPosition.startPosition.top}px`,
        }}
    >
        <div className='relative w-[300px] h-[400px] bg-white rounded-[10px]'>
            <img src={CrossIcon} className='absolute top-[8px] right-[8px]' 
                onClick={() => handleRemoveBackdrop()}
            />
        </div>
    </div>
  )
}

export default MenuItemBackdrop
