import { gql } from 'graphql-tag';

//gql 타입만들기
export const GET_CART = gql`
  query GET_CHAT {
    id
    imageUrl
    price
    title
  }
`;

export const ADD_CART = gql`
  mutation ADD_CART($id: string) {
    id
    imageUrl
    price
    title
  }
`;

export const UPDATE_CART = gql`
  mutation UPDATE_CART($id: string, $amount: number) {
    cart(id: $id, amount: $amount) {
      id
      imageUrl
      price
      title
      amount
    }
  }
`;
