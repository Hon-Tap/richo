import Hero from "@/components/sections/hero/Hero";
import ImpactStrip from "@/components/sections/impact/ImpactStrip";
import StrategicPillars from "@/components/sections/programs/StrategicPillars";
import FeaturedPrograms from "@/components/sections/programs/FeaturedPrograms";
import OperationsMap from "@/components/sections/map/OperationsMap";
import SuccessStories from "@/components/sections/stories/SuccessStories";
import Partners from "@/components/sections/partners/Partners";
import LatestNews from "@/components/sections/news/LatestNews";
import CallToAction from "@/components/sections/cta/CallToAction";

export default function HomePage() {
return (
<> <Hero /> <ImpactStrip /> <StrategicPillars /> <FeaturedPrograms /> <OperationsMap /> <SuccessStories /> <Partners /> <LatestNews /> <CallToAction />
</>
);
}
