import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function IsAuthenticated({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();
  
  if (user) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

export function IsPrivate({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();
  
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
