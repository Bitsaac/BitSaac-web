type BlogNavProps = {
	action: string;
	label: string;
	id?: number;
};

export const BLOG_NAVS: BlogNavProps[] = [
	{ id: 1, action: "all", label: "View all" },
	{ id: 2, action: "marketing", label: "Marketing" },
	{ id: 3, action: "design", label: "UX Design" },
	{ id: 4, action: "dev", label: "Development" },
	{ id: 5, action: "social", label: "Social" },
	{ id: 6, action: "tech", label: "Tech News" },
];

export const ACTIONS = [
	"all",
	"marketing",
	"design",
	"dev",
	"social",
	"tech",
] as const;

export type ActionTypes = (typeof ACTIONS)[number];
