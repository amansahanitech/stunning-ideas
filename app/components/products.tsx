import Image from "next/image";
import ProductImg from '../../public/product.jpg'
import Link from "next/link";

import { products } from "./getProducts";

  const ProductSection = () => {
    return (
      <section>
        <h3 className="text-black text-center pt-8 text-4xl font-extralight" >Latest Products</h3>
        <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, id) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-4">
            <Link href={`/product/${product.name}`}>
              <Image
                className="w-full h-48 object-cover mb-4 hover:opacity-70"
                src={product.image[0]}
                alt={product.name}
                width={500}
                height={500}
              />
            </Link>
            <Link href={`/product/${product.name}`}>
              <h2 className="hover:underline text-xl font-semibold mb-2 text-gray-900">{product.name}</h2>
            </Link>
              <p className="text-gray-600 mb-2">₹{product.price.toFixed(2)}</p>
              <p className="text-gray-800">{product.meta}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
    );
  };
  
  export default ProductSection;
  