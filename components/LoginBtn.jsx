import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginBtn() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        {session.user.name} <br />
        <button onClick={() => signOut()}>Выйти</button>
      </>
    );
  }
  return (
    <>
      <br />
      <button onClick={() => signIn()}>Войти</button>
    </>
  );
}
