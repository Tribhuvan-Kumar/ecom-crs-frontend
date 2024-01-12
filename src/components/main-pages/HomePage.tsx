import HomePageCarouselPart from "../home-page-components/home-carousel-part";
import HomePageTrendingPart from "../home-page-components/home-trending-part";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <HomePageCarouselPart />
        <HomePageTrendingPart />
      </div>
    </>
  );
};

export default HomePage;
