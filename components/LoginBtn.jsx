import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginBtn() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <div className="">{session.user.name}</div>
        <div className="">{session.user.email}</div>
        <button
          className="absolute right-0 bottom-50% bg-green-400 px-3 py-1"
          onClick={() => signOut()}
        >
          Выйти
        </button>
      </>
    );
  }
  return (
    <>
      <br />
      <button
        className=" absolute right-0 bottom-50% bg-green-400 px-3 py-1"
        onClick={() => signIn()}
      >
        Войти
      </button>
    </>
  );
}
