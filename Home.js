import React from 'react';
import Header from './Header';
import CarouselComponent from './CarouselComponent';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <CarouselComponent />
      <div className="content">
        <p>SIPIS is a CD-ROM (published by the French Institute of Pondicherry) that includes a database along with a mapping software. It is a user-friendly population and infrastructure database of villages and towns in South India which can be easily visualized through maps. With the help of SIPIS, we can explore the region at different scales of analysis (districts, taluks, villages, towns). We can also consult and map out data of your choice, as well as save and print maps. Available data include population and other socio-economic statistics, health and education infrastructures, communication and transportation facilities, as well as maps of land use, elevation or irrigation.
          We've embarked on a mission to modernize the SIPIS software, ensuring seamless compatibility with contemporary web platforms. Our goal is to empower users with an enriched experience, effortlessly accessing and analyzing the latest census data from 2001 and 2011. By seamlessly integrating with modern websites, we aim to provide a user-friendly interface that facilitates exploration and mapping of South India's socio-economic landscape at various scales. This updated software will not only retain the user-friendly features of the original SIPIS but also offer enhanced functionalities, enabling users to glean valuable insights and make informed decisions based on the most up-to-date data available.
        </p>
        <p>Our endeavor is to revamp the SIPIS software, aligning it with contemporary web standards for seamless integration. Our objective is to offer users an enhanced experience, effortlessly accessing and analyzing the latest census data from 2001 and 2011 while exploring South India's socio-economic landscape. By integrating with modern websites, we aim to provide an intuitive interface that facilitates exploration and mapping at various scales. This upgraded software will not only preserve the user-friendly features of the original SIPIS but also introduce advanced functionalities, empowering users to extract valuable insights and make informed decisions based on the freshest data available.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
