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
import siteContainer from "./components/container";
import NavBar from './components/navBar/index';
import Page from './components/page/index';

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

        <Page />

      </Router>
    </ApolloProvider>
  );
}

export default App;