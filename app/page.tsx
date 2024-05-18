import Header from "./components/header";
import Banner from "./components/banner";
import { About } from "./components/about";
import { MwnuItems } from "./components/menu";
import { MoreOrders } from "./components/more-orders";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <MwnuItems />
      <MoreOrders />
    </div>
  );
}
