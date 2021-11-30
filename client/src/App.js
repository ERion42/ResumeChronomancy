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
// taken out temporarily- doesn't look like we need Route or Switch at the moment
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Front End
// import NavBar from './components/navBar/index';
import SiteContainer from './components/siteContainer';


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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <SiteContainer />
      </Router>
    </ApolloProvider>
  );
}

export default App;