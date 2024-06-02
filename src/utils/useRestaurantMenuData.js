import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenuData = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async (resId) => {
    const resMenu = await fetch(MENU_URL + resId);
    const info = await resMenu.json();
    setResInfo(info.data);
  };
  useEffect(() => {
    fetchMenu(resId);
  }, []);

  return resInfo;
};

export default useRestaurantMenuData;
