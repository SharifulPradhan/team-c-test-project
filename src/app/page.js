import Image from "next/image";
import Phone from "../../public/assets/svg/phone.svg";
import BannerImg from '../../public/assets/images/Home-3.jpg'
import BannerImg2 from '../../public/assets/images/Home-2-1.jpg'

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      {/* banner */}
      <section className="bg-banner h-full w-full pt-44">
        <div className="max-w-[1200px] mx-auto relative flex">
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
              <Image src={BannerImg} alt="" className="rounded-3xl"/>
              <div className="absolute top-1/2 left-1/2">
                <Image src={BannerImg2} alt="" className="rounded-3xl"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>

      </section>
    </main>
  );
}
