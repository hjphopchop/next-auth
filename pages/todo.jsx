import Link from 'next/link';
import React from 'react'
import Layout from '../components/Layout';

export default function todo({todos}) {
    console.log(todos)
  return (
    <Layout>
      <div>Список карточек</div>
      <div>
        {todos.map((item) => (
          <div key={item.id}>
            <Link href="/todo/[id]" as={`/todo/${item.id}`}>
              <a>{item.message}</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/todo");
    const todos = await res.json()
    return {
        props: {todos}
    }
}
