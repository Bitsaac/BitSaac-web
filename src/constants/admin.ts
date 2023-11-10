type AdminNavProps = {
  id?: number;
  label: string;
  link: string;
};

export const ADMIN_NAVS: AdminNavProps[] = [
  {
    id: 1,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    label: "blog",
    link: "/blog",
  },
  {
    id: 3,
    label: "portfolio",
    link: "/portfolio",
  },
  {
    id: 4,
    label: "newsletter",
    link: "/newsletter",
  },
  {
    id: 5,
    label: "subscriptions",
    link: "/subscriptions",
  },
  {
    id: 6,
    label: "requests",
    link: "/requests",
  },
];
