import logo from "./logo.svg";
import { gql, useQuery } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:8000",
//   cache: new InMemoryCache(),   // can do this directly on index.js
// });

// const query = `query GetTodos {
//   getTodos {
//     id
//     title
//     user {
//       username
//     }
//   }
// }`;

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      user {
        username
        phone
        email
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query); //in production the data will come from the database

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <table>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo?.user?.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
