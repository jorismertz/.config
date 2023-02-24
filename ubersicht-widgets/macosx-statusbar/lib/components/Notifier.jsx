import { React } from "uebersicht";
import { SECRETS } from "../secrets.jsx";

export function Notification({ content, badgeContent, dismissed, name }) {
  React.useEffect(() => {
    const stored = window.localStorage.getItem("notification-data");
    const lastState = JSON.parse(stored)[0].lastState;

    if (badgeContent !== lastState) {
      window.localStorage.setItem(
        "notification-data",
        JSON.stringify([
          { dismissed: false, name: "payday", lastState: badgeContent },
        ])
      );
    }
  }, []);
  if (dismissed) return null;
  return (
    <div
      className="widget-component"
      onClick={() => {
        const storedData = window.localStorage.getItem("notification-data");
        const parsedData = JSON.parse(storedData);
        const newData = parsedData.map((el) => {
          if (el.name === name) {
            el.dismissed = true;
          }
          return el;
        });
        window.localStorage.setItem(
          "notification-data",
          JSON.stringify([
            { ...newData[0], name: "payday", lastState: badgeContent },
          ])
        );
      }}
    >
      <p>{content}</p>
      <p className="space-index notif-badge">{badgeContent}</p>
    </div>
  );
}

export default function NotificationsWidget() {
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    fetch(SECRETS.PAYDAY_URL)
      .then((res) => res.json())
      .then((data) => {
        const storedData = window.localStorage.getItem("notification-data");
        const parsedData = JSON.parse(storedData)[0];

        const parsed = {
          name: "payday",
          dismissed: parsedData.dismissed,
          content: "💰",
          badgeContent: data.daysRemaining,
        };
        setNotifications((e) => [parsed]);
        console.log(data);
      });
  }, []);

  React.useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  return (
    <>
      {notifications.map((notification) => (
        <Notification {...notification} />
      ))}
    </>
  );
}
