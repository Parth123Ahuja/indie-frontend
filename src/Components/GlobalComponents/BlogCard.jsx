// import React from 'react';

// const BlogCard = ({ image, category, date, title, link }) => {
//   return (
//     <div className="h-96 w-full sm:w-1/4 mx-8 bg-customYellow rounded-lg overflow-hidden">
//       <img className="w-full h-1/2 object-cover rounded-t-lg" src={image} alt="Blog Image" />
//       <div className="flex justify-between p-4">
//         <p><i className="fa-solid fa-tags"></i> {category}</p>
//         <p><i className="fa-solid fa-calendar-days"></i> {date}</p>
//       </div>
//       <hr />
//       <div className="p-4 space-y-4">
//         <a href={link} className="text-2xl font-medium hover:underline">{title}</a>
//         <button className="text-lg px-4 py-2 border-2 border-black rounded-lg font-medium duration-700 ease-in-out hover:bg-pink-500 ml-36">Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export default function BlogCard() {
  return (
    <Card className="w-full md:w-2/3 lg:w-1/4 flex flex-col sm:flex-row lg:flex-col">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full sm:max-w-48 lg:max-w-full shrink-0 "
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full p-2 object-cover rounded-xl "
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          TAGS
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography>
        
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
        
      </CardBody>
    </Card>
  );
}
