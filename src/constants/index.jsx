import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import ImmunityBooster from "../assets/ImmunityBooster.png";
import SugarReplacement from "../assets/SugarReplacement.png";
import SaltRevolution from "../assets/SaltRevolution.png";
import fiftyclients from "../assets/fiftyclients.png";
import fiftyfarmers from "../assets/fiftyfarmers.png";
import customersNumbers from "../assets/customersNumbers.png";
import Produce from "../assets/Produce.png";
import Preserve from "../assets/Preserve.png";
import Protect from "../assets/Protect.png";
import Promote from "../assets/Promote.png";
import SiddharthOjha from "../assets/SiddharthOjha.png";
import Jasmine from "../assets/Jasmine.png";
import VidyaOjha from "../assets/VidyaOjha.png";

const categories=[
  {
  name: "Immunity Booster",
  href: ImmunityBooster,
  size: "(1 item)"
  },
  {
  name: "Sugar Replacement",
  href: SugarReplacement,
  size: "(2 items)"
  },
  {
  name: "Salt Revolution",
  href: SaltRevolution,
  size: "(3 items)"
  },

];


const buttons1 = [
    { name: "Home", link: "/" },
    { name: "Our Stori", link: "/ourstori" },
    
    { name: "Our Impact", link: "/ourimpact" },
    { name: "Shop", link: "/shop" },
  ];
  const buttons2 = [
    { name: "Connect", link: "/connect" },
    { name: "Blog", link: "/blogs" }
  ];
const socialMediaLinks = [
    { href: "https://www.instagram.com/indie_stori/", iconClass: "fa-brands fa-instagram" },
    { href: "https://www.facebook.com/indiestori", iconClass: "fa-brands fa-facebook-f" },
    { href: "https://www.linkedin.com/company/indie-stori", iconClass: "fa-brands fa-linkedin" },
    { href: "https://www.youtube.com/@indiestori", iconClass: "fa-brands fa-youtube" }
  ];
  const usersocialMediaLinks = [
    { platform: "whatsapp", href: "", iconClass: "fab fa-whatsapp", color: "green-500" },
    { platform: "facebook", href: "", iconClass: "fab fa-facebook-f", color: "blue-600" },
    { platform: "linkedin", href: "", iconClass: "fab fa-linkedin-in", color: "blue-800" },
  ];
  const footerInformation = [
    { name: "Our Stori", href: "/ourstori" },
    { name: "Connect", href: "/connect" },
    { name: "Terms of Service", href: "/termsofservice" },
    { name: "Refunds Cancellations", href: "/refunds-and-cancellations" },
    { name: "Privacy policy", href: "/privacypolicy" },
    { name: "Shipping Policy", href: "/shippingpolicy" }
  ];
  
  const footerDiscover = [
    { name: "Our Impact", href: "/ourimpact" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blogs" }
  ];
  const blogs = [
    {
        image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
        title: 'Here Is The Perfect Response For Your Great Weaknesses',
        date: 'August 07, 2024',
        excerpt: 'Struggling to answer the dreaded weakness question in interviews? Our blog offers the perfect response to highlight your strengths while addressing we...',
    },
    {
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        title: "How to Respond When Asked, 'Do you have Any Questions?'",
        date: 'August 05, 2024',
        excerpt: 'Wondering how to respond when asked, "Do you have any questions?" in an interview? Our blog provides smart, engaging questions to impress your...',
    },
    {
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        title: "How to Respond When Asked, 'Do you have Any Questions?'",
        date: 'August 05, 2024',
        excerpt: 'Wondering how to respond when asked, "Do you have any questions?" in an interview? Our blog provides smart, engaging questions to impress your...',
    },
    {
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        title: "How to Respond When Asked, 'Do you have Any Questions?'",
        date: 'August 05, 2024',
        excerpt: 'Wondering how to respond when asked, "Do you have any questions?" in an interview? Our blog provides smart, engaging questions to impress your...',
    },
    {
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        title: "How to Respond When Asked, 'Do you have Any Questions?'",
        date: 'August 05, 2024',
        excerpt: 'Wondering how to respond when asked, "Do you have any questions?" in an interview? Our blog provides smart, engaging questions to impress your...',
    },
    {
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        title: "How to Respond When Asked, 'Do you have Any Questions?'",
        date: 'August 05, 2024',
        excerpt: 'Wondering how to respond when asked, "Do you have any questions?" in an interview? Our blog provides smart, engaging questions to impress your...',
    },
];
  const cardsData = [
    {
      bgColor: 'pink-400',
      buttonColor: 'yellow-100',
      textColor:"white",
      title: 'Get 14 percent off on Indigenious Turmeric',
      description: 'Turmeric as rare as seeing a tiger in the forest!',
    },
    {
      bgColor: 'yellow-100',
      buttonColor: 'pink-400',
      textColor:"pink-600",
      title: 'Get 10 percent off on Indigenious Honey',
      description: 'Sourced directly from forests around Jim Corbett National Park.',
    },
    {
      bgColor: 'pink-400',
      buttonColor: 'yellow-100',
      textColor:"white",
      title: 'Get 10 percent off on Indigenious Flavoured Salt',
      description: 'Salt made by mothers, not by Machines. 0 preservatives, hand ground and prepared for 2 months.',
    },
  ];
  
  const cards = [
    {
      id: 1,
      title: 'Heading 1',
      subtitle: 'Subtitle 1',
      image: img1,
      href: "#",
    },
    {
      id: 2,
      title: 'Heading 2',
      subtitle: 'Subtitle 2',
      image: img3,
      href: "#",
    },
    {
      id: 3,
      title: 'Heading 3',
      subtitle: 'Subtitle 3',
      image: img1,
      href: "#",
    },
    {
      id: 4,
      title: 'Heading 4',
      subtitle: 'Subtitle 4',
      image: img2,
      href: "#",
    },
  ];


const ourStoriInfo = [
    {
        img: Produce, 
        title: 'Produce', 
        description: 'We directly source from the Farmers & help them increase the production.'
    },
    {
        img: Promote, 
        title: 'Promote', 
        description: 'We promote 100% Authentic Native Products produced by nature & nurtured by humans.'
    },
    {
        img: Preserve, 
        title: 'Preserve', 
        description: 'We help preserve the Ancient Traditional & Sustainable Techniques.'
    },
    {
        img: Protect, 
        title: 'Protect', 
        description: 'We help protect the Environment ethically & maintain ecological balance.'
    }
];
const slides = [img1, img1, img1];



  const testimonials = [
    {
      image: img1,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "Sinira Fro",
      heading2: "Managing Director",
    },
    {
      image: img2,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "Sinira Fro",
      heading2: "Managing Director",
    },
    {
      image: img3,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "Sinira Fro",
      heading2: "Managing Director",
    },
    {
        image: img2,
        paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
        heading1: "Sinira Fro",
        heading2: "Managing Director",
      },
  ];

  const brandpartners = [
    {
      image: img1,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "one",
      heading2: "Director",
    },
    {
      image: img2,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "two",
      heading2: "Managing Director",
    },
    {
      image: img3,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "three",
      heading2: "Managing Director",
    },
    {
        image: img2,
        paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
        heading1: "four",
        heading2: "Managing Director",
      },
  ];
  const upcomingData = [
    { image: img1, heading: "Heading One" },
    { image: img2, heading: "Heading Two" },
    { image: img3, heading: "Heading Three" },
    { image: img1, heading: "Heading Four" },
  ];
  const blogData = [
    {
      image: img1,
      category: "Organic Food",
      date: "1/17/2021",
      title: "What Should Know About Detox Water",
      link: "#",
    },
    {
      image: img1,
      category: "Organic Food",
      date: "1/17/2021",
      title: "What Should Know About Detox Water",
      link: "#",
    },
    {
      image: img1,
      category: "Organic Food",
      date: "1/17/2021",
      title: "What Should Know About Detox Water",
      link: "#",
    },
  ];
const team = [
    {
        img: SiddharthOjha, 
        title: 'Siddharth Ojha', 
        description: 'Founder & Director'
    },
    {
        img: Jasmine, 
        title: 'Jasmine', 
        description: 'Director'
    },
    {
        img: VidyaOjha, 
        title: 'Vidya Ojha', 
        description: 'Director'
    },
];

const partners = [
  {
      img: img1, 
      title: 'Aikya Pictures', 
  },
  {
      img: img1, 
      title: 'The Dais', 
  },
  {
      img: img1, 
      title: 'Tears of Earth', 
  },
];

const products = [
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 5,
      image: img1
    },
    {
      name: 'Apple Juice',
      price: '$10.00-$20.00',
      rating: 2,
      image: img3
    },
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 4,
      image: img2
    },
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 5,
      image: img1
    },
    
    // Add more products as needed
  ];
 const metricsData = [
    {
      id: 1,
      imageSrc: fiftyclients,
      endValue: 50,
      startValue: 0,
      description: 'Satisfied Clients',
      timer: 20,
    },
    {
      id: 2,
      imageSrc: fiftyfarmers,
      endValue: 50,
      startValue: 0,
      description: 'Farmers Impacted',
      timer: 20,
    },
    {
      id: 4,
      imageSrc: customersNumbers,
      endValue: 5000,
      startValue: 0,
      description: 'Customers',
      timer: 20,
    },
  ];
  

export {img1,img2,img3,blogs,usersocialMediaLinks,categories, buttons1,buttons2, socialMediaLinks, footerInformation,cardsData, cards,blogData, slides,testimonials,brandpartners,upcomingData, footerDiscover, ourStoriInfo, team, partners, products, metricsData };
  