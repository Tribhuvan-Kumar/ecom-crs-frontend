import { useEffect, useState } from "react";
import HomeLocation from "../home-component-utils/home-location";
import HomeProductDiv from "../home-component-utils/home-product-div";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "../ui/use-toast";
import axios from "axios";

interface HomeTrendingUsestate {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  price: string;
}

const HomePageTrendingPart = () => {
  const [featuredPost, setFeaturedPost] = useState<HomeTrendingUsestate[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    async function getAllFeatureImages() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/post/all-product"
        );

        if (response.data) {
          setFeaturedPost(response.data.data);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Network error! Please try again later.",
        });
      }
    }

    getAllFeatureImages();
  }, []);

  return (
    <>
      <div className="px-5 flex flex-col gap-2 overflow-hidden">
        <div className="font-bold">TRENDING PRODUCTS</div>
        <Card className="min-w-80 relative sm:h-72 border-none px-16">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent className="sm:px-10 sm:gap-10 sm:h-full sm:relative sm:right-0">
              {featuredPost.map((eachProduct) => (
                <HomeProductDiv
                  key={eachProduct.id}
                  eachProduct={eachProduct}
                />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="overflow-hidden"></div>
        </Card>
      </div>

      <div className="px-6 mb-10 block sm:hidden">
        <HomeLocation />
      </div>
    </>
  );
};

export default HomePageTrendingPart;
