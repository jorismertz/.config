export interface Msg {
  icon: string;
  name: string;
  dismissed?: boolean;
}

export interface MsgComponentProps extends Msg {
  states: [MsgStorageData[], (d: MsgStorageData[]) => void];
}

export interface MsgStorageData extends Msg {
  lastState: unknown;
  currentState: unknown;
}

export function getMessageData() {
  const data = window.localStorage.getItem("notification");
  if (data) {
    return JSON.parse(data) as MsgStorageData[];
  }
  return null;
}

export function writeToStorage(data: object) {
  window.localStorage.setItem("notification", JSON.stringify(data));
}

export function storeMessageData(data: MsgStorageData) {
  if (!data) {
    console.warn("no data to store");
    return;
  }
  delete data["states" as keyof MsgStorageData];
  const currentData = getMessageData() || [];
  let newData = [];

  if (currentData.length === 0) newData = [data];
  else
    newData = currentData.map((d) => {
      if (!d) return d;
      if (d.name === data.name) {
        return data;
      }
      return d;
    });

  writeToStorage(newData);
}

export class Notification {
  icon: string;
  name: string;
  states: [MsgStorageData[], (d: MsgStorageData[]) => void];
  dismissed?: boolean;
  constructor(props: MsgComponentProps, callback: () => Promise<String>) {
    this.icon = props.icon;
    this.name = props.name;
    this.states = props.states;
    this.dismissed = props.dismissed;

    const [notifications, setNotifications] = this.states;

    (async () => {
      const returned = await callback();
      if (typeof returned !== "string") {
        console.warn("callback must return a string");
        return;
      }

      const localdata = getMessageData();
      const msgLocalData = localdata?.find((d) => d?.name === props.name);

      if (msgLocalData) {
        if (returned !== msgLocalData?.lastState) {
          msgLocalData.dismissed = false;
          msgLocalData.lastState = returned;
        }
      }

      const data = {
        ...props,
        // Check for locally stored last state, otherwise default to curent state
        lastState: msgLocalData ? msgLocalData.lastState : returned,
        currentState: returned,
        dismissed: msgLocalData ? msgLocalData.dismissed : false,
      } as MsgStorageData;

      storeMessageData(data);
      setNotifications([...notifications, data]);
    })();
  }
}
