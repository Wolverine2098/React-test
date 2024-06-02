import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  const checkOnline = () => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  };

  useEffect(() => {
    checkOnline();
  }, []);

  return isOnline;
};

export default useOnlineStatus;
