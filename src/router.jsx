import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import {fetchItems} from './Products'

import Cart from './components/Cart';
import Home from './components/Home';
// console.log(myarr);
const itemsLoader = async () => {
    const items = await fetchItems();
    return {items} ;
  };
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route loader={itemsLoader} path="" element={<Home />} />

            <Route
                path="cart"
                element={<Cart />} />
        </Route>
    )
);
