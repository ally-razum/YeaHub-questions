import { Outlet } from "react-router-dom";
import "./Layout.css"

export function Layout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        app-header
      </header>
      <main className="app-content" >        
        <Outlet />
      </main>
    </div>
  );
}
