import { useEffect } from "react";

interface HomeCourselProps {
  eachCarousel: {
    id: string;
    imgUrl: string;
  };
}

const HomeCoursel = ({ eachCarousel }: HomeCourselProps) => {
  const { id, imgUrl } = eachCarousel;

  const identifyId = () => {
    const paragraph = document.getElementById(`p${id}`);

    if (paragraph) {
      paragraph.classList.add("underline");
    }
  };

  useEffect(() => {
    identifyId();
  }, []);

  return (
    <>
      <div className="overflow-hidden px-4 py-4 h-60 rounded-lg sm:px-10 sm:h-full relative">
        <img
          src={imgUrl}
          className="object-cover object-top w-full h-[22rem] scale-110"
          alt=" "
        />
        <div className="hidden w-full -mx-10 absolute bottom-0 bg-black text-white dark:bg-white dark:text-black sm:flex items-center justify-evenly font-medium">
          <p id="p1">Women Deal</p>
          <p id="p2">Winter Deal</p>
          <p id="p3">Earphone Deal</p>
          <p id="p4">TV Deal</p>
          <p id="p5">Promo</p>
          <p id="p6">Household Deal</p>
        </div>
      </div>
    </>
  );
};

export default HomeCoursel;
