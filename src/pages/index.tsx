import Cases from '@/components/Cases';
import Footer from '@/components/Footer';
import Introduce from '@/components/Introduce';
import Layout from '@/components/layout';
import Nav from '@/components/Nav';
import Partner from '@/components/Partner';
import Service from '@/components/Service';

export default (props: any) => {
  return (
    <Layout {...props}>
      <main className="w-screen">
        <Nav />
        <Introduce />
        <Service />
        <Partner />
        <Cases />
        <Footer />
      </main>
    </Layout>
  );
};
