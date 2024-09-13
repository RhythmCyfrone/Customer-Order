import NewItemsNavbar from './NewItemsNavbar'
import NewItemsListItem from './NewItemsListItem'

const NewItemsList = () => {
  return (
    <div className='w-full flex flex-col gap-y-[4px]'>
        <NewItemsNavbar />
        <div className='flex flex-col max-h-[70px] overflow-y-scroll tall:max-h-[120px]'>
            <NewItemsListItem 
                itemName='Water Bottle'
                itemCount={1}
            />
            <NewItemsListItem
                itemName='Fry Mutton Biryani'
                itemCount={1}
            />
            <NewItemsListItem
                itemName='Veg Salads'
                itemCount={5}
            />
            <NewItemsListItem
                itemName='Veg Salads'
                itemCount={9}
            />
        </div>
        
    </div>
  )
}

export default NewItemsList
