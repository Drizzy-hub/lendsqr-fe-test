import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Users from "./pages/dashboard/index";
import UserProfile from "./pages/users/index";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard/users" element={<Users />} />
      <Route path="dashboard/users/:id" element={<UserProfile  />} />
    </Routes>
  )
}

export default App
