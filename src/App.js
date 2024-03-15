import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import DisplayData from './DisplayData'

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-backend-demo.onrender.com/graphql"
  })
  return (
    <ApolloProvider client={client}>
      <div className="App">
      <DisplayData></DisplayData>

      </div>
    </ApolloProvider>
    
  );
}

export default App;
