import data from "./data.json";
import Main from "./components/Main";
import Side from "./components/Side";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="h-screen grid grid-cols-12">
      <Header />
      <Side data={data.data} />
      <Main data={data.data} />
    </main>
  );
}
