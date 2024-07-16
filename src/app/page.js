import Image from "next/image";
import Phone from "../../public/assets/svg/phone.svg";
import BannerImg from '../../public/assets/images/Home-3.jpg';
import BannerImg2 from '../../public/assets/images/Home-2-1.jpg';
import ReverieSchool from '../../public/assets/images/Reverie-School-Students.jpg';
import { historyData } from "@/data/historyData";

export default function Home() {
  return (
    <main>
      {/* banner */}
      <section className="h-screen bg-banner w-full pt-44">
        <div className="max-w-[1200px] mx-auto relative flex gap-10">
          {/* left side content */}
          <div className="md:w-1/2">
            <h6 className="tracking-[2px] leading-4 text-[#2f3c4c] text-sm font-medium">Learn. Play. Explore</h6>
            <h1 className="text-blue-500 text-[64px] font-semibold tracking-[-1px] leading-[1.1em] mt-5">A safe and joyful place for your lovely children</h1>
            <p className="text-[#566476] mt-5">Assalamu Alaikum! Welcome to Reverie School, where academic excellence meets moral values. Located at Bashundhara Residential Area in Dhaka, our English medium institution offers a holistic education, nurturing students to thrive academically and spiritually. Join us for a journey of learning and enlightenment.</p>

            <div className="border-b pb-10 mt-5">
              <button className="border border-[#2f3c4c] bg-[#2f3c4c] py-5 px-10 rounded-[30px] text-white">
                Enroll your kid
              </button>
            </div>

            <div className="flex justify-between items-center max-w-[300px] mt-10">
              <div className="bg-blue-500 rounded-full p-3">
                <Image src={Phone} alt="" width={40} height={40} />
              </div>
              <h5 className="text-xl font-semibold">
                <span>
                  (+880) 1894-940800					</span>
              </h5>
            </div>
          </div>

          {/* right image */}
          <div className="md:w-1/2">
            <div className="relative">
              <Image src={BannerImg} alt="" className="rounded-3xl" />
              <div className="absolute top-1/2 left-1/2">
                <Image src={BannerImg2} alt="" className="rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about us */}
      <section className="h-full w-full pt-44">
        <div className="max-w-[1200px] mx-auto relative flex gap-20">
          {/* left image */}
          <div className="md:w-1/2">
            <Image src={ReverieSchool} alt="" className="rounded-3xl" />
          </div>

          {/* right side content */}
          <div className="md:w-1/2">
            <h6 className="tracking-[2px] leading-4 text-[#2f3c4c] text-sm font-medium">About us</h6>
            <h1 className="text-blue-500 text-6xl font-semibold tracking-[-1px] leading-[1.1em] mt-5">Reverie School is admitting students from Playgroup to Grade 7</h1>
            <p className="text-[#566476] mt-5">Reverie School follows the Pearson Edexcel curriculum and intends to deliver excellent educational programs in the following Key Learning Areas: English, Mathematics, Science, Technology, Global Citizenship, Creative Arts, Personal Development, Health and Physical Education as well as lessons in Quran, Islamic Studies and Arabic Language classes.</p>

            <p className="text-[#566476] mt-5">Here at Reverie School, we aim to help our precious children to think and act in ways that are truly inspiring.</p>

            <div className="border-b pb-10 mt-5">
              <button className="border border-[#2f3c4c] hover:bg-[#2f3c4c] py-5 px-10 rounded-[30px] text-[#2f3c4c] hover:text-white font-bold">
                Know more about us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* history of school */}
      <section className="h-full w-full py-32 history-bg relative">
        <div className="bg-[#252D65] opacity-70 transition-all absolute w-full h-full top-0"></div>
        <div className="max-w-[1200px] mx-auto relative">
          <div>
            <h2 className="text-blue-500 font-semibold">ABOUT US</h2>
            <h2 className="text-white text-3xl font-medium">History of our school</h2>
            <div className="mt-2">
              <div className="max-w-14 flex">
                <div className="w-8 h-1 bg-orange-400"></div>
                <div className="w-8 h-1 bg-white"></div>
              </div>
            </div>
          </div>
          <div className="text-white mt-8">
            <strong>The Averroes International School</strong> is recognized by the Bangladesh Ministry of Education and authorized by British Council and Edexcel as an English medium educational institution for both Primary and Secondary Sections. The school established in 2015 is situated at Lalmatia, Mohammadpur in Dhaka. The School, surrounded by peaceful environment, which gives pleasures to children, offers education from Play to A Level.
            <a className="text-white" href="#"><span className="underline">Read more</span></a>
          </div>

          <div className="flex justify-between py-10">
            {historyData.map((item, index) => {
              return <div key={index}>
                <Image src={item.icon} alt="" width={70} height={70} />
                <h1 className="text-blue-500 text-[40px] font-semibold">{item.value}</h1>
                <div className="text-white">{item.text}</div>
              </div>
            })}
          </div>
        </div>
      </section>
      <div className="-mt-10 relative z-10 mb-10">
        <div className="max-w-[1200px] mx-auto flex justify-between p-8 bg-blue-500">
          <h1 className="text-[27px] text-white font-medium">Start your Beautiful & Bright Future From Here</h1>
          <button className="uppercase text-white rounded-3xl bg-[#252D65] py-3 px-6">Apply Now</button>
        </div>
      </div>
    </main>
  );
}
