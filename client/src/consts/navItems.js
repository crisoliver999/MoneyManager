import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BalanceIcon from "@mui/icons-material/Balance";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PublishIcon from "@mui/icons-material/Publish";
import PaidIcon from "@mui/icons-material/Paid";
import FlagIcon from "@mui/icons-material/Flag";
import DashboardIcon from "@mui/icons-material/Dashboard";

const navItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "dashboard",
  },
  {
    text: "Records",
    icon: <FormatListBulletedIcon />,
    oath: "records",
  },
  {
    text: "Divider1",
  },
  {
    text: "Balance",
    icon: <BalanceIcon />,
    path: "balance",
  },
  {
    text: "Outlook",
    icon: <RemoveRedEyeIcon />,
    path: "outlook",
  },
  {
    text: "Cash-flow",
    icon: <CandlestickChartIcon />,
    path: "cash-flow",
  },
  {
    text: "Spending",
    icon: <ShoppingCartIcon />,
    path: "spending",
  },
  {
    text: "Credit",
    icon: <CreditCardIcon />,
    path: "credit",
  },
  {
    text: "Reports",
    icon: <ReceiptIcon />,
    path: "reports",
  },
  {
    text: "Divider2",
  },
  {
    text: "Planed payments",
    icon: <NextPlanIcon />,
    path: "planed-payments",
  },
  {
    text: "Budgets",
    icon: <QueryStatsIcon />,
    path: "budgets",
  },
  {
    text: "Debts",
    icon: <PaidIcon />,
    path: "debts",
  },
  {
    text: "Goals",
    icon: <FlagIcon />,
    path: "goals",
  },
  {
    text: "Currency rates",
    icon: <CurrencyExchangeIcon />,
    path: "currency-rates",
  },
  {
    text: "Imports",
    icon: <PublishIcon />,
    path: "imports",
  },
];

export default navItems;
