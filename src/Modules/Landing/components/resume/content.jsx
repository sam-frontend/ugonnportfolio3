import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DevicesIcon from "@material-ui/icons/Devices";
import LanguageIcon from "@material-ui/icons/Language";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SchoolIcon from "@material-ui/icons/School";

export const resumeContent = {
  edEntries: [
    {
      title: "Yaatech",
      descriptions: [
        "In view:Computer Science degree from the School of Language, Science",
        " The focus of my degree is on computer systems such as computer networks, distributed systems, servers, and operating systems",
      ],
      icon: <SchoolIcon fontSize="large" />,
    },
    {
      
      title: "Fronted/UI/UX Intern",
      descriptions: [
        "Completed over 100+ hours of trainings, tutorials, and projects",
        "Gained a well rounded understanding of the services I offer via freelance",
      ],
      icon: <MenuBookIcon fontSize="large" />,
    },
  ],
  exEntries: [
    {
    
      title: "Field Engineer-ITEX",
      descriptions: [
        "Created the new quicklock and virtual account number front end webpages  using Ract",
        "Learned the essence of development operations at large scale companies",
      ],
      icon: <DevicesIcon fontSize="large" />,
    },
      {
    
      title: "Frontend/QA-Waya Pay",
      descriptions: [
        "Created the new quicklock and virtual account number front end webpages  using Ract",
        "Learned the essence of development operations at large scale companies",
      ],
      icon: <DevicesIcon fontSize="large" />,
    },
    {
      title: "FSE - Uziben",
      descriptions: [
        "Expanded the existing membrane protein databases and created a new web interface where scientists can submit data for real-time processing using software developed by scientists from the College of Pharmacy",
      ],
      icon: <LanguageIcon fontSize="large" />,
    },
  ],
};
