import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router";


const PrivateRout = ({ children }) => {
    const { user } = use(AuthContext);

    if (user) {
        return children;
    } else {
      return <Navigate to="/login" replace />;
    }
    
};

export default PrivateRout;