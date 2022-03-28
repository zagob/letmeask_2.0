import { Route, Routes } from "react-router-dom";
import { AdminRoom } from "../pages/AdminRoom";
import { AvailableRooms } from "../pages/AvailableRooms";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";
import { Room } from "../pages/Room";
import { IsAuthenticated, IsPrivate } from "./index";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <IsAuthenticated>
            <Home />
          </IsAuthenticated>
        }
      />
      <Route
        path="/dashboard"
        element={
          <IsPrivate>
            <Dashboard />
          </IsPrivate>
        }
      />
      <Route path="/rooms/new" element={<NewRoom />} />
      <Route path="/room/:id" element={<Room />} />

      <Route path="/admin/room/:id" element={<AdminRoom />} />
      <Route path="/available/rooms" element={<AvailableRooms />} />
    </Routes>
  );
}
