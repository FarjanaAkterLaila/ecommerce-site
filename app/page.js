import Image from "next/image";
import Header from "./Header";
import "./globals.css"
import Banner from "./Banner";
import Feature from "./Feature";
export default function Home() {
  return (
    <div>
      <Header />

      {/* Banner Section */}
      <Banner />
      <Feature/>
      {/*  
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Category name="Men's Wear" />
        <Category name="Women's Wear" />
        <Category name="Accessories" />
      </div>
    </section>

    
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard id="1" title="Stylish Jacket" price="3500" image="/images/product1.jpg" />
        <ProductCard id="2" title="Trendy Shoes" price="2500" image="/images/product2.jpg" />
        
      </div>
    </section>

    <Footer /> */}
    </div>
  );
}
