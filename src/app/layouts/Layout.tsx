import { Outlet } from "react-router-dom";
import "./Layout.css"
import { Header } from "@/widgets/Header/Header";

export function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
}
