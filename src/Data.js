import { FaAngular,FaGitSquare, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiTypescript,SiMysql ,SiMongodb,SiFirebase , SiGmail} from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/CHRIS2 (1).jpg"

import work1 from "./assets/Capture d’écran (143).png";
import work2 from "./assets/Capture d’écran (144).png";
import work3 from "./assets/Capture d’écran (146).png";
import work4 from "./assets/Capture d’écran (156).png";
import work5 from "./assets/Capture d’écran (155).png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "stacks", "portfolio", "contact"]

export const socialIcons = [
  
  <FaInstagram />,
  <FaLinkedin />,
  
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Abeezarar"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+959883271929"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "abee02@gmail.com"
  }
]

export const icons = [<FaAngular />, <SiMysql />,< FaGitSquare/>, <SiMongodb />, <SiTypescript />, <SiFirebase/>, <DiNodejs />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    company: "shop.com.mm"
  },
  {
    di: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "shop.com.mm"
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    company: "shop.com.mm"
  }
]
export const finishes = [
  {
    id: 1,
    number: '6+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "669+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "Angular",
    linkTo:"https://front-lemontri.vercel.app/",
    gitLink:"https://github.com/christAgu/flix-built"
    
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "Wordpress",
    linkTo:"https://driverpleez.com/",
    gitLink:"https://github.com/christAgu/flix-built"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "Wordpress",
    linkTo:"https://aadf-f9557.web.app/Nos-missions",
    gitLink:"https://github.com/christAgu/flix-built"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'Angular',
    linkTo:"https://flix-built-1.vercel.app/",
    gitLink:"https://github.com/christAgu/flix-built"
  },
  
]


export const workNavs = [
  "portfolio", "Angular", "Wordpress"
]


export const contacts = [
 
  {
    id: 2,
    icon: <SiGmail />,
    infoText: "ague26oth@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "06 19 29 74 55"
  }


  
]
