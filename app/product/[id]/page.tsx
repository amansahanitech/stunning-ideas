import { products, notes } from '@/app/components/getProducts';
import ImageHandler from './components/imageHandler';
import QuantityHandler from './components/quantityHandler';
import BuyBtnHandler from './components/buyBtnHandler';


export async function generateStaticParams() {
  return products.map((product) => ({
    params: {
      id: product.name.replaceAll(' ', '%20'),
    },
  }))
}



function ProductPage ({params} : {params: {id: string}}) {


    const product = products.find((product) => product.name === params.id.replaceAll('%20', ' '));
    // Mock product data (replace with your actual product data)

  

    return (
      <div>
        <div className="min-w-min min-h-screen bg-white mx-auto py-8 px-4">
        <div className='lg:w-7/12 lg:mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
   
        <ImageHandler product={product as unknown as productType} />

          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">{product?.name}</h1>
            <p className="text-xl text-gray-800 mb-4">₹{product?.price.toFixed(2)}</p>
            <p className="text-lg text-gray-800 mb-4">{product?.meta}</p>

            <QuantityHandler/>

            <div className='grid grid-flow-row text-gray-800'>
              <p className='text-lg text-gray-800 mb-1'>
                  Delivery:
              </p>
              <p className='mb-4'>
                Free shipping within Maharashtra. ₹300 extra shipping charges for other states in India.
              </p>
            </div>
          
          <BuyBtnHandler product={product as unknown as productType} />

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
      </div> 
    );
};

export default ProductPage;

