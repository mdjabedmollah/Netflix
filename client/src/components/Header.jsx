import axios from "axios";

import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";

import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const navigator = useNavigate();
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();
  const logoutHendler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      dispatch(setUser(null));
      if(res.data.success){
        toast.success(res.data.message)
      }
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute z-10 flex w-full px-6 items-center justify-between bg-gradient-to-b from-black ">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown size="24px" className="text-amber-50" />
          <h1 className="text-lg text-amber-50">{user.fullname}</h1>
          <div className="ml-4">
            <button
              onClick={logoutHendler}
              className="bg-red-800 text-white px-4 py-2"
            >
              Logout
            </button>
            <button className="bg-red-800 text-white px-4 py-2 ml-4">
              Search Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
