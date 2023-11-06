const startDate = new Date("2022-02-15").getTime();
const currentDate = new Date().getTime();

const difference = (currentDate - startDate) / (1000 * 3600 * 24) / 360;
const no_of_days = difference.toFixed(0);
// console.log(no_of_days);
const data = {
  iconName: "DA",
  NAME: ["Abd", "Ur", "Rehman", "Khan"],
  occupation: "Software Developer",
  description:
    " lorem ipsum dolor sit amet, consectetur adipiscing elit esse null tempor invidunt ut labore et dolore magna aliqu lorem ipsum dolor sit amet et d Lorem ipsum dolor sit amet et d Lorem ips Cum sociis natoque penatibus et just",
  Experience: no_of_days,
  no_of_projects: 10,
  social_media: [
    { title: "Instagram", url: "", path: "/instagram.svg" },
    { title: "Github", url: "", path: "/github.svg" },
    { title: "Linkedin", url: "", path: "/linkedin.svg" },
  ],

  my_services: [
    {
      title: "WEB DEVELOPMENT",
      subtitle: "Full Stack",
      desc: " lorem ipsum dolor sit amet, consectetur adipiscing elit esse null tempor invidunt ut labore et dolore magna aliqu lorem ipsum ",
      link: "",
    },
    {
      title: "APP DEVELOPMENT",
      subtitle: "iOS & Android",
      desc: " lorem ipsum dolor sit amet, consectetur adipiscing elit esse null tempor invidunt ut labore et dolore magna aliqu lorem ipsum ",
      link: "",
    },
  ],
  my_skills: [
    { title: "Python", percentage: 80, desc: "" },
    { title: "JavaScript", percentage: 90, desc: "" },
    { title: "TypeScript", percentage: 70, desc: "" },
    { title: "React Js", percentage: 70, desc: "" },
    { title: "Next Js", percentage: 60, desc: "" },
    { title: "MERN Stack", percentage: 70, desc: "" },
    // react native
  ],

  my_cases: [
    "All",
    "Frontend",
    "Full stack",
    "Backend",
    "Desktop",
    "Mobile",
    "Python Games",
  ],

  my_resume: "",
  testimonials: "",
  pricing: "",
  blog: "",
};

export default data;
