export type BlogNavProps = {
  action: ActionTypes;
  label: string;
  id?: number;
};
type BlogCardProps = {
  tag?: ActionTypes;
  label: string;
  title: string;
  time: string;
  desc: string;
  image: string;
  id: number;
};
export type PortfolioCardProps = {
  tag?: ActionTypes;
  label: string[];
  title: string;

  desc: string;
  image: string;
  id: number;
  affiliated?: boolean;
};
export type PortfolioContentProps = {
  title: string;
  descriptions: string[];
  image: string;
  id?: number;
};
export type PortfolioNavProps = BlogNavProps;

export const ACTIONS = [
  "all",
  "marketing",
  "design",
  "development",
  "social",
  "technology",
] as const;

export const PORTFOLIO_CONTENTS: PortfolioContentProps[] = [
  {
    id: 1,
    title: " We Make Luxury Transportation Collaborative For Students",
    image: "/portfolio-illustration.png",
    descriptions: [
      "Our app seamlessly matches you with fellow travellers heading in the same direction, making your ride not only cost-effective but also a    chance to meet like-minded commuters. Say goodbye to high fares and hello to shared journeys!",
      "Nunc sed fabiolacus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
      "lorem is here sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
    ],
  },
  {
    id: 2,
    title: " We Make Luxury Transportation Collaborative For Students",
    image: "/portfolio-illustration.png",
    descriptions: [
      "Our app seamlessly matches you with fellow travellers heading in the same direction, making your ride not only cost-effective but also a    chance to meet like-minded commuters. Say goodbye to high fares and hello to shared journeys!",
      "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
      "parar sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
    ],
  },
];

export const BLOG_NAVS: BlogNavProps[] = [
  { id: 1, action: "all", label: "View all" },
  { id: 2, action: "marketing", label: "Marketing" },
  { id: 3, action: "design", label: "UX Design" },
  { id: 4, action: "development", label: "Development" },
  { id: 5, action: "social", label: "Social" },
  { id: 6, action: "technology", label: "Tech News" },
];

export const PORTFOLIO_NAVS: PortfolioNavProps[] = [
  { id: 1, action: "all", label: "View all" },
  { id: 2, action: "marketing", label: "Marketing" },
  { id: 3, action: "design", label: "UX Design" },
  { id: 4, action: "development", label: "Development" },
  { id: 5, action: "social", label: "Social" },
  { id: 6, action: "technology", label: "Tech News" },
];

export type ActionTypes = (typeof ACTIONS)[number];

export const BLOG_CARDS: BlogCardProps[] = [
  {
    id: 1,
    tag: "technology",
    label: "technology",
    title: "The Future of AI in Healthcare",
    time: "5 min read",
    desc: "Discover how AI is revolutionizing the healthcare industry and improving patient care.",
    image: "/portfolio-image.png",
  },
  {
    id: 2,
    tag: "technology",
    label: "technology",
    title: "The Rise of Blockchain Technology",
    time: "5 min read",
    desc: "Explore the potential of blockchain technology and its impact on various industries.",
    image: "/blog-image-2.png",
  },
  {
    id: 3,
    tag: "marketing",
    label: "Business",
    title: "The Power of Digital Marketing",
    time: "5 min read",
    desc: "Learn how digital marketing can help your business reach new heights.",
    image: "/blog-image-3.png",
  },
  // REPEATED
  {
    id: 4,
    tag: "technology",
    label: "technology",
    title: "The Future of AI in Healthcare",
    time: "5 min read",
    desc: "Discover how AI is revolutionizing the healthcare industry and improving patient care.",
    image: "/blog-image.png",
  },
  {
    id: 5,
    tag: "technology",
    label: "technology",
    title: "The Rise of Blockchain Technology",
    time: "5 min read",
    desc: "Explore the potential of blockchain technology and its impact on various industries.",
    image: "/blog-image-2.png",
  },
  {
    id: 6,
    tag: "marketing",
    label: "Business",
    title: "The Power of Digital Marketing",
    time: "5 min read",
    desc: "Learn how digital marketing can help your business reach new heights.",
    image: "/blog-image-3.png",
  },
  // REPEATED AGAIN
  {
    id: 7,
    tag: "technology",
    label: "technology",
    title: "The Future of AI in Healthcare",
    time: "5 min read",
    desc: "Discover how AI is revolutionizing the healthcare industry and improving patient care.",
    image: "/blog-image.png",
  },
  {
    id: 8,
    tag: "technology",
    label: "technology",
    title: "The Rise of Blockchain Technology",
    time: "5 min read",
    desc: "Explore the potential of blockchain technology and its impact on various industries.",
    image: "/blog-image-2.png",
  },
  {
    id: 9,
    tag: "marketing",
    label: "Business",
    title: "The Power of Digital Marketing",
    time: "5 min read",
    desc: "Learn how digital marketing can help your business reach new heights.",
    image: "/blog-image-3.png",
  },
];

export const PORTFOLIO_CARDS: PortfolioCardProps[] = [
  {
    id: 1,
    tag: "design",
    label: ["Technology", "Logistics", "UX Design"],
    title: "Ridgle (Connects You With Ride Buddies)",
    desc: "Experience a whole new way of commuting with Ridgle. Say goodbye to high fares and hello to shared journeys! ",
    image: "/portfolio-image.png",
    affiliated: false,
  },
  {
    id: 2,
    tag: "technology",
    label: ["Responsive web Design", "Entertainment", "Design & Consultation"],
    title: "Bit Concert Platform for BitHQ",
    desc: "Transforming artists' journey through electrifying live performances and global exposure.",
    image: "/portfolio-image-2.png",
    affiliated: true,
  },
  {
    id: 3,
    tag: "marketing",
    label: ["Responsive web Design", "Entertainment", "Design & Consultation"],
    title: "Bit Concert Platform for BitHQ",
    desc: "Learn how digital marketing can help your business reach new heights.",
    image: "/portfolio-image-3.png",
    affiliated: true,
  },
  // REPEATED
  {
    id: 4,
    tag: "technology",
    label: ["Responsive web Design", "Entertainment", "Design & Consultation"],
    title: "Bit Concert Platform for BitHQ",
    desc: "Discover how AI is revolutionizing the healthcare industry and improving patient care.",
    image: "/portfolio-image-2.png",
    affiliated: true,
  },
  {
    id: 5,
    tag: "technology",
    label: ["Responsive web Design", "Entertainment", "Design & Consultation"],
    title: "Bit Concert Platform for BitHQ",
    desc: "Explore the potential of blockchain technology and its impact on various industries.",
    image: "/portfolio-image-3.png",
    affiliated: true,
  },
  {
    id: 6,
    tag: "marketing",
    label: ["Responsive web Design", "Entertainment", "Design & Consultation"],
    title: "Bit Concert Platform for BitHQ",
    desc: "Learn how digital marketing can help your business reach new heights.",
    image: "/portfolio-image-2.png",
    affiliated: true,
  },
];

export const CUSTOMER_TESTIMONIALS = [
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 5,
    id: 1,
  },
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 5,
    id: 2,
  },
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 5,
    id: 3,
  },
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 5,
    id: 4,
  },
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 4,
    id: 5,
  },
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 5,
    id: 6,
  },
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 5,
    id: 7,
  },
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 4,
    id: 8,
  },
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 3,
    id: 9,
  },
  {
    info: "We are thrilled with the results BitSaac delivered. They are true experts in their field.",
    userName: "Michael Wilson",
    position: "CTO, Tech solutions",
    rating: 5,
    id: 10,
  },
];
