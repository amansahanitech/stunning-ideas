'use client'
import React from 'react'

type Props = {}

export default function buyBtnHandler({product}: {product : productType}) {

    const handleContactClick = () => {
        const message = `I'm interested in the product: ${product?.name} - Price: ₹${product?.price.toFixed(
            2
        )}, Quantity: ${1}`;
        const whatsappUrl = `https://wa.me/+917666920328?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };

  return (
    <button
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
    onClick={handleContactClick}
  >
    Contact regarding this product
  </button>
  )
}
