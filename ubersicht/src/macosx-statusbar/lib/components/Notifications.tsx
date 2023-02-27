import { React } from "uebersicht";
import { SECRETS } from "../secrets.jsx";
import {
  Notification,
  MsgStorageData,
  writeToStorage,
} from "../utils/notificationHelper.jsx";

export default function Notifications() {
  const [notifications, setNotifications] = React.useState<MsgStorageData[]>(
    []
  );

  const nonDismissedNotifications = notifications.filter((e) => {
    return !e.dismissed;
  });

  const noNotificationsLeft =
    nonDismissedNotifications.length === 0 ? true : false;

  //useffect console log notifications
  React.useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  React.useEffect(() => {
    new Notification(
      {
        name: "payday",
        icon: "􁑇",
        states: [notifications, setNotifications],
      },
      async () => {
        const data = await fetch(SECRETS.PD_URL).then((res) => res.json());

        return await data.daysRemaining.toString();
      }
    );
  }, []);

  function dissmissNotification(name: string) {
    const newNotifications = notifications.map((notification) => {
      if (notification.name === name) {
        notification.dismissed = true;
      }
      return notification;
    });

    writeToStorage(newNotifications);
    setNotifications(newNotifications);
  }

  const [showNotifications, setShowNotifications] = React.useState(false);

  if (!noNotificationsLeft)
    return (
      <>
        {notifications.map((notification) => {
          if (!notification.dismissed && showNotifications)
            return (
              <div
                className="notification-entry"
                onClick={() => dissmissNotification(notification.name)}
              >
                {notification.icon}
                <p className="badge">{notification.currentState as string}</p>
              </div>
            );
        })}

        <div
          className="notifications widget-component transparant-widget"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          􀋚
        </div>
      </>
    );
  return null;
}
