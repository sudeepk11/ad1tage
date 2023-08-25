import SearchBox from "../components/Common/SearchBox";
import Banner from "../components/LandingPage/Banner";
import Services from "../components/LandingPage/Services";
import SixSteps from "../components/LandingPage/SixSteps";
import Categories from "./categories/page";

export default function Home() {
  return (
    <div>
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <Banner />
        <SearchBox searchClasses="-mt-[83px]" />
      </div>

      <Services title="Find Top Services Nearby" />
      <Categories />
      <SixSteps />
    </div>
  );
}
