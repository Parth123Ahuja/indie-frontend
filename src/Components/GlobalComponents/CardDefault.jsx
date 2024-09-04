import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiString } from "../../service/apicalls";

export default function CardDefault() {
  const [shopData, setShopData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(apiString + "/shop/");
        setShopData(data); // Set the fetched data
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {shopData.data.slice(0, 4).map((card, index) => (
        <Card key={index} className="w-72 m-4">
          <CardHeader shadow={false} floated={false} className="h-48">
            <img
              src={card.imageUrl[0]}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex-col items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {card.name}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                RS. {card.sizes[0].discountPrice}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {card.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex space-x-6 justify-between">
            <Button
              ripple={false}
              className="w-1/2 bg-[#0B78BD] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
            <Button
              ripple={false}
              className="w-1/2 bg-pink-600 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              onClick={() => navigate("/checkout")}
            >
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
