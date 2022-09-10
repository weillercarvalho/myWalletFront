import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem(`wallet`));

  if (auth) {
    return <>{children}</>;
  } else {
    localStorage.clear(`wallet`);
    React.useEffect(() => {
      navigate(`/`);
    },[])
    
  }
}
