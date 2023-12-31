import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { profileimg, profilebg } from "../assets";
import { ChangeProfilePopup, Footer, Navbar } from "../components";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [popup, setPopup] = useState(false);

  const togglePopup = (e) => {
    e.preventDefault();

    setPopup(!popup);
  };

  const handleOrderHistory = (e) => {
    e.preventDefault();

    navigate("/order-history")
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await userService.getProfile();
        setProfile(profileData);
      } catch (error) {
        console.error("Error fetching profile information:", error);
      }
    };
    fetchProfile();
    toast.success("Fetching Profile Success");
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />
      <Toaster richColors/>

      <ChangeProfilePopup Popup={popup} togglePopup={togglePopup} />

      <div className="flex flex-col bg-primary items-center">
        <div className="xl:max-w-[1440px] w-full">
          <div className="flex flex-col mt-16 mx-20">
            <img
              src={profilebg}
              alt=""
              className="w-full h-[18rem] rounded-xl"
            />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row ml-10">
                <img
                  src={profileimg}
                  alt=""
                  className="w-60 h-60 object-cover object-center rounded-[100%] relative bottom-[7.5rem]"
                />
                <div className="text-secondary text-[3rem] mt-4 ml-8">
                  {profile.nama}
                </div>
              </div>
              <div className="flex flex-col mt-10 mr-10 gap-7">
                <button
                  onClick={togglePopup}
                  className="w-56 bg-secondary text-white py-2 text-xl rounded-md"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleOrderHistory}
                  className="w-56 bg-secondary text-white py-2 text-xl rounded-md"
                >
                  Order History
                </button>
              </div>
            </div>

            {/* General */}
            <div className="flex flex-col items-center gap-6 mt-2 mb-32 w-[80%]">
              <div className="flex flex-row w-full items-center gap-5">
                <div className="flex text-[2.25rem]">General</div>
                <div className="flex flex-1 bg-black h-1"></div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-[1.5rem]">Nama</p>
                <div className="w-full py-5 px-6 bg-secondary text-white text-[1.5rem] rounded-xl">
                  {profile.nama}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col w-[40%]">
                    <p className="text-[1.5rem]">No Telepon</p>
                    <div className="w-full py-5 px-6 bg-secondary text-white text-[1.5rem] rounded-xl">
                      {profile.noTelp}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-[1.5rem]">Email</p>
                <div className="w-full py-5 px-6 bg-secondary text-white text-[1.5rem] rounded-xl">
                  {profile.email}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-[1.5rem]">Alamat</p>
                <div className="w-full py-5 px-6 bg-secondary text-white text-[1.5rem] rounded-xl">
                  {profile.alamat}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
