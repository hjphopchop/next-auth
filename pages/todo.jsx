import Link from 'next/link';
import React from 'react'
import Layout from '../components/Layout';
import { todos } from '../todos'

export default function todo() {
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
