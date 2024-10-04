import CancelOrderBackdrop from "../CancelOrderBackdrop"
import NotificationsBackdrop from "../NotificationsBackdrop"
import AcceptPaymentBackdrop from "../PaymentBackdrop"
import ProfileBackdrop from "../ProfileBackdrop"
import useBackdropHandlerViewModal from "./BackdropHandlerViewModel"

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
    :<CancelOrderBackdrop
      isCancelOrderBackdrop={isNotificationsVisible}
      setIsCancelOrderBackdrop={setIsNotificationsVisible}
    />
  )
}

export default BackdropHandler
