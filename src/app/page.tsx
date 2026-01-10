import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Products from '@/components/sections/Products';
import Industries from '@/components/sections/Industries';
import TrustSignals from '@/components/sections/TrustSignals';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <Services />
      <Products />
      <Industries />
      <CTA />
    </>
  );
}
