'use client'
import Image from '../../customizes/image'

import parse, { domToReact, Element } from 'html-react-parser'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// fakeData.ts
export const productDescriptionHTML = `
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

`

export default function ProductDescription() {
  return (
    <Card className="border-0 shadow-none p-0">
      <CardHeader className="border-b flex items-center justify-between p-4 !pb-2 ">
        <CardTitle className="text-xl">PRODUCT DESCRIPTION</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          {parse(productDescriptionHTML, {
            replace: (domNode) => {
              if (domNode instanceof Element && domNode.name === 'img') {
                const { src, alt, class: className } = domNode.attribs
                return <Image url={src} alt={alt} className={className} />
              }
            },
          })}
        </div>
      </CardContent>
    </Card>
  )
}
