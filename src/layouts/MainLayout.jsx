import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
