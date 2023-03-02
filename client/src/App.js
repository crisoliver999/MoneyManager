import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Login from "scenes/login";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Records from "scenes/records";
import Balance from "scenes/balance";
import Outlook from "scenes/outlook";
import CashFlow from "scenes/cashFlow";
import Spending from "scenes/spending";
import Credit from "scenes/credit";
import Reports from "scenes/reports";
import PlanedPayments from "scenes/planedPayments";
import Budgets from "scenes/budgets";
import Debts from "scenes/debts";
import Goals from "scenes/goals";
import CurrencyRates from "scenes/currencyRates";
import Imports from "scenes/imports";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const isLoggedIn = useSelector((state) => state.global.loggedIn);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={isLoggedIn ? <Layout /> : <Login />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/records" element={<Records />} />
              <Route path="/balance" element={<Balance />} />
              <Route path="/outlook" element={<Outlook />} />
              <Route path="/cash-flow" element={<CashFlow />} />
              <Route path="/spending" element={<Spending />} />
              <Route path="/credit" element={<Credit />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/planed-payments" element={<PlanedPayments />} />
              <Route path="/budgets" element={<Budgets />} />
              <Route path="/debts" element={<Debts />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/currency-rates" element={<CurrencyRates />} />
              <Route path="/imports" element={<Imports />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
