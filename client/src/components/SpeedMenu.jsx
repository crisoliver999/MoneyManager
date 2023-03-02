import { SpeedDial, SpeedDialAction } from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import speedDialActions from "consts/speedDialActions";

const handleSpeedDialAction = (name) => {
  switch (name) {
    case "Income":
      return console.log("Income");
    case "Expense":
      return console.log("Expense");
    case "Transfer":
      return console.log("Transfer");
    default:
  }
};
const SpeedMenu = () => {
  return (
    <SpeedDial
      ariaLabel="Speed Dial"
      icon={<SpeedDialIcon />}
      sx={{ position: "absolute", bottom: 16, right: 16 }}
    >
      {speedDialActions.map(({ name, icon }) => (
        <SpeedDialAction
          key={name}
          icon={icon}
          tooltipTitle={name}
          tooltipOpen
          sx={{ color: "#ffffff" }}
          onClick={() => {
            handleSpeedDialAction(name);
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default SpeedMenu;
