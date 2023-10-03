
import { FaGoogle, FaGithubSquare, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithubSquare className="text-xl"></FaGithubSquare>
                    Login Github
                </button>
            </div>
            <div>
                <div className="p-4 mb-6">
                    <h2 className="text-3xl mb-4">Find Us On</h2>
                    <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                        <FaFacebook className="mr-3"></FaFacebook>
                        <span>Facebook</span>
                    </a>
                    <a className="p-4 flex text-lg items-center border-x" href="">
                        <FaTwitter className="mr-3"></FaTwitter>
                        <span>Twitter</span>
                    </a>
                    <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                        <FaInstagram className="mr-3"></FaInstagram>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
            {/* Qa zone */}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;