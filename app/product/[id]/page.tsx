/* eslint-disable */
'use client'
import Image from 'next/image';
import { SetStateAction, useState } from 'react';

import { products, notes } from '@/app/components/getProducts';



export async function generateStaticParams({ params }: { params: { id: string } }) {
  const product = products.find((product) => product.name === params.id.replaceAll('%20', ' '));
  return {
    props: {
      product,
    },
  };
}


function ProductPage ({params} : {params: {id: string}}) {
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [quantity, setQuantity] = useState(1);


    const product = products.find((product) => product.name === params.id.replaceAll('%20', ' '));
    // Mock product data (replace with your actual product data)

    const handleImageClick = (index : number) => {
        setSelectedImage(index);
      };
    
    const handleContactClick = () => {
        const message = `I'm interested in the product: ${product?.name} - Price: ₹${product?.price.toFixed(
            2
        )}, Quantity: ${quantity}`;
        const whatsappUrl = `https://wa.me/+917666920328?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };

    return (
        <div className="min-w-min min-h-screen bg-white mx-auto py-8 px-4">
        <div className='lg:w-7/12 lg:mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="mb-8">
            <Image
              src={product?.image[selectedImage] as string}
              alt={product?.name as string}
              height={1000}
              width={1000}
              priority = {true}
            />
            <div className="flex flex-wrap justify-start gap-2 mt-4">
              {product?.image.map((image, index) => (
                <Image
                  key={index}
                  width={100}
                  height={100}
                  className={`w-full h-auto cursor-pointer border ${
                    index === selectedImage ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  src={image}
                  alt={`Product ${index + 1}`}
                  style={{width: '100px',height: '100px'}}
                  onClick={() => handleImageClick(index)}
                />
              )) as JSX.Element[]}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">{product?.name}</h1>
            <p className="text-xl text-gray-800 mb-4">₹{product?.price.toFixed(2)}</p>
            <p className="text-lg text-gray-800 mb-4">{product?.meta}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2 text-lg text-gray-800">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="w-16 py-1 px-2 border border-gray-300 rounded text-gray-900"
                value={quantity}
                onChange={(e) => setQuantity(!(quantity < 1) ? Number.parseInt(e.target.value ) : 1)}
              />
            </div>
            <div className='grid grid-flow-row text-gray-800'>
              <p className='text-lg text-gray-800 mb-1'>
                  Delivery:
              </p>
              <p className='mb-4'>
                Free shipping within Maharashtra. ₹300 extra shipping charges for other states in India.
              </p>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleContactClick}
            >
              Contact regarding this product
            </button>

          </div>
        </div>
        {/**---------------------------------------------------------------------- */}
        <div className='flex text-gray-800 flex-col'>
            <h3 className='font-bold text-xl underline underline-offset-4 mt-10 md:mt-0'>Description</h3>
            <div className='mt-5'>
                <p>
                Introducing Miniature Memory Frames: charming, compact frames that hold photos and memories. 
                These frames come in various designs, allowing you to personalize and decorate them. 
                Safely preserve and display your cherished moments with these versatile frames. 
                Perfect for gifting or adding a touch of nostalgia to any space.
                </p>
                {/**---------------------------------------------------------------------------------- */}
                <h4 className='font-bold mt-5 mb-1'>About the Product</h4>
                <p>
                    {product?.Description.About}
                </p>
                <h4 className='font-bold mt-5 mb-1'>Size</h4>
                  <ul className='list-disc list-inside'>
                    {
                    product?.Size.length as number > 1 
                    ? product?.Size.map((size, key) => (<li key={key}>{size}</li> )): <p>{product?.Size[0] }</p> }
                </ul>
      {/**--------------------------------------------------------------------------------- */}
                {
                  product?.light ? (
                    <>
                    <h4 className='font-bold mt-5 mb-1'>Lights (Optional)</h4>
                    <p>
                      {product?.light}
                    </p>
                    </>
                  ) : null
                }
                {/**---------------------------------------------------------------------- */}
                <h4 className='font-bold mt-5 mb-1'>Customer Requirements</h4>
                <ul className='list-disc list-inside'>
                    {product?.Description.customerRequirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
                 {/**---------------------------------------------------------------------- */}
                 <h4 className='font-bold mt-5 mb-1'>Note</h4>
                 <ul className='list-disc list-inside'>
                    {notes?.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                </ul>
                {/**---------------------------------------------------------------------- */}
                <h4 className='font-bold mt-5 mb-1'>Contact</h4>
                <ul className='list-disc list-inside'>
                  <li>
                    Email:
                    <a
                      href={`mailto:thestunningideas@gmail.com`}
                      className='text-blue-500 hover:text-blue-600'
                    >
                    &nbsp;  thestunningideas@gmail.com
                    </a>
                  </li>
                  <li>
                    Phone: 
                    <a
                      href={`tel:+917666920328`}
                      className='text-blue-500 hover:text-blue-600'
                    >
                    &nbsp;   +91 7666920328
                    </a>
                  </li>
                  <li>
                    Whatsapp:
                    <a
                      href={`https://wa.me/+917666920328?text=I'm interested in the product: ${product?.name} - Price: ₹${product?.price.toFixed(2)}`}
                      className='text-blue-500 hover:text-blue-600'>
                      &nbsp; +91 7666920328
                    </a>
                  </li>
                </ul>

                
            </div>
        </div>
        </div>
      </div> 
    );
};

export default ProductPage;
