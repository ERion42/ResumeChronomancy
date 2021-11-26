// Required for React
import React from 'react';
// Styling if necessary
import './App.css';
// Back End
import {
  ApolloClient, 
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Front End
import NavBar from './components/navBar/index';
import Page from './components/page/index';
import LandingPage from "./pages/landingPage/index";
import Login from "./pages/login/index";
import SignUpForm from './pages/signup/index'
import About from './pages/about/index';
import FAQ from './pages/FAQs/index';

// Required for GraphQL
const httpLink = createHttpLink({
  uri: '/graphql'
});
 
// Not sure what this is
const authLink = setContext ((_, { headers }) => {
  const token = localStorage.getItem('id-token');
  return {
    headers: {
      ...headers, 
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Initialize Apollo?
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Taking this out for a moment- Apollo might need to be re-added
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        {/* Sidebar doesn't work */}
        {/* <SideBar /> */}
        
        {/* Page needs formatting - not used at the moment, though we might want to use it to
        "contain" the other components */}
        {/* <Page /> */}

        {/* Landing Page - Primary Page*/}
        {/* <LandingPage /> */}

        {/* Login Page */}
        <Login />

        {/* Sign Up Page */}
        <SignUpForm />

        {/* About Page */}
        <About />

        {/* Frequently Asked Questions Page */}
        <FAQ />

      </Router>
    </ApolloProvider>
  );
}

export default App;