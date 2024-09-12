import VegIcon from '../../../Assets/Icons/Veg.svg'
import NonVegIcon from '../../../Assets/Icons/NonVeg.svg'
import VeganIcon from '../../../Assets/Icons/Vegan.svg'
import EggIcon from '../../../Assets/Icons/Egg.svg'

type FoodTypeProps = {
    foodTypeLabel: string
}
const FoodTypeButton = ({foodTypeLabel}: FoodTypeProps) => {
  return (
    <div className='rounded-[7.2px] flex items-center gap-x-[11px] border-[1px] border-[#D9D9D9] pt-[1.2px] pe-[4.8px] pb-[1.2px] ps-[4.8px]
                    cursor-pointer'
    >
        {
            foodTypeLabel == 'Veg'
            ?<img src={VegIcon} />
            :foodTypeLabel == 'Non Veg'
            ?<img src={NonVegIcon} />
            :foodTypeLabel == 'Vegan'
            ?<img src={VeganIcon} />
            :<img src={EggIcon} />
        }
        
        <span className='font-poppins font-normal text-[16.8px] text-[#757575] leading-[25px]'>
            {foodTypeLabel}
        </span>      
    </div>
  )
}

export default FoodTypeButton
