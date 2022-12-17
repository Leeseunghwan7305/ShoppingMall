import { gql } from 'graphql-tag';

//gql 타입만들기
export const GET_CART = gql`
  query GET_CHAT {
    id
    imageUrl
    price
    title
    amount
  }
`;

export const ADD_CART = gql`
  mutation ADD_CART($id: string) {
    id
    imageUrl
    price
    title
    amount
  }
`;
