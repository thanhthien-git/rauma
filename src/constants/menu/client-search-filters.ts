export const filters = {
  shipFrom: {
    title: 'Shipped From',
    options: [
      { label: 'Ho Chi Minh City', value: 'tp_hcm' },
      { label: 'Hanoi', value: 'ha_noi' },
      { label: 'District 1', value: 'quan_1' },
      { label: 'District 3', value: 'quan_3' },
      { label: 'District 4', value: 'quan_4' },
      { label: 'District 5', value: 'quan_5' },
      { label: 'District 7', value: 'quan_7' },
    ],
  },
  shipOption: {
    title: 'Shipping Option',
    options: [
      { label: 'Self Collection Point', value: 'self_collection_point' },
      { label: 'Next Day Delivery', value: 'next_day_delivery' },
      { label: 'Express Delivery (International)', value: 'express_delivery_international' },
      { label: 'Same Day Delivery', value: 'same_day_delivery' },
      { label: 'More', value: 'more_shipping_option' },
    ],
  },
  shipType: {
    title: 'Shop Type',
    options: [
      { label: 'Shopee Mall', value: 'shopee_mall' },
      { label: 'Supermarket', value: 'supermarket' },
      { label: 'Fulfilled by Shopee', value: 'fulfilled_by_shopee' },
      { label: 'Shopee Preferred', value: 'shopee_preferred' },
    ],
  },
  condition: {
    title: 'Condition',
    options: [
      { label: 'Used', value: 'used' },
      { label: 'New', value: 'new' },
    ],
  },
  payment: {
    title: 'Payment Options',
    options: [{ label: '0% Installment', value: 'installment_0' }],
  },
  rating: {
    title: 'Rating',
    options: [{ label: 5 }, { label: 4 }, { label: 3 }, { label: 2 }, { label: 1 }],
  },
  promotion: {
    title: 'Service & Promotion',
    options: [
      { label: 'On Sale', value: 'on_sale' },
      { label: 'Ready Stock', value: 'ready_stock' },
      { label: 'Wholesale Price', value: 'wholesale' },
      { label: 'Best Price', value: 'best_price' },
    ],
  },
}
