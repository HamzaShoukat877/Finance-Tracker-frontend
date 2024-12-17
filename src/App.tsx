import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Auth } from "./pages/auth";
import { Dashboard } from "./pages/dashboard";
import "./App.css";
import { FinancialRecordProvider } from "./contexts/Financial-record-context";
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

function App() {
  const { isSignedIn } = useUser();

  console.log(isSignedIn);

  return (
    <Router>
      <div className="app-container">
        {isSignedIn && (
          <div className="navbar">
            <SignedIn>
              <UserButton appearance={{ baseTheme: dark }} />
            </SignedIn>
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              isSignedIn ? (
                <FinancialRecordProvider>
                  <Dashboard />
                </FinancialRecordProvider>
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
