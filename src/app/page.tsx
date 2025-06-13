
import NavbarComponent from '@/components/navbar/NavbarComponents';
import HeaderComponent from './../components/header/HeaderComponents';
import HeroComponent from './../components/hero/HeroComponents';
import FeatureComponent from './../components/feature/FeatureComponents';
import FooterComponent from './../components/footer/FooterComponents';
import './globals.css'

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <HeroComponent />
      <FeatureComponent />
      <FooterComponent />
    </div>
  );
}