import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { useSession } from "next-auth/react";

export default function Todo({ todo }) {
  const { query } = useRouter();
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
      <div>Карточка {query.id}</div>
      <div>{todo.message}</div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/todo/${params.id}`);
  const todo = await res.json();
  return {
    props: { todo },
  };
}
