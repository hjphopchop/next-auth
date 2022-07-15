import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className="py-4">Без авторизации страница с задачами не доступна</h1>
        <p>данные для входа: <br/>
         username: любое имя <br/>
         email: test@gmail.com</p>
      </Layout>
    </>
  );
}
