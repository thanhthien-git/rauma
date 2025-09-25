import { IProductResponse, ITEM_STATUS } from '@/interfaces/products/IProduct'

export const mockApi: IProductResponse = {
  product: {
    id: 'prod_001',
    shopId: 'shop_123',
    slug: 'one-life-graphic-tshirt',
    shortDescription:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    name: 'ONE LIFE GRAPHIC T-SHIRT',
    brandId: 'brand_456',
    categoryIds: ['cat_tshirt', 'cat_men'],
    tags: ['tshirt', 'graphic', 'streetwear'],
    defaultSkuId: 'sku_001',
    variantTypes: [
      { id: 'color', name: 'Color', options: ['green', 'blue', 'black'] },
      { id: 'size', name: 'Size', options: ['S', 'M', 'L', 'XL'] },
    ],
    attributes: [
      { id: 'material', name: 'Material', value: '100% Cotton' },
      { id: 'fit', name: 'Fit', value: 'Regular' },
    ],
    media: [
      {
        id: 'img_2',
        url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800',
        isPrimary: true,
      },
    ],
    status: ITEM_STATUS.ACTIVE,
    createAt: new Date('2025-01-01T10:00:00Z'),
    updateAt: new Date('2025-02-01T10:00:00Z'),
  },
  details: [
    {
      label: 'Category',
      value: ['Beauty', 'Hair Care', 'Shampoo'],
      link: ['#', '#', '#'],
    },
    { label: 'Promotion Stock', value: 'IN STOCK' },
    { label: 'Remaining Quantity', value: 'IN STOCK' },
    { label: 'Shirt Style', value: 'Classic' },
    { label: 'Collar', value: 'Shirt Collar' },
    { label: 'Collar Type', value: 'Spread Collar' },
    { label: 'Tall Fit', value: 'No' },
    { label: 'Origin', value: 'Vietnam' },
    { label: 'Cuff Style', value: 'French Cuff' },
    { label: 'Custom Order', value: 'No' },
    { label: 'Pattern', value: 'Plain' },
    { label: 'Sleeve Length', value: 'Short Sleeve' },
    { label: 'Oversized', value: 'No' },
    { label: 'Occasion', value: 'Work' },
    { label: 'Material', value: 'KATE, SILK' },
    { label: 'Style', value: 'UNIFORM' },
    { label: 'Manufacturer Name', value: 'VUONG NAM ONLINE' },
    { label: 'Manufacturer Address', value: 'VUONG NAM ONLINE' },
    { label: 'Shipped From', value: 'Long An' },
  ],
  featuredProduct: [
    {
      id: '1',
      name: 'Wireless Headphones Pro',
      originPrice: 2500000,
      salePrice: 1990000,
      discountPercent: 20,
      imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
      sold: 320,
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Smart Watch Series 7',
      originPrice: 6000000,
      salePrice: 4790000,
      discountPercent: 20,
      imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
      sold: 540,
      rating: 4.7,
    },
    {
      id: '3',
      name: 'Minimal Sofa',
      originPrice: 12000000,
      salePrice: 8990000,
      discountPercent: 25,
      imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
      sold: 210,
      rating: 4.3,
    },
  ],
  skus: [
    {
      id: 'green-S',
      productId: 'prod_001',
      skuCode: 'TSHIRT-GREEN-S',
      optionValueIds: ['green', 'S'],
      price: 260,
      salePrice: 100,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 200,
      dimension: { l: 30, w: 20, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'green-M',
      productId: 'prod_001',
      skuCode: 'TSHIRT-GREEN-M',
      optionValueIds: ['green', 'M'],
      price: 270,
      salePrice: 110,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 210,
      dimension: { l: 31, w: 21, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'green-L',
      productId: 'prod_001',
      skuCode: 'TSHIRT-GREEN-L',
      optionValueIds: ['green', 'L'],
      price: 280,
      salePrice: 120,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 220,
      dimension: { l: 32, w: 22, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'green-XL',
      productId: 'prod_001',
      skuCode: 'TSHIRT-GREEN-XL',
      optionValueIds: ['green', 'XL'],
      price: 290,
      salePrice: 130,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 230,
      dimension: { l: 33, w: 23, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },

    {
      id: 'blue-S',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLUE-S',
      optionValueIds: ['blue', 'S'],
      price: 270,
      salePrice: 110,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 200,
      dimension: { l: 30, w: 20, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'blue-M',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLUE-M',
      optionValueIds: ['blue', 'M'],
      price: 280,
      salePrice: 120,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 210,
      dimension: { l: 31, w: 21, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'blue-L',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLUE-L',
      optionValueIds: ['blue', 'L'],
      price: 290,
      salePrice: 130,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 220,
      dimension: { l: 32, w: 22, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'blue-XL',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLUE-XL',
      optionValueIds: ['blue', 'XL'],
      price: 300,
      salePrice: 140,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 230,
      dimension: { l: 33, w: 23, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },

    {
      id: 'black-S',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLACK-S',
      optionValueIds: ['black', 'S'],
      price: 280,
      salePrice: 120,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 200,
      dimension: { l: 30, w: 20, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'black-M',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLACK-M',
      optionValueIds: ['black', 'M'],
      price: 290,
      salePrice: 130,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 210,
      dimension: { l: 31, w: 21, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'black-L',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLACK-L',
      optionValueIds: ['black', 'L'],
      price: 300,
      salePrice: 140,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 220,
      dimension: { l: 32, w: 22, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'black-XL',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLACK-XL',
      optionValueIds: ['black', 'XL'],
      price: 310,
      salePrice: 150,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 230,
      dimension: { l: 33, w: 23, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
  ],
  productDescriptionHTML: `
  <h2 class="text-xl font-bold mb-2">Welcome to Gman Shop</h2>
<p class="mb-4">
  Gman is honored to serve our valued customers. New products are updated daily.
  <strong>Remember to LIKE our products and FOLLOW the shop</strong> to receive discount codes,
  shocking deals, and huge promotions in your notifications.
</p>

<h3 class="text-lg font-semibold mt-4 mb-2">1. Product Introduction</h3>
<p class="mb-4">
  Men’s short-sleeve polo T-shirt, premium wrinkle-resistant fabric – a perfect choice for men in daily outfits. 
  With simple yet elegant design, this T-shirt brings a youthful, dynamic, and masculine style. 
  Whether combined with trousers or jeans for work, or paired with shorts for casual outings, 
  it always makes you stand out with comfort and style. 
  Its tailored fit helps highlight your body shape – a must-have item in every man’s wardrobe!
</p>

<h3 class="text-lg font-semibold mt-4 mb-2">2. Product Details</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
  <li>Colors: Black, White, Navy Blue, Light Gray, Dark Gray, Yellow, Red</li>
  <li>Material: Cotton, breathable & sweat-absorbent</li>
  <li>Soft fabric, no shrinkage, wrinkle-resistant, no pilling</li>
  <li>Delicate and meticulous stitching</li>
  <li>Design: Simple, easy to wear, easy to mix & match</li>
  <li>Korean slim-fit style for a youthful, elegant look</li>
  <li>Good quality with reasonable price</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2">3. Sales Policy</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
  <li>Commitment: Product quality and design are exactly as shown in pictures.</li>
  <li>Full refund if the product does not match the description.</li>
  <li>Exclusive vouchers or cashback for eligible orders.</li>
  <li>We always welcome feedback to improve our service quality.</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2">4. How to Order</h3>
<ul class="list-disc pl-6 mb-4 space-y-1">
  <li><strong>Step 1:</strong> Check our size chart. Please inbox us with your height & weight for the best size recommendation.</li>
  <li><strong>Step 2:</strong> To buy multiple products or sizes with free shipping, add each item to the cart first.</li>
  <li>Once your cart is ready, proceed to “Checkout”.</li>
  <li>Our shop is always available to consult via inbox.</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2">5. Size Guide</h3>
<p class="mb-2">
  (Size depends on height, weight, and body measurements such as chest, waist, shoulders, arms… 
  Please contact us directly for the most accurate advice.)
</p>
<ul class="list-disc pl-6 mb-4 space-y-1">
  <li>Size M: 45–51kg, height under 160cm</li>
  <li>Size L: 52–58kg, height under 165cm</li>
  <li>Size XL: 59–65kg, height under 170cm</li>
  <li>Size 2XL: 66–72kg, height under 175cm</li>
  <li>Size 3XL: 73–80kg, height under 185cm</li>
</ul>

<p class="mb-4">
  ✅ Available sizes: M, L, XL, 2XL, 3XL <br/>
  ✅ Wholesale & bulk orders accepted.
</p>
  <img 
    src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m0bh7j4u0wdpa8.webp" 
    alt="Áo thun unisex" 
    class="rounded-xl shadow-md mb-4"
  />
<p class="text-sm text-gray-600">
  Explore more products at: <a href="https://gman.vn" class="underline text-blue-600">gman.vn</a>
</p>

<p class="text-sm text-gray-500">
  #mensfashion #tshirt #polo #casualwear #streetstyle #unisexfashion
</p>

`,
  reviews: [
    {
      id: 1,
      name: 'Samantha D.',
      date: 'August 14, 2023',
      rating: 4.5,
      comment:
        'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.',
    },
    {
      id: 2,
      name: 'Alex M.',
      date: 'August 15, 2023',
      rating: 5,
      comment:
        'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
    },
    {
      id: 3,
      name: 'Ethan R.',
      date: 'August 16, 2023',
      rating: 4,
      comment:
        'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
    },
    {
      id: 4,
      name: 'Samantha D.',
      date: 'August 14, 2023',
      rating: 4.5,
      comment:
        'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.',
    },
    {
      id: 5,
      name: 'Alex M.',
      date: 'August 15, 2023',
      rating: 5,
      comment:
        'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
    },
    {
      id: 6,
      name: 'Ethan R.',
      date: 'August 16, 2023',
      rating: 4,
      comment:
        'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
    },
  ],
}
