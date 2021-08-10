import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/about.js</code>
        </p>
        <div className="" style={{width:200, height:200}}>
          <img src="/images/cc.png" alt="ddd" style={{width:"100%"}} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
