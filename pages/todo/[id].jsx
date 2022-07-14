import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../components/Layout';
import { todos } from '../../todos';

export default function Todo() {
    const { query } = useRouter();
    console.log(query)
  return (
    <Layout>
      <div>Карточка {query.id}</div>
      <div>{todos[query.id].message}</div>
    </Layout>
  );
}
