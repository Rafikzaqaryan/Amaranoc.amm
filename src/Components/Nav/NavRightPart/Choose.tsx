import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

interface ChooseProps {
  setClickedChoose: (value: string) => void;
}

export default function Choose({ setClickedChoose }: ChooseProps) {
  const [active, setActive] = useState<string>();
  const options = [
    { label: "Առանձնատներ", value: "Առանձնատներ", img: "home.svg" },
    { label: "Frame houses", value: "Frame houses", img: "frame_house.svg" },
    { label: "Տնակներ", value: "Տնակներ", img: "cabins.svg" },
    { label: "Փակ լողավազան", value: "Փակ լողավազան", img: "close_pool.svg" },
    {
      label: "Աղմուկից հեռու",
      value: "Աղմուկից հեռու",
      img: "far_from_noise.svg",
    },
    { label: "Շքեղ տեսարան", value: "Շքեղ տեսարան", img: "view.svg" },
    { label: "Պահանջված", value: "Պահանջված", img: "nobel.svg" },
    { label: "Լճի ափին", value: "Լճի ափին", img: "along_lake.svg" },
  ];

  let settings = {
    dots: true,
    infinite: true,

    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,

    pauseOnHover: true,
  };

  return (
    <div className="flex gap-3 px-4 sm:px-6 lg:px-8">
      <div className="h-[50px] w-[1000px] m-auto">
        <Slider {...settings}>
          {options.map(({ label, value, img }) => (
            <div
              key={value}
              onClick={() => {
                setClickedChoose(value);
                setActive(value);
              }}
              className={`cursor-pointer border-b-1 transition-all duration-300 ${
                active === value
                  ? "border-orange-500"
                  : "border-transparent hover:border-gray-200 "
              }`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={`https://api.amaranoc.am/${img}`}
                  alt={label}
                  className="w-[40px] h-[40px]"
                />
                <p className="text-[14px]">{label}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
