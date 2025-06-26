export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Currently building full stack applications & convincing my computer to cooperate.",
    description: "This is me",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-40",
    titleClassName:
      "justify-center md:justify-start lg:justify-center w-64 lg:w-full",
    img: "/profile.png",
    spareImg: "/grid.png",
  },
  // {
  //   id: 1,
  //   title: "I prioritize working closely with clients and fostering open communication.",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "justify-end",
  //   img: "/b1.svg",
  //   spareImg: "",
  // },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.png",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "I prioritize working closely with clients and fostering open communication.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/b1.png",
    spareImg: "",
  },
  // {
  //   id: 5,
  //   title: "Currently building full stack applications & convincing my computer to cooperate.",
  //   description: "This is me",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-40",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/profile.png",
  //   spareImg: "/grid.png",
  // },

  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Gemini clone (API integration)",
    des: "Gemini API to provide instant responses to user prompts, featuring a sidebar for recent questions, predefined queries, and a loader animation for answer display.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/API.webp", "/fm.svg"],
    link: "https://gemini-clone-azure-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Robowar Registration Platform",
    des: "Developed a comprehensive registration platform for the Robowar competition, featuring user-friendly interfaces, secure data handling, and real-time updates.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mdb.svg", "/fm.svg"],
    link: "https://robowars.vercel.app/",
  },
  {
    id: 3,
    title: "Community Platform",
    des: "Developed a responsive community platform for Hackoverflow Society, leveraging Next.js, PostgreSQL, and WebSocket for seamless user experience and real-time interactions.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://hackoverflow-society-website.vercel.app/",
  },
  {
    id: 4,
    title: "EtherSend DApp",
    des: "A full-stack decentralized application for transferring Ethereum with messages and GIFs, featuring MetaMask integration, transaction history, and a modern UI.",
    img: "/p1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/solana.svg",
      "/hardhat.svg",
    ],
    link: "https://crypto-transfer-web3.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Tushar is an excellent co-worker who demonstrates a strong commitment to his work. He is consistently punctual and reliable, making him a valuable asset to any team.",
    name: "Shubh Sinha",
    title: "Director (BGC)",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGd217Vqihnfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706620602075?e=1750291200&v=beta&t=2ukTt18ejkXYCKCDkaXrx7wc3f2bC-pCu7GWIQfs5XI",
  },
  {
    quote:
      "Tushar demonstrates a commendable attitude and dedication to continuous self-improvement and technological exploration. His full stack development skills are impressive, and he possesses a deep understanding of user experience. Tushar has a strong grasp of development processes and consistently delivers hard work and creativity in his projects.",
    name: "Vishal Kumar",
    title: "Associate Product Manager (QArt Fashion)  ",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQFA2O3mWEZ4ew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1654401977436?e=1750291200&v=beta&t=6oeu87FsozxRE47dhhIpVnFHloQ7J9E76mwVqIOZUsI",
  },
  {
    quote:
      "Tushar has a positive attitude and is always striving to improve both personally and technologically. He shows a genuine eagerness to learn and grow, which makes him a valuable asset to any project.",
    name: "Mohammad Farmaan",
    title: "Tech Lead (QArt Fashion)",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFRsA9FnJsG2g/profile-displayphoto-shrink_800_800/B56ZR0MZr1GoAg-/0/1737116197689?e=1750291200&v=beta&t=DAifDE4WXa0uFYf0FNHsHXBbkgFb3wWJ5LbALxMFxTc",
  },
  {
    quote:
      "Tushar developed an 'add to cart' functionality for our e-commerce website, showcasing his problem-solving abilities and innovative thinking. His attention to detail and understanding of user experience were impressive. I am confident that Tushar's skills and dedication will make him an invaluable asset to any team he joins.",
    name: "Channabasava Yadav",
    title: "Program Manager (EDUNET FOUNDATION)",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQFEeCxm7XlVcA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617868477826?e=1750291200&v=beta&t=ELpYrxZWqT7MgxHoFVvm1iLU1L463wm9vce0zLOJPkM",
  },
];

export const companies = [
  {
    id: 1,
    name: "typescript",
    img: "https://camo.githubusercontent.com/4478f70ad623b56fecc3f4f26be3bd2cbbfed80dc7d9a1b0492aa60fb79371f6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "react",
    img: "https://camo.githubusercontent.com/aed5f69c00ea3fd8c8bc70b89d236efae340eb3024526fd11bcba51c80c4aa40/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "tailwind",
    img: "https://camo.githubusercontent.com/85bc5f373c2fa0cfd14964b0e05870059792214ad4e26a1d2dbe553a31e76b97/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7461696c77696e646373732f7461696c77696e646373732d6f726967696e616c2d776f72646d61726b2e737667",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "javascript",
    img: "https://camo.githubusercontent.com/16bbe3c62e06c0099a8bd86816b7993b3eb49d8cd21eb74c7bff7db7dc3787b7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "HTML",
    img: "https://camo.githubusercontent.com/f2ce4039c99cf35adde738583ab0fbcd60eaafccf1e949884bda91d0b5c819ce/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "CSS",
    img: "https://camo.githubusercontent.com/0da944f181647261c840e34b20ed7e3ca44ddc150869c6ea550cf98d06c81a37/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 7,
    name: "docker",
    img: "https://camo.githubusercontent.com/dd35b550eae97295faa3e2420c5d3ad49c5c451edac91201211b4486d55d0878/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f646f636b65722f646f636b65722d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "firebase",
    img: "https://camo.githubusercontent.com/7bb25411091742a267e9523b43ac98379733394f9d22115e113fd593ccc4fd46/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f66697265626173652f66697265626173652d706c61696e2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 9,
    name: "git",
    img: "https://camo.githubusercontent.com/38827655e1ae0e1518d635ad89e8aa46b7f977c795952245c36a2d58064f1803/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 10,
    name: "github",
    img: "https://camo.githubusercontent.com/e245c978ad271d30dcbfa637b0aad42d3532c5fa467a778e01c2210ed6c5ef81/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769746875622f6769746875622d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 11,
    name: "google cloud",
    img: "https://camo.githubusercontent.com/82487162643feae93155aa0a432ca525c8a5ba8e10b1a323510e879a813356fd/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f676f6f676c65636c6f75642f676f6f676c65636c6f75642d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 12,
    name: "mongoDB",
    img: "https://camo.githubusercontent.com/20039163b76f7278f3f309c82d7a6f7ab56d560ed0b8f5623805c8399a0ed098/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d6f6e676f64622f6d6f6e676f64622d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 13,
    name: "NextJS",
    img: "https://camo.githubusercontent.com/2afa555e4c1446915b42c846fbbc4893c8d1411b54d53ae6e0dcf64371c5f3ba/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6578746a732f6e6578746a732d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 14,
    name: "NodeJS",
    img: "https://camo.githubusercontent.com/2cde166000bd4271614ef8c0a7e435af8a087c05f4d5a36f1945663d363bd463/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 15,
    name: "VueJS",
    img: "https://camo.githubusercontent.com/2e24bf255ce01f417e4a25cdac682d8d5e3341eb58283ddff6a11e12531fac19/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7675656a732f7675656a732d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 16,
    name: "C language",
    img: "https://camo.githubusercontent.com/8639a64068ea0e712beec603e79eb19daf6b3c26cb47c782b0debf2843a8bfa5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f632f632d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 17,
    name: "Slack",
    img: "https://camo.githubusercontent.com/e39266f11f0dd5202c8ac61bbc08fd633086c9c4c845334890e6c6720e231c68/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f736c61636b2f736c61636b2d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
  {
    id: 18,
    name: "Material UI",
    img: "https://camo.githubusercontent.com/9409b2680c5899cffc5799aeb103346589a25b59d9d5a899f9c93263a16f25ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d6174657269616c75692f6d6174657269616c75692d6f726967696e616c2e737667",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: " Created responsive web designs, enhancing website performance by 25%.",
    brand: " QArt Fashion, EDUNET(IBM)",
    className: "md:col-span -2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Operations Incharge",
    desc: "Managed tradeshow operations for 5+ major brands, ensuring 100% client satisfaction.",
    brand: "QArt Fashion",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Graphic Designer",
    desc: "Designed 150+ marketing materials, contributing to a 30% increase in society membership.",
    brand: " GDG Cloud, IEEE CIS, ExpressBytes",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Leading a team of 5+ developers to create innovative gaming solutions.",
    brand: "BGC (Bhartiya Gaming Community)",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    desc: "Reduced latency by 30% and downtime by 10% by deploying scalable full-stack apps on AWS using Next.js, Express, and MongoDB.",
    brand: "Innovmeta",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/tusharshah21",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/Tushars46106674",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tushar21shah/",
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://www.instagram.com/shahtusharkumar/",
  },
  {
    id: 5,
    img: "/wha.svg",
    link: "https://wa.me/+917300559866",
  },
];
