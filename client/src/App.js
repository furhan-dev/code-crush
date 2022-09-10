import React from "react";

import './assets/vendors/animate/animate.css';
import './assets/vendors/themify-icons/css/themify-icons.css';
import './assets/css/codecrush.css';


// import {
//     ApolloClient,
//     InMemoryCache,
//     ApolloProvider,
//     createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './components/pages/Signup';
// import Login from './components/pages/Login';
// import Contact from './components/pages/Contact';
import Home from "./components/pages/Home";
import Head from "./components/Head";
import Footer from "./components/Footer";



function App() {
  return (
            <div>
                <Head/>
                <Home/>
                <Footer />
            </div>
  );
}

export default App;
