import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CREATE_USER = gql`
mutation createRecipe($input: CreateRecipeInput!) {
  createRecipe(input: $input) {
    name
  }
}
`;
const CreateRecipe = () => {
  const [createUser, { data, error }] =
    useMutation(CREATE_USER);


  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    createUser(
      {
        variables: {
          input: {
            name: values.name,
            prepTimeMinutes: parseInt(values.prepTimeMinutes),
            cookTimeMinutes: parseInt(values.cookTimeMinutes),
            servings: parseInt(values.servings),
            difficulty: (values.difficulty),
            cuisine: values.cuisine,
            caloriesPerServing: parseInt(values.caloriesPerServing),
            image: values.image,
            reviewCount: parseInt(values.reviewCount),
            rating: parseFloat(values.rating)
          }
        }
      }
    )
    form.resetFields();
    
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="prepTimeMinutes"
        label="Prep Time Minutes"
        rules={[
          {
            required: true,
          },
        ]}
        type= "number"
      >
        <Input />
      </Form.Item>
    
      <Form.Item
        name="cookTimeMinutes"
        label="Cook Time Minutes"
        rules={[
          {
            required: true,
          },
        ]}
        type= "number"
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="servings"
        label="Servings"
        rules={[
          {
            required: true,
          },
        ]}
        type= "number"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="difficulty"
        label="Difficulty"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="cuisine"
        label="Cuisine"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="caloriesPerServing"
        label="Calories Per Serving"
        rules={[
          {
            required: true,
          },
        ]}
        type= "number"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="image"
        label="Image"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="reviewCount"
        label="Review count"
        rules={[
          {
            required: true,
          },
        ]}
        type= "number"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="rating"
        label="Rating"
        rules={[
          {
            required: true,
          },
        ]}
        type= "number"
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};


export default CreateRecipe;