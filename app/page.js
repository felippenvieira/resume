import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import {
  Academic,
  Experience,
  Header,
  MainFrame,
  Footer,
} from '@/components/components';

export default function Home() {
  return (
    <main>
      <Header />
      <MainFrame />
      <Experience />
      <Academic />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
