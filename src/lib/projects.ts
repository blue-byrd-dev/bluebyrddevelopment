export type Project = {
  slug: "born-to-ride" | "cheerful-calculations" | "forever-home";
  name: string;
  summary: string;
  tags: string[];
  problem: string;
  solution: string;
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "born-to-ride",
    name: "Born To Ride",
    summary: "Nonprofit site + community-forward UX with a focus on clarity and momentum.",
    tags: ["Nonprofit", "Web", "Performance"],
    problem: "Needed a modern site that’s easy to update and strong on mission + trust.",
    solution: "Rebuilt structure, clarified CTAs, optimized for fast load and clean navigation.",
    results: ["Improved content clarity", "Mobile-friendly structure", "Fast modern stack foundation"],
  },
  {
    slug: "cheerful-calculations",
    name: "Cheerful Calculations",
    summary: "Bookkeeping brand site that feels friendly, professional, and conversion-ready.",
    tags: ["Small Business", "Brand", "Lead Gen"],
    problem: "Needed credibility, clear offers, and a clean path to contact.",
    solution: "Modern layout, strong hierarchy, polished CTA flow, and professional tone.",
    results: ["Cleaner service presentation", "Better trust signals", "Stronger conversion path"],
  },
  {
    slug: "forever-home",
    name: "Forever Home",
    summary: "Pet adoption discovery app concept with scalable frontend architecture.",
    tags: ["App", "React", "Firebase"],
    problem: "Needed a maintainable UI foundation ready for features like auth + favorites.",
    solution: "Component system + UX improvements + data flow designed for scale.",
    results: ["Reusable components", "Clearer UX", "Ready for feature expansion"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
