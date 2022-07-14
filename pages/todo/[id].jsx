import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../components/Layout';

export default function Todo({todo}) {
    const { query } = useRouter();
  return (
    <Layout>
      <div>Карточка {query.id}</div>
      <div>{todo.message}</div>
    </Layout>
  );
}

export async function getServerSideProps({params}) {
  const res = await fetch(`http://localhost:3000/api/todo/${params.id}`);
  const todo = await res.json();
  return {
    props: { todo },
  };
}
