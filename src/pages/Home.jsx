import Hero from '../components/home/Hero';
import OurStory from '../components/home/OurStory';
import Menu from '../components/home/Menu';
import ReservationForm from '../components/home/ReservationForm';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <OurStory />
      <Menu />
      <ReservationForm />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
