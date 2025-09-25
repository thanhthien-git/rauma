'use client'
import Image from '../../customizes/image'

import parse, { domToReact, Element } from 'html-react-parser'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProductDescription({
  productDescriptionHTML,
}: {
  productDescriptionHTML: string
}) {
  return (
    <Card className=" border-0 shadow-none p-0">
      <CardHeader className="hidden md:flex border-b items-center justify-between p-4 !pb-2 ">
        <CardTitle className=" text-xl">PRODUCT DESCRIPTION</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
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
