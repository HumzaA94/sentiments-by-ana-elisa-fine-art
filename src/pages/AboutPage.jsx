import Nav from '../components/Nav';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="about-page">
        <About />
      </main>
      <Footer />
    </>
  );
}
