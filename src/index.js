import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom" 
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql-backend-demo.onrender.com/graphql",
});

root.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ApolloProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
