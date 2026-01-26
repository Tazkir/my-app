export function getCategoryColor(categoryName) {
  switch (categoryName) {
    case "NextJs":
    case "UI Shadcn":
    case "Payload CMS":
      return "bg-black";
    case "ReactJs":
      return "bg-cyan-400";
    case "Tailwind Css":
      return "bg-teal-400";
    case "Trpc":
      return "bg-purple-400";
    case "NodeJs":
      return "bg-green-600";
    case "Typescript":
      return "bg-blue-600";
    case "TanStack Query":
      return "bg-red-400";
    case "Prisma":
      return "bg-green-500";
    case "Supabase":
      return "bg-green-500";
    default:
      return "bg-violet-500";
  }
}
