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
    </main>
  );
}
