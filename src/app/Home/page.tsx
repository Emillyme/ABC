import BoxProject from "../components/BoxProject/boxproject";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <BoxProject/>
      </main>
    </>
  );
}