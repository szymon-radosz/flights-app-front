import BlogPosts from './../../components/BlogPosts';
import ListGrid from './../../components/ListGrid';
import Feature from '../../components/Feature';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import SeoHead from '../../components/SeoHead';

export default function Home() {
  return (
    <>
      <SeoHead title='Strona Główna' />
      <Layout>
        <Hero />
        <Feature />
        <div className='mx-auto max-w-screen-xl px-6 pt-5 xl:px-16'>
          <ListGrid isHomePage={true} location='Home' />
        </div>
        <div id='blog'></div>
        <div className='mx-auto max-w-screen-xl px-6 pt-5 xl:px-16'>
          <BlogPosts isHomePage={true} location='Home' />
        </div>
        {/* <Pricing /> */}
      </Layout>
    </>
  );
}
