import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-dilobo-dark">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
