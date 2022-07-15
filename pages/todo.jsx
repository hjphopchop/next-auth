import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

export default function Todo({ todos }) {
  const { status } = useSession();
  if (status === "unauthenticated") {
    return (
      <Layout>
        <h1 className="py-4">Нет доступа</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-4">Список карточек</div>
      <div className="grid grid-cols-4 gap-4 my-4">
        {todos.map((item) => (
          <div className="bg-green-200 px-4 py-4" key={item.id}>
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
