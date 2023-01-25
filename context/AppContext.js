// components/AppContext.js
import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [productList, updateProductList] = useState([]);
    const [recipeList, updateRecipeList] = useState([]);


    const listState = {
      productListState:{
        productList,
        updateProductList,
      },
      recipeListState:{
        recipeList,
        updateRecipeList
      }
    }

    return (
        // the Provider gives access to the context to its children
        <AppContext.Provider value={listState}>
          {children}
        </AppContext.Provider>
      );
    };



export {AppContext, AppContextProvider};
