import logo from "../../assets/HorizontalLogo.png";
import visa from "../../assets/footerPayIcons/visa.png";
import mastercard from "../../assets/footerPayIcons/mastercard.png";
import discover from "../../assets/footerPayIcons/discover.png";
import applepay from "../../assets/footerPayIcons/applepay.png";
import { socialMediaLinks, footerInformation,footerDiscover } from "../../constants"

export default function Footer(){
    return(<>
    <div className=" overflow-hidden footer-top flex space-x-4 md:justify-evenly text-black bg-white p-8 pb-12 ">
        <div className="w-1/2 md:w-48  pr-2">
            <img className="w-32 my-8" src={logo}></img>
            <p className="hidden md:flex text-md font-bold max-w-48 text-justify ml-4 ">We think every Indian deserves the finest quality produce hence, we are India's Stori.</p>
            

            <div className="socialLogo grid grid-cols-4  md:flex md:flex-row justify-start gap-2 pl-1  py-4">
                {socialMediaLinks.map((social, index) => (
                    <a
                    key={index}
                    href={social.href}
                    className="flex text-customBrown items-center justify-center md:justify-start size-8 text-xl md:text-2xl px-4 rounded-sm  transform transition-transform duration-300 ease-in-out hover:scale-125"
                    >
                    <i className={social.iconClass}></i>
                    </a>
                ))}
            </div>
        </div>

        <div className="md:hidden w-1/2 pt-4"><h2 className={`overflow-hidden text-right text-xl  font-bold py-5 text-customBrown`}  >Quick Links</h2>
            <ul className="space-y-4 text-sm  font-bold text-right">
                {footerInformation.map((link, index) => (
                <li key={index}>
                <a href={link.href}>{link.name}</a>
                </li>
                ))}
            </ul>
        </div>
        

        <div className="hidden md:flex md:flex-col"><h2 className={`md:text-2xl overflow-hidden text-xl  font-bold py-5 text-customBrown`}  >Information</h2>
            <ul className="space-y-4 text-sm md:text-lg font-bold">
                {footerInformation.map((link, index) => (
                <li key={index}>
                <a href={link.href}>{link.name}</a>
                </li>
                ))}
            </ul>
        </div>

        <div className="hidden md:flex md:flex-col"><h2 className={`md:text-2xl  overflow-hidden text-xl  font-bold py-5  text-customBrown`}  >Discover</h2>
            <ul className="space-y-4 text-sm md:text-lg font-bold">
                {footerDiscover.map((link, index) => (
                <li key={index}>
                <a href={link.href}>{link.name}</a>
                </li>
                ))}
            </ul>
        </div>
        
        <div>
        <div className="hidden md:flex md:flex-col overflow-hidden w-64 space-y-4">
            <h2 className="text-xl pt-5 text-customBrown md:text-2xl font-bold"> Official Info</h2>
            <p className="text-sm md:text-lg font-bold ">Sector D, Pocket-6, Vasant Kunj, New Delhi, India 110070</p>
            <p className="text-sm md:text-lg font-bold ">+91-9289605017</p>
            <p className="text-sm md:text-lg font-bold ">indiestori2021@gmail.com​</p>
            
        </div>

        </div>

    </div>


    <div className="footer-bottom bg-customBlue w-full text-white flex justify-between items-center px-4 md:px-16 py-6">
        <h2 className="text-xs text-left w-1/3 sm:w-1/2  font-bold">© 2024 Indiestori Pvt Ltd. All rights reserved.</h2>
        <div className="space-x-2 flex items-center  sm:space-x-4 md:space-x-6 text-2xl">
            <p className="w-8"><img src={visa} alt="visa" className=" w-8"></img></p>
            <p className="w-8"><img src={mastercard} alt="mastercard" className="w-8"></img></p>
            <p className="w-8"><img src={discover} alt="discover" className="w-8"></img></p>
            <p className="w-8"><img src={applepay} alt="applepay" className="bg-white object-cover h-5 w-8"></img></p>
           </div>
    </div>
    </>)
}