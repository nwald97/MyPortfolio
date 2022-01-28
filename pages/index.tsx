import Experience from "../components/experience";
import ProfileHero from "../components/profile";
import PopularPosts from "../components/popularposts";
import FAQ from "../components/faq"
import Layout from "../components/layout";


export default function IndexPage() {
    return (
     <Layout>
        <ProfileHero />
        <PopularPosts />
        <Experience />
        <FAQ />
     </Layout>
    )
  }
