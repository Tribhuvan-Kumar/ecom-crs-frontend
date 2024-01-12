import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HomeLocation from "@/components/home-component-utils/home-location";
import HomeCoursel from "@/components/home-component-utils/home-carousel";
import { useToast } from "@/components/ui/use-toast";

interface HomeCourselUsestate {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  price: string;
}

const HomePageCarouselPart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredPost, setFeaturedPost] = useState<HomeCourselUsestate[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    async function getAllFeatureImages() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/post/feature-product"
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

  useEffect(() => {
    const intervalNext = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(intervalNext);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredPost.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredPost.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-5 mt-10 gap-5 sm:flex-row sm:items-start">
        <div className="grow">
          <Card className="min-w-80 relative sm:h-[24.2rem]">
            <div className="overflow-hidden">
              {featuredPost.length > 0 &&
                featuredPost
                  .slice(currentIndex, currentIndex + 1)
                  .map((eachCarousel) => (
                    <HomeCoursel
                      key={eachCarousel.id}
                      eachCarousel={eachCarousel}
                    />
                  ))}
            </div>
            <div>
              <Button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full w-12 h-12"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-full" />
              </Button>
              <Button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full w-12 h-12"
                onClick={handleNext}
              >
                <ChevronRight className="w-full" />
              </Button>
            </div>
          </Card>
        </div>
        <div className="hidden sm:block">
          <HomeLocation />
        </div>
      </div>
    </>
  );
};

export default HomePageCarouselPart;
