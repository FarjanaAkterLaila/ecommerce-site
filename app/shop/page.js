import Card from "../Card";
import Footer from "../Footer";
import Header from "../Header";
import Details from "./Details";
import ProductPage from "./Product";
import ReviewRating from "./Rating";

// app/about/page.tsx
const About = () => {
    return (
      <div>
        <Header/>
        
     
        <div className="bg-[#f4f8ff]">
        <ProductPage/>
        <ReviewRating/>
        <Details/>
        <Card/>
          </div>

        <Footer/>
      </div>
    );
  };
  
  export default About;
  