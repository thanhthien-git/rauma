'use client'

import Marquee from 'react-fast-marquee'

const ClientMarqueeTextSection = () => {
  const messagesData = ['28 day returns', 'free shipping $99 +', 'buy now pay later']

  return (
    <div className="relative w-full overflow-hidden">
      <Marquee
        autoFill
        className="
          bg-black text-white 
          h-[40px] text-xs            
          md:h-[70px] md:text-lg      
          font-semibold
        "
      >
        {messagesData.map((text, idx) => (
          <span key={`${text}-${idx}`} className="mr-8 whitespace-nowrap">
            {text}
          </span>
        ))}
      </Marquee>
    </div>
  )
}

export default ClientMarqueeTextSection
