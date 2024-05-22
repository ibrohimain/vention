import React from "react";
import Marquee from "react-fast-marquee";
import worker from "../../../public/worker.jpeg";
import HorizontalAccordion from "./HorizontalAccor";
import cola from '../../assets/cola.svg';
import deal from '../../assets/dealcoul.svg';
import grubhub from '../../assets/grubhub.svg';
import paypay from '../../assets/paypay.svg';
import seatget from '../../assets/seatgek.svg';
import slice from '../../assets/slice.svg';
import thirty from '../../assets/thirty.svg';


const Section1 = () => {
  return (
    <div className="  border-t border-t-[#434345] w-full flex flex-col items-end justify-center">
      <div className="w-[90%] flex px-5 pt-32 pb-10  border-l border-[#434345] flex-col gap-5">
        <h3 className="text-white text-[32px]">
          With 20+ years of providing software development services for
          technological enterprises, successful startups, and AI-empowered
          companies worldwide, our developers demonstrate exceptional efficiency
          and expertise.
        </h3>
        <p className="text-white text-right">
          On average, Vention clients benefit £475k from annual savings as a
          result of <br /> our collaboration.
        </p>
      </div>
      <div className="w-[90%] px-5 pr-10 py-5 flex border-t border-l border-[#434345] flex-col">
        <div className="flex items-start justify-between">
          <h2 className="text-[24px] text-[#ff6947]">Key stats</h2>
          <div className="flex gap-32">
            <div>
              <h1 className="text-[#ff6947] text-[68px]">500+</h1>
              <p className="text-white text-[18px]">award-winning clients</p>
            </div>
            <div>
              <h1 className="text-[#ff6947] text-[68px]">$15B+</h1>
              <p className="text-white text-[18px]">in client acquisitions</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-24">
          {[
            { stat: "36", label: "month average engagement" },
            { stat: "20+", label: "client IPOs supported" },
            { stat: "20+", label: "years of experience" },
            { stat: "3K+", label: "world-class engineers" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <h1 className="text-[#ff6947] text-[68px]">{stat}</h1>
              <p className="text-white text-[18px]">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] px-5 pr-10 py-5 pt-32 flex border-t border-l border-[#434345] flex-col">
        <h3 className="text-white text-[40px]">Trusted by the best</h3>
        <p className="text-white text-[16px]">
          Companies ranging from early-stage startups to Fortune 500 enterprises
          partner with us to develop game-changing growth solutions.
        </p>
      </div>
      <div className="w-[90%] -z-10 px-5 pr-10 py-10   flex border-t border-l border-[#434345] flex-col">
        <Marquee>
          <div className="mx-[60px] text-white text-[40px]"><img src={cola} alt="" className="w-[100px]"/></div>
          <div className="mx-[60px] text-white text-[40px]"><img src={deal} alt="" className="w-[100px]"/></div>
          <div className="mx-[60px] text-white text-[40px]"><img src={grubhub} alt="" className="w-[100px]"/></div>
          <div className="mx-[60px] text-white text-[40px]"><img src={paypay} alt="" className="w-[100px]"/></div>
          <div className="mx-[60px] text-white text-[40px]"><img src={seatget} alt="" className="w-[100px]"/></div>
          <div className="mx-[60px] text-white text-[40px]"><img src={slice} alt="" className="w-[100px]"/></div>
          <div className="mx-[60px] text-white text-[40px]"><img src={thirty} alt="" className="w-[100px]"/></div>
          
        </Marquee>
      </div>
      <div className="w-[90%] flex border border-[#434345]">
        <div className="flex w-[45%] h-[400px] object-fit">
          <img src={worker} alt="" />
        </div>
        <div className="flex items-end justify-start">
          <h2 className="pl-8 pb-4 text-white text-[80px]">How we work</h2>
        </div>
      </div>
      <HorizontalAccordion />
    </div>
  );
};

export default Section1;
