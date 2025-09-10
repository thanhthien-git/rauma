'use client'

import Marquee from 'react-fast-marquee'

const ClientMarqueeTextSection = () => {
  const messagesData = ['28 day returns', 'free shipping $99 +', 'buy now pay later']

  return (
    <Marquee autoFill className="bg-black text-white h-[70px] font-semibold text-lg">
      {messagesData.map((text, idx) => (
        <span key={`${text}-${idx}`} className="mr-8">
          {text}
        </span>
      ))}
    </Marquee>
  )
}

export default ClientMarqueeTextSection
