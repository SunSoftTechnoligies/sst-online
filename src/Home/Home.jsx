// import React from 'react'
// import Navbar from '../navbar/Navbar'
// import Carousel from '../carousel/Carousel'
// import OurServices from '../components/OurServices'
// import DealCard from '../deal/DealCard'
// import OurCompany from '../Ourcompany/OurCompany'
// import EnquiryForm from '../enquiry/EnquiryForm'
// import Data from '../testimonial/Data'
// import Footer from '../footer/Footer'


// function Home() {
//   return (
//     <div>
//         <Carousel></Carousel>
//         <OurServices></OurServices>
//        <DealCard></DealCard>
//        <OurCompany></OurCompany>
//        <Data></Data>
//        <EnquiryForm />
//        <Footer></Footer>
//     </div>
//   )
// }

// export default Home



import React from 'react';
import Navbar from '../navbar/Navbar';
import Carousel from '../carousel/Carousel';
import OurServices from '../components/OurServices';
import DealCard from '../deal/DealCard';
import OurCompany from '../Ourcompany/OurCompany';
import Data from '../testimonial/Data';
import EnquiryForm from '../enquiry/EnquiryForm';
import Footer from '../footer/Footer';

function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      <div className="pt-16">
        <Carousel />
        <OurServices />
        <DealCard />
        <OurCompany />
        <Data />
        <EnquiryForm />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
