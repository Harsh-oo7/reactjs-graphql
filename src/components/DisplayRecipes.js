import React, { useEffect, useState } from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import { List } from "antd";
import { useNavigate } from "react-router-dom";

const QUERY_ALL_RECIPES = gql`
  query Recipes {
    recipes {
      id
      name
      image
    }
  }
`;

function DisplayRecipes() {
  const { data, loading, error, refetch } = useQuery(QUERY_ALL_RECIPES);
  const navigate = useNavigate()

  return (
    <List
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={data && data?.recipes}
      renderItem={(item) => (
        <List.Item
          key={item.name}
          extra={<img width={125} alt="logo" src={item.image} />}
          onClick={() => {
            navigate(`/recipe/${item.id}`)
          }}
        >
          {item.name}
        </List.Item>
      )}
    />
  );
}
export default DisplayRecipes;
