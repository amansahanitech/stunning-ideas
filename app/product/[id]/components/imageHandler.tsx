'use client'
import React, {useState} from 'react'
import Image from 'next/image';



function ImageHandler({product}: {product : productType} ) {

    const [selectedImage, setSelectedImage] = React.useState<number>(0);

    const handleImageClick = (index : number) => {
        setSelectedImage(index);
      };

  return (
    <div className="mb-8 quantity">
    <Image
      src={product?.image[selectedImage] as string}
      alt={product?.name as string}
      height={600}
      width={600}
      priority = {true}
    />
    <div className="flex flex-wrap justify-start gap-2 mt-4">
      {product?.image.map((image, index) => (
        <Image
          key={index}
          width={80}
          height={80}
          className={`w-full h-auto cursor-pointer border ${
            index === selectedImage ? 'border-blue-500' : 'border-gray-300'
          }`}
          src={image}
          alt={`Product ${index + 1}`}
          style={{width: '80px',height: '80px'}}
          onClick={() => handleImageClick(index)}
        />
      )) as JSX.Element[]}
    </div>
  </div>
  )
}

export default ImageHandler
