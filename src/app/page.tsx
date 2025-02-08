
import DiscountItem from "@/components/DiscountItem";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import MyBlog from "@/components/MyBlog";
import NewsLater from "@/components/NewsLater";
import Shopex from "@/components/Shopex";
import TopCate from "@/components/TopCate";
import TrendingProducts from "@/components/TrendingProducts";
import UniqueFeature from "@/components/UniqueFeature";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/queries";


type Product = {
  _id : string;
  name : string;
  description : string;
  price : number;
  imageUrl : string
}
export default async function Home(){
  
  
  return(
    <div>
      <HeroSection />
      <FeaturedProducts />
      <Shopex />
      <UniqueFeature />
      <TrendingProducts />
      <DiscountItem />
      <TopCate />
      <NewsLater />
      <MyBlog />

      

      </div>
   
  )

}