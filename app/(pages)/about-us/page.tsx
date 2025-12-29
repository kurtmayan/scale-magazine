import { Inter, TiroDevanagariSanskrit } from "@/components/custom/Typography";

export default async function AboutUs() {
  return (
    <div className="w-full grid mb-24 ">
      <div className="h-6/12 bg-black/90 absolute w-full -z-10" />
      <TiroDevanagariSanskrit className="max-sm:text-xl sm:text-[40px] text-center max-sm:my-10 sm:mt-24 sm:mb-5 text-[#D9D9D9]">
        About Tatler Asia
      </TiroDevanagariSanskrit>
      <div className="bg-[#1E1E1E]/90 bg-opacity p-9 max-sm:w-90.75 sm:w-260.25 self-center mx-auto">
        <Inter className="max-sm:text-sm sm:text-[20px] font-light text-white text-center leading-[165%] max-sm:w-76 sm:w-231">
          SCALE Business Magazine is a media-tech platform dedicated to
          elevating the way business stories are told and consumed. With a
          mission to spotlight powerful narratives, industry-shaping ideas, and
          transformative innovations, we deliver content that not only informs
          but also aids professionals and organizations in moving forward with
          confidence and purpose.
        </Inter>
        <Inter className="max-sm:text-sm sm:text-[20px] font-light text-white text-center mt-9 leading-[165%] max-sm:w-76 sm:w-231">
          Through combining the power of digital media, data-driven insights,
          and modern storytelling, SCALE serves as an online business playbook
          built for leaders, innovators, and game-changers in the Philippine
          business landscape.
        </Inter>
      </div>
    </div>
  );
}
