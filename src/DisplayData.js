import React, { useState } from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetUsers {
    users {
      name
    }
  }
`;

const GET_USER_BY_EMAIL = gql`
  query User($email: String!) {
    user(email: $email) {
      email
      name
      age
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      age
      email
    }
  }
`;

function DisplayData() {
  const [userSearched, setUserSearched] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS);
  const [fetchUser, { data: userSearchedData, error: userSearchedError }] =
    useLazyQuery(GET_USER_BY_EMAIL);
  const [createUser, { data: userAdded, error: userAddedError }] =
    useMutation(CREATE_USER);

  if (loading) {
    return <div>Data is loading...</div>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>List Of Users</h1>
      {data &&
        data.users.map((user) => {
          return (
            <div>
              <h2>{user.name}</h2>
            </div>
          );
        })}
      <h1>------------------------------------------------</h1>

      <div>
        <input
          type="text"
          placeholder="Enter email of user"
          onChange={(event) => {
            setUserSearched(event.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchUser({
              variables: {
                email: userSearched,
              },
            });
          }}
        >
          Fetch User
        </button>
        <div>
          {userSearchedData && (
            <div>
              <div>User Name: {userSearchedData.user.name}</div>
              <div>User Email: {userSearchedData.user.email}</div>
              <div>
                User Age:{" "}
                {userSearchedData.user?.age ? userSearchedData.user?.age : "NA"}
              </div>
            </div>
          )}
        </div>
      </div>
      <h1>------------------------------------------------</h1>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log("name, email, age: Number(age)", name);
            createUser({
              variables: {
                input: { name, email, age: Number(age) },
              },
            });

            refetch();
          }}
        >
          Create User
        </button>
      </div>
    </div>
  );
}

export default DisplayData;
