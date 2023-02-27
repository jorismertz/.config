import { createSpace, focusDisplay } from "../../utils/yabai.jsx";

interface Props {
  monitorAmount: number;
}

const CreateSpace = ({ monitorAmount }: Props) => {
  let screenIndex = parseInt(window.location.pathname.split("/")[1]);
  if (monitorAmount > 1) screenIndex = monitorAmount + 1 - screenIndex;

  return (
    <div
      className="space-component"
      onClick={() => {
        focusDisplay(screenIndex);
        createSpace();
      }}
    >
      <p className="add-icon">􀅼</p>
    </div>
  );
};

export default CreateSpace;
