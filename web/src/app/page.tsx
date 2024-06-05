import { Banner } from "@/components/banner";
import { Header } from "@/components/header"
import { ProductComponent } from "@/components/product";

export default async function Home() {
  return (
    <div className="bg-[url('/assets/header-bg.svg')]">
      <Header />
      <Banner />
      <ProductComponent />
    </div>
  );
}
