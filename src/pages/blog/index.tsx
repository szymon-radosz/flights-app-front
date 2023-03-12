import BlogPosts from '../../../components/BlogPosts';
import Layout from '../../../components/Layout/Layout';
import SeoHead from '../../../components/SeoHead';

export default function Blog() {
  return (
    <>
      <SeoHead title='Blog' />
      <Layout>
        <div className='mx-auto mt-28 max-w-screen-xl py-12 px-6 pt-5 xl:px-16'>
          <BlogPosts location='Blog' />
        </div>
      </Layout>
    </>
  );
}
