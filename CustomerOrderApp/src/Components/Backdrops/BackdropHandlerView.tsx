import CancelOrderBackdrop from "./CancelOrderBackdropView"
import MenuItemBackdrop from "./MenuItemBackdropView"
import NotificationsBackdrop from "./NotificationsBackdrop/NotificationsBackdropView"
import AcceptPaymentBackdrop from "./PaymentBackdrop/PaymentBackdropView"
import ProfileBackdrop from "./ProfileBackdropView"
import useBackdropHandlerViewModal from "../../ViewModels/BackdropHandlerViewModel"

type BackdropProps = {
    isNotificationsVisible: boolean;
    setIsNotificationsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
const BackdropHandler = ({isNotificationsVisible, setIsNotificationsVisible}: BackdropProps) => {
    const {startPosition} = useBackdropHandlerViewModal()
  return (
    startPosition.initiator == 'Notifications'
    ?<NotificationsBackdrop 
        isNotificationsVisible={isNotificationsVisible}
        setIsNotificationsVisible={setIsNotificationsVisible}
    />
    :startPosition.initiator == 'Profile'
    ?<ProfileBackdrop
        isNotificationsVisible={isNotificationsVisible}
        setIsNotificationsVisible={setIsNotificationsVisible}
    />
    :startPosition.initiator == 'Accept Payment'
    ?<AcceptPaymentBackdrop
        isAcceptPaymentBackdrop={isNotificationsVisible}
        setIsAcceptPaymentBackdrop={setIsNotificationsVisible}
    />
    :startPosition.initiator == 'Food Item'
    ?<MenuItemBackdrop
        isMenuItemBackdrop={isNotificationsVisible}
        setIsMenuItemBackdrop={setIsNotificationsVisible}
    />
    :<CancelOrderBackdrop
      isCancelOrderBackdrop={isNotificationsVisible}
      setIsCancelOrderBackdrop={setIsNotificationsVisible}
    />
  )
}

export default BackdropHandler
