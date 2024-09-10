import ItemsNavbar from './ItemsNavbar'
import DeleteItemCountIcon from '../../../Assets/Icons/DeleteItemCount.svg'
import AddItemCountIcon from '../../../Assets/Icons/AddItemCount.svg'
import ItemsListItem from './ItemsListItem'
import SecondaryNoIcon from '../../Shared/Buttons/SecondaryNoIcon'

const ItemsList = () => {
  return (
    <div className='w-full flex flex-col gap-y-[4px]'>
        <ItemsNavbar />
        <div className='flex flex-col gap-y-[4px] max-h-[150px] overflow-y-scroll tall:max-h-[200px]'>
            <ItemsListItem 
                itemName='Water Bottle'
                itemCount={1}
            />
            <ItemsListItem
                itemName='Veg Salads'
                itemCount={10}
            />
            <ItemsListItem
                itemName='Veg Salads'
                itemCount={5}
            />
            <ItemsListItem
                itemName='Veg Salads'
                itemCount={11}
            />
        </div>
        
    </div>
  )
}

export default ItemsList
