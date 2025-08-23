import ClientCategorySection from "@/components/home/category-section";
import ClientFlashsaleSection from "@/components/home/flash-sale-section";
import ClientRecommendSection from "@/components/home/recommend-section";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-between gap-8">
      <section className="w-full">
        <ClientCategorySection />
      </section>
      <section className="w-full relative overflow-visible">
        <ClientFlashsaleSection />
      </section>
      <section className="w-full">
        <ClientRecommendSection />
      </section>
    </div>
  );
}
