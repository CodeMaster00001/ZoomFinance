import chairMan from "../images/chair_man.png"
import aboutUsVisual from "../images/aboutUsVisual.png"

function AboutUs() {
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-2 lg:flex-row justify-between mt-20 lg:px-20 px-3">
        <div data-aos="fade-right" className="w-full lg:w-[55%] text-wrap flex flex-col gap-5 overflow-y-scroll lg:overflow-hidden">
          <h1 className="font-semibold text-[30px]">About Us</h1>
          <p className="text-justify text-gray-500 ">
            {" "}
            Welcome to zoom finance, your trusted partner in financialsolutions.
            At zoom finance, we understand that financial needsvary and that
            timely access to funds can make all the difference.Whether you're
            looking to finance a new home, consolidate debts,or fund a personal
            project, we're here to help you navigate yourfinancial journey. With
            10+ years of experience in the industry,we have established
            ourselves as a reliable source for competitiveloan options tailored
            to meet your specific needs. Our commitmentto transparency,
            integrity, and customer satisfaction sets usapart. We prioritize
            your financial well-being and strive toprovide clear,
            straightforward information to help you makeinformed decisions.
          </p>
        </div>
        <div data-aos="fade-left" className="w-full lg:w-[45%] overflow-hidden">
          <img className="h-96" src={aboutUsVisual} alt="" />
        </div>
      </div>
      <br />
      {/* Why Choose Zoom Finance */}
      <div class="bg-image py-12 px-3 lg:px-20 text-gray-200">
        <div class="container mx-auto text-justify content">
          <strong class="text-white text-2xl">Why choose Zoom Finance?</strong>
          <p data-aos="zoom-in" class="py-2">
            Personalized Solutions: We offer a range of loan products designed
            to suit diverse financial requirements. Expert Guidance: Our team of
            financial experts is dedicated to assisting you at every step of the
            loan process. Commitment to Service: We prioritize customer service
            excellence, ensuring a seamless experience from application to
            approval. At Zoom Finance, we believe in empowering individuals and
            businesses with the financial resources they need to achieve their
            goals. Whether you're a first-time borrower or a seasoned investor,
            we are here to support you on your path to financial success.
            Explore our website to discover how Zoom Finance can help you
            achieve your financial aspirations. Feel free to reach out to our
            knowledgeable team with any questions or to begin your loan
            application today.
          </p>
        </div>
      </div>
      
      {/* Our Leaders */}
      <div className="container px-3 my-10  lg:px-20 overflow-hidden">
        <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
          <div data-aos="fade-right" className="w-full lg:w-[75%]">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Our Leaders
            </h2>
            <h3 className="text-xl font-semibold text-gray-600 mb-4 ">
              RAJEEV CHOUHAN - CHAIRMAN
            </h3>
            <p className="text-gray-700 mb-4">
              Rajiv Chauhan has been leading our company with a vision to
              innovate and excel. Under his guidance, we have achieved numerous
              milestones and continue to strive for excellence in our field.
            </p>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Vision</h4>
            <p className="text-gray-700">
              At Zoom finance, our vision is to redefine the lending experience
              by fostering financial empowerment and enabling individuals and
              businesses to thrive. We envision a future where accessing
              affordable and flexible financing solutions is effortless,
              empowering our customers to pursue their dreams and achieve their
              financial goals. By leveraging innovative technologies and a
              customer-centric approach, we aim to set new standards in the
              lending industry, creating lasting value for our clients,
              partners, and communities we serve.
            </p>
            <h4 className="text-lg font-semibold text-gray-700 mt-2">CEO</h4>
            <p className="text-gray-700">KHILESH JHARIYA</p>
            <h4 className="text-lg font-semibold text-gray-700 mt-2">MD</h4>
            <p className="text-gray-700">POOJA KHANDELWAL</p>
          </div>
          <div data-aos="fade-left" className="w-full lg:w-[35%] flex flex-col gap-3 overflofade-left">
            <div className=" rounded-full border-2 border-blue-200 shadow-lg object-cover object-center ">
              <img
                src={chairMan}
                alt="Chairman"
                className="w-full h-96 object-cover object-center "
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-4 text-center">
              RAJEEV CHOUHAN
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
