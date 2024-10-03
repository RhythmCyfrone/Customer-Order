import CancelOrderBackdrop from "../CancelOrderBackdrop"
import NotificationsBackdrop from "../NotificationsBackdrop"
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
    :<CancelOrderBackdrop
      isCancelOrderBackdrop={isNotificationsVisible}
      setIsCancelOrderBackdrop={setIsNotificationsVisible}
    />
  )
}

export default BackdropHandler
