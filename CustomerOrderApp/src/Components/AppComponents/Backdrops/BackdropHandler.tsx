import { useAppDispatch, useAppSelector } from "../../../State/hooks"
import NotificationsBackdrop from "./NotificationsBackdrop"
import ProfileBackdrop from "./ProfileBackdrop"

type BackdropProps = {
    isNotificationsVisible: boolean;
    setIsNotificationsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
const BackdropHandler = ({isNotificationsVisible, setIsNotificationsVisible}: BackdropProps) => {
    const startPosition = useAppSelector(state => state.backdrop)
    const dispatch = useAppDispatch()
  return (
    startPosition.initiator == 'Notifications'
    ?<NotificationsBackdrop 
        isNotificationsVisible={isNotificationsVisible}
        setIsNotificationsVisible={setIsNotificationsVisible}
    />
    :<ProfileBackdrop
        isNotificationsVisible={isNotificationsVisible}
        setIsNotificationsVisible={setIsNotificationsVisible}
    />
  )
}

export default BackdropHandler
