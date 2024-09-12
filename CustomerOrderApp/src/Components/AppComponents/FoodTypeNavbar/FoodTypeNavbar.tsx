import FoodTypeButton from './FoodTypeButton'

const FoodTypeNavbar = () => {
  return (
    <div className='flex gap-x-[10px] '>
        <FoodTypeButton 
            foodTypeLabel='Veg'
        />
        <FoodTypeButton 
            foodTypeLabel='Non Veg'
        />
        <FoodTypeButton 
            foodTypeLabel='Vegan'
        />
        <FoodTypeButton 
            foodTypeLabel='Egg'
        />
    </div>
  )
}

export default FoodTypeNavbar
