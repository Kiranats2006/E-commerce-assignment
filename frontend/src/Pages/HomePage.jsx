import { useState } from "react";
import Card from "../components/ProdCard/Card";

function HomePage() {
  const [data, ] = useState(
    new Array(20).fill(null).map(() => ({ title: "Product Title" }))
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-green-500 to-pink-500 font-serif">
      <div className="p-8 shadow-lg rounded-lg max-w-6xl w-full z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((ele, index) => (
            <div
              key={index}
              className="flex justify-center items-center border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg"
            >
              <Card title={ele.title} Index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
