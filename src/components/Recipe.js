import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import { List } from "antd";

const QUERY_RECIPE= gql`
  query Recipe($id: Int!) {
    recipe(id: $id) {
      name
      prepTimeMinutes
      cookTimeMinutes
      servings
      difficulty
      cuisine
      caloriesPerServing
      reviewCount
    }
  }
`;

function Recipe() { 
  const parms = useParams()
  const [fetchRecipe, { data, error }] = useLazyQuery(QUERY_RECIPE);

    useEffect(() => {
      fetchRecipe({
        variables: {
          id: parseInt(parms.id),
        },
      })
    }, [])

    return ( 
       <div> 
            <h1> Recipe </h1> 
            <div>Name: {data && data.recipe.name}</div>
            <div>prepTimeMinutes: {data && data.recipe.prepTimeMinutes}</div>
            <div>cookTimeMinutes: {data && data.recipe.cookTimeMinutes}</div>
            <div>servings: {data && data.recipe.servings}</div>
            <div>difficulty: {data && data.recipe.difficulty}</div>
            <div>cuisine: {data && data.recipe.cuisine}</div>
            <div>caloriesPerServing: {data && data.recipe.caloriesPerServing}</div>
            <div>reviewCount: {data && data.recipe.reviewCount}</div>
      </div> 
    ); 
} 
export default Recipe;