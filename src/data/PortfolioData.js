import { amazon_clone, covid_tracker, spotify_clone, youtube_clone } from "./Websites";

export const portfolioArray = [
  {
    title: "Youtube Clone",
    description:
      "built youtube clone adaptable to all devices, with UI components.",
    link: youtube_clone,
    file: "youtube",
    image: "youtube-logo-hd-8.png",
    sections: [
      {
        image: "home.png",
        text: "Home Page",
      },
      {
        image: "search.png",
        text: "Search for some video",
      },
      {
        image: "youtube_api.png",
        text: "Using youtube api to make requests",
      },
      {
        image: "firebase_hosting.png",
        text: "firebase for hosting",
      },
    ],
  },
  {
    title: "Amazon Clone",
    description:
      "built Amazon clone adaptable to all devices, with UI components, with payement functionality.",
    link: amazon_clone,
    file: "amazon",
    image: "amazon-lg.png",
    sections: [
      {
        image: "home.png",
        text: "Home Page All products",
      },
      {
        image: "login.png",
        text: "Login With Firebase",
      },
      {
        image: "cart.png",
        text: "Cart List",
      },
      {
        image: "checkout.png",
        text: "Checkout Page",
      },
      {
        image: "stripe.png",
        text: "Stripe payments",
      },
    ],
  },
  {
    title: "Spotify Clone",
    description:
      "built Spotify clone adaptable to all devices, with UI components, and third party authentication.",
    link: spotify_clone,
    file: "spotify",
    image: "spotify-logo.png",
    sections: [
      {
        image: "login.png",
        text: "Login Page with third party Authentication",
      },
      {
        image: "home.png",
        text: "Home Page",
      },
    ],
  },
  {
    title: "Uber Eats Clone",
    description:
      "built Uber Eats clone adaptable to all devices, with UI components, and third party authentication.",
    link: null,
    file: "ubereats",
    image: "logo.png",
    sections: [
      {
        image: "home.jpeg",
        text: "List of All Restaurents",
      },
      {
        image: "details.jpeg",
        text: "Restaurent Detail",
      },
      {
        image: "checkout.jpeg",
        text: "Checkout Page",
      },
      {
        image: "loading.jpeg",
        text: "Loading ...",
      },
      {
        image: "complete.jpeg",
        text: "Order Added !",
      },
    ],
  },
  {
    title: "Instagram Clone",
    description:
      "built Instagram clone adaptable to all devices, with UI components.",
    link: null,
    file: "instagram",
    image: "logo.png",
    sections: [
      {
        image: "login.jpeg",
        text: "Login Page",
      },
      {
        image: "home.jpeg",
        text: "Home Page",
      },
      {
        image: "newpost.jpeg",
        text: "Add New Post",
      },
      {
        image: "register.jpeg",
        text: "Create NEw Account with form Vailidation",
      },
    ],
  },
  {
    title: "Covid Tracker",
    description:
      "built Covid Tracker adaptable to all devices, using Api Diseas To Fetch Data",
    link: covid_tracker,
    file: "covid",
    image: "logo.png",
    sections: [
      {
        image: "cases.png",
        text: "Case Page",
      },
      {
        image: "recovered.png",
        text: "Home Page",
      },
      {
        image: "deaths.png",
        text: "Add New Post",
      },
    ],
  },
];
