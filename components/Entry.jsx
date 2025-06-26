import { FaLocationDot } from "react-icons/fa6";

export default function Entry() {
  return (
    <>
      <div className="max-w-[470px] mx-auto">
        <div className="flex gap-x-[1.2rem] items-center">
          <img src="../images/fuji.png" alt="Mountain Fuji" />
          <div className="py-[1rem]">
            <div>
              <div className="flex items-center gap-1">
                <FaLocationDot color="#F55A5A" />
                {/* icon1  color:#F55A5A*/}
                <div className="mr-3 text-xs uppercase tracking-widest">
                  Japan
                </div>
                <a
                  className="underline text-xs text-gray-500"
                  href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                >
                  View on Google Maps
                </a>
              </div>
              <h2 className="text-2xl font-bold mb-[1rem] mt-[.3rem]">
                Mount Fuji
              </h2>
              <p className="text-xs font-bold">12 Jan, 2023 - 24 Jan, 2023</p>
              <p className="text-xs mt-[.4rem]">
                Mount Fuji is the tallest mountain in Japan, standing at 3,776
                meters (12,380 feet). Mount Fuji is the single most popular
                tourist site in Japan, for both Japanese and foreign tourists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
