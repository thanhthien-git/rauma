export const mockOrderData = {
  userAddress: [
    {
      name: 'Alex Johnson',
      phone: '555 123 456',
      address: '245 Greenhill Road, District 3, San Diego, California',
      status: true,
    },
    {
      name: 'Emily Carter',
      phone: '555 987 654',
      address: '102 Elm Street, Apt 4B, Brooklyn, New York',
      status: false,
    },
    {
      name: 'Michael Lee',
      phone: '555 456 789',
      address: '77 Sunset Blvd, Suite 301, Los Angeles, California',
      status: false,
    },
  ],
  products: [
    {
      id: 1,
      name: 'Cute Cat Plush Pillow',
      variation: 'Pink, 50cm',
      price: 69000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    },
  ],
  shipping: {
    type: 'Express',
    fee: 16500,
    estimated: 'Oct 13 - Oct 16',
  },
  paymentMethods: [
    { id: 'paypal', label: 'PayPal', balance: 350 },
    { id: 'visa', label: 'Visa x3812' },
  ],
}
export const stores = [
  {
    id: '1',
    name: 'Fabuman.store',
    totalPrice: 328000,
    totalQuantity: 3,
    items: [
      {
        id: 'a1',
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
        name: 'Quần jean nam SUÔNG ống rộng form rộng lung cao RETRO',
        variation: 'Xanh khói nhạt, 27',
        price: 169000,
        quantity: 2,
      },
      {
        id: 'a2',
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
        name: 'Quần jean nam SUÔNG ống rộng lung cao RETRO',
        variation: 'Xanh nhạt Retro, 28',
        price: 159000,
        quantity: 1,
      },
    ],
  },
  {
    id: '2',
    name: 'Mint’s Closet',
    totalPrice: 386000,
    totalQuantity: 2,
    items: [
      {
        id: 'b1',
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
        name: 'Set Body Váy Hoa Nhi Phối Ren',
        variation: 'Kem Hoa BV7165B, 3–5kg',
        price: 180000,
        quantity: 1,
      },
      {
        id: 'b2',
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
        name: 'Set Đồ Liền Thân Body Yếm Ren',
        variation: 'Kem, 3–6kg',
        price: 206000,
        quantity: 1,
      },
    ],
  },
]
