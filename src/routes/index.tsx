import { CashRequest, KycCustomer, Login, Overview, Reconciliation, Settlements } from "@/pages"
import DashboardLayout from "@/pages/protected/layout"
import { routesPath } from "@/utils"
import { Route, Routes } from "react-router-dom"

const AppRoute = () => {
  const { DASHBOARD, CASH_REQUEST, KYC, SETTLEMENTS, ALL_SETTLEMENTS, RECONCILIATION } = routesPath

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<DashboardLayout/>}>
          <Route path={DASHBOARD} element={<Overview />} />
          <Route path={KYC} element={<KycCustomer />} />
          <Route path={CASH_REQUEST} element={<CashRequest />} />
          <Route path={SETTLEMENTS} element={<Settlements />} />
          <Route path={ALL_SETTLEMENTS} element={<Settlements />} />
          <Route path={RECONCILIATION} element={<Reconciliation />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoute