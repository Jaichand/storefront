import { Route, Routes } from "react-router-dom"

import AppLayout from "../../../layout"
import AppHome from "../pages"

const AppNavigator = () => {

  return <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<AppHome />} />
    </Route>
  </Routes>;
}

export default AppNavigator