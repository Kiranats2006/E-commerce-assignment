import { useEffect, useState } from 'react';
import axios from 'axios';
import CartCard from '../components/ProdCard/CartCard';

function CardPage() {
  const [UsersCartData, setUsersCartData] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return alert('Token is missing , Please login');
      }
      const response = await axios.get(
        `http://localhost:8080/cart/get-user-cart-data?token=${token}`
      );
      console.log(response.data);
      setUsersCartData(response.data.cartData);
    };

    getCartData();
  }, []);
  return (
    <div>
      {UsersCartData?.map((singleCartObject, index) => {
        return (
          <div key={index}>
            <CartCard
              title={singleCartObject.productId.title}
              image={singleCartObject.productId.images[0]}
              description={singleCartObject.productId.description}
              originalPrice={singleCartObject.productId.originalPrice}
              discountedPrice={singleCartObject.productId.discountedPrice}
              id={singleCartObject._id}
              createdBy={'kiranats2006@gmail.com'}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardPage;