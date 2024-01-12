import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EachProductProps {
  allDetails: {
    id: string;
    imgUrl: string;
    title: string;
    description: string;
    price: string;
  };
}

const EachProduct = ({ allDetails }: EachProductProps) => {
  const { imgUrl, title, description, price } = allDetails;
  return (
    <>
      <div className="px-6 mt-6 flex items-center justify-center sm:mt-20">
        <Card className="w-fit">
          <CardHeader>
            <div className="flex flex-col items-center justify-around gap-5 sm:flex-row sm:gap-5">
              <img
                src={imgUrl}
                className="w-full h-72 sm:w-1/2 sm:h-96 rounded-lg"
                alt={title}
              />
              <div className="flex flex-col items-start justify-between gap-5">
                <CardTitle>{title}</CardTitle>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="mt-10">
                  <p className="text-sm">{price}</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default EachProduct;
