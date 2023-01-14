// components/AppContext.js
import React, { createContext, useState, useEffect } from "react";

const ProductListContext = createContext();

const ProductListContextProvider = ({ children }) => {

    const [productList, updateProductList] = useState([]);

    const listState = {
        productList,
        updateProductList
    }

    return (
        // the Provider gives access to the context to its children
        <ProductListContext.Provider value={listState}>
          {children}
        </ProductListContext.Provider>
      );
    };



export {ProductListContext, ProductListContextProvider};
