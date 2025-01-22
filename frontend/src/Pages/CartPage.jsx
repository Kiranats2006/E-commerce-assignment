import { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "../components/ProdCard/CartCard";
// import SinglePageProduct from "./SingleProductPage";
function CartPage() {
   
  const [usersCartData, setUsersCartData] = useState([]);
  useEffect(() => {
    const getCartData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return alert("Token is missing");
      }
      const response = await axios.get(
        `http://localhost:8080/cart/get-user-cart-data?token=${token}`
      );
      console.log(response);
      setUsersCartData(response.data.CartCard);
    };
    getCartData();
  }, []);
  return (
    <div>
      {usersCartData?.map((singleCartObject, index) => {
        return (
          <div key={index}>
            <CartCard
              title={singleCartObject.title}
              image={singleCartObject.images?.[0] ? singleCartObject.productId.images[0]:'Product Image missing'}
              Index={index}
              description={singleCartObject.description}
              originalPrice={singleCartObject.originalPrice}
              discountedPrice={singleCartObject.discountedPrice}
              rating={singleCartObject.rating}
              id={singleCartObject._id}
              createdBy={singleCartObject.userId}
            />
          </div>
        );
      })}
      {/* <CartCard /> */}
    </div>
  );
}
export default CartPage;
