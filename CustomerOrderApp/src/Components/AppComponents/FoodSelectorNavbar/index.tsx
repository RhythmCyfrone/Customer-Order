import { useAppDispatch, useAppSelector } from '../../../State/hooks'
import { selectFoodKind, selectorType } from './FoodSelectorNavbarSlice'

const SelectorButton = ({selectorName}: {selectorName: selectorType}) => {
    const selector = useAppSelector(state => state.foodSelector.selector)
    const dispatch = useAppDispatch()
    const padding = selectorName == 'All'?'ps-[20px] pe-[20px]':'ps-[10px] pe-[10px]'
    return (
        selector == selectorName
        ?<div className={`p-[4px] cursor-pointer ${padding} rounded-[20px] bg-[#C3DAFF] border-[1px] border-[#3B82F6]`}>
            <span className='font-quicksand font-normal text-[11.68px]'>
                {selectorName}
            </span>
        </div>
        :<div className= {`p-[4px] cursor-pointer ${padding} rounded-[20px] bg-[#EBF3FE] hover:bg-[#C3DAFF]`}
            onClick={() => dispatch(selectFoodKind(selectorName))}
        >
            <span className='font-quicksand font-normal text-[11.68px]'>
                {selectorName}
            </span>
        </div>
    )
}

const FoodSelectorNavbar = () => {
  return (
    <div className='flex gap-x-[8px] ps-[80px] desktop-max:ps-[20px]'>
        <SelectorButton selectorName='All' />
        <SelectorButton selectorName='Starters' />
        <SelectorButton selectorName='Main Course' />
        <SelectorButton selectorName='Snacks'/>
        <SelectorButton selectorName='Desserts'/>
    </div>
    
  )
}

export default FoodSelectorNavbar
