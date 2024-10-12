export function getCategoryColor(categoryName) {
  switch (categoryName) {
    case "NextJs":
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
    default:
      return "bg-gray-300"; // Default color if no match is found
  }
}
