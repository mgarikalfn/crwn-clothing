import { createContext, useState,useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";
import SHOP_DATA from "../SHOP-DATA";

export const CategoriesContext = createContext({
  products: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getcategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getcategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
