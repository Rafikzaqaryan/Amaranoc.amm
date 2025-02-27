import { useNavigate } from "react-router-dom";
import { useFilter } from "../FilterContext";
import { CiHeart } from "react-icons/ci";

export default function Search() {
  const { searchQuery, setSearchQuery } = useFilter();

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLikedClick = () => {
    navigate("/liked");
  };

  return (
    <div className="flex gap-2 items-center">
      <img
        src="https://amaranoc.am/images/header/globus.svg"
        className="w-5 h-5"
        alt="Globe"
      />

      <img
        onClick={handleLoginClick}
        src="https://amaranoc.am/images/header/user.svg"
        className="w-10 h-10"
        alt="User"
      />

      <div onClick={handleLikedClick} className="cursor-pointer w-5 h-5 ">
        <CiHeart />
      </div>

      <div className="md:block hidden">
        <div className="md:block hidden">
          <div className="flex items-center w-[240px] h-[45px] border border-gray-300 rounded-[40px] px-3 py-2">
            <input
              type="text"
              placeholder="Որոնում"
              className="flex-grow outline-none text-[#dcdddf] bg-inherit "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img
              src="https://amaranoc.am/images/header/search.svg"
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
