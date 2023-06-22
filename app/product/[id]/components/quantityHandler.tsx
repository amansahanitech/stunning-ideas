'use client'
import React, {useState} from 'react'


function QuantityHandler() {
    const [quantity, setQuantity] = useState<number>(1);

  return (
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
  )
}

export default QuantityHandler