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

export const BLOG_NAVS: BlogNavProps[] = [
  { id: 1, action: "all", label: "View all" },
  { id: 2, action: "marketing", label: "Marketing" },
  { id: 3, action: "design", label: "UX Design" },
  { id: 4, action: "development", label: "Development" },
  { id: 5, action: "social", label: "Social" },
  { id: 6, action: "technology", label: "Tech News" },
];

export const ACTIONS = [
  "all",
  "marketing",
  "design",
  "development",
  "social",
  "technology",
] as const;

export type ActionTypes = (typeof ACTIONS)[number];

export const BLOG_CARDS: BlogCardProps[] = [
  {
    id: 1,
    tag: "technology",
    label: "technology",
    title: "The Future of AI in Healthcare",
    time: "5 min read",
    desc: "Discover how AI is revolutionizing the healthcare industry and improving patient care.",
    image: "/blog-image.png",
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
