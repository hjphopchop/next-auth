import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

export default function Todo({ todos }) {
  const { status } = useSession();
  if (status === "unauthenticated") {
    return (
      <Layout>
        <h1>Нет доступа</h1>
      </Layout>
    );
  }

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
  const todos = await res.json();
  return {
    props: {
      todos,
    },
  };
}
