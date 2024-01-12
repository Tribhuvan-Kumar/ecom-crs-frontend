import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import EachProduct from "../home-component-utils/each-product";
import { Home } from "lucide-react";

interface Product {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  price: string;
}

const TrendingProduct = () => {
  const [productFound, setProductFound] = useState<Product | undefined>();
  const [productNotFound, setProductNotFound] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getProductById() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/post/trending-product/${id}`
        );

        if (response.data) {
          setProductNotFound(false);
          setProductFound(response.data.data);
        }
      } catch (error) {
        setProductNotFound(true);
      }
    }

    getProductById();
  }, []);

  const handleHomeRedirect = () => {
    navigate("/");
  };
  return (
    <>
      <div className="overflow-hidden">
        {productNotFound ? (
          <>
            <div className="flex flex-col items-center justify-center mt-80">
              <p className="text-3xl">404 Page Not Found</p>
              <p className="mt-5 text-sm text-gray-600 hover:underline cursor-pointer" onClick={handleHomeRedirect}>Cick here to go Home</p>
            </div>
          </>
        ) : (
          <>
            <div
              className="mb-20 relative left-8 top-10 flex items-center gap-2 cursor-pointer"
              onClick={handleHomeRedirect}
            >
              <Home />
              <p>Home</p>
            </div>
            {productFound && <EachProduct allDetails={productFound} />}
          </>
        )}
      </div>
    </>
  );
};

export default TrendingProduct;
