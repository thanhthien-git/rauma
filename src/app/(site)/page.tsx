import AnnouncementBar from '@/components/home/annoucement-bar'
import ClientCategorySection from '@/components/home/category-section'
import CustomerFeedback from '@/components/home/customer-feedback'
import ClientFlashsaleSection from '@/components/home/flash-sale-section'
import ClientHeroSection from '@/components/home/hero-section'
import ClientMarqueeTextSection from '@/components/home/marquee-text-section'
import ClientRecommendSection from '@/components/home/recommend-section'

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-between gap-8">
      <section>
        <ClientMarqueeTextSection />
      </section>
      <section className="w-full">
        <ClientHeroSection />
      </section>
      <section className="w-full">
        <ClientCategorySection />
      </section>
      <section className="w-full relative overflow-visible">
        <ClientFlashsaleSection />
      </section>
      <section className="w-full">
        <ClientRecommendSection />
      </section>
      <section className="w-full">
        <CustomerFeedback />
      </section>
    </div>
  )
}
