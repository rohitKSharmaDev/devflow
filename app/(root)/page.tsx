import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log({ session });

  return (
    <>
      <h1 className="text-3xl underline">Welcome to DevFlow</h1>
    </>
  );
}

export default Home;