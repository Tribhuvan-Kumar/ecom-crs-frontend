import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "../ui/card";
import { CarouselItem } from "../ui/carousel";

interface HomeProductDivProps {
  eachProduct: {
    id: string;
    imgUrl: string;
    title: string;
    description: string;
    price: string;
  };
}

const HomeProductDiv = ({ eachProduct }: HomeProductDivProps) => {
  const { id, imgUrl } = eachProduct;
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate(`/trending-product/${id}`)
  }
  return (
    <>
      <CarouselItem className="md:basis-1/3 lg:basis-1/4 w-full h-fit">
        <div>
          <Card className="border-none">
            <CardContent className="flex aspect-square items-center justify-center overflow-hidden">
              <img
                src={imgUrl}
                onClick={handleRedirect}
                className="object-cover object-center w-full h-full rounded-3xl cursor-pointer scale-95 border-2 border-black dark:border-white hover:scale-100"
                alt=" "
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </>
  );
};

export default HomeProductDiv;
