import BoxProject from "../components/BoxProject/boxproject";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <BoxProject/>
        <BoxProject/>
        <BoxProject/>
        <BoxProject/>
        <BoxProject/>
        <BoxProject/>
        <BoxProject/>
        <BoxProject/>
        <BoxProject/>
      </main>
    </>
  );
}