import { useLanguage } from "../contexts/LanguageContext";
import { Post } from "../types/post";

export const SortPosts = (posts: Post[]): Post[] => {
  const { language } = useLanguage();

  if (language === "es") {
    return [...posts].sort((a, b) => {
      const partsA = a.created_at.split(" ").filter((part) => part !== "de");
      const partsB = b.created_at.split(" ").filter((part) => part !== "de");

      const dateA = new Date(
        parseInt(partsA[2]),
        getMonthNumber(partsA[1]),
        parseInt(partsA[0])
      );
      const dateB = new Date(
        parseInt(partsB[2]),
        getMonthNumber(partsB[1]),
        parseInt(partsB[0])
      );

      return dateB.getTime() - dateA.getTime();
    });
  }
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });
};

const getMonthNumber = (month: string): number => {
  const monthsEN = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthsES = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const enIndex = monthsEN.findIndex(
    (m) => m.toLowerCase() === month.toLowerCase()
  );
  if (enIndex !== -1) return enIndex;

  const esIndex = monthsES.findIndex(
    (m) => m.toLowerCase() === month.toLowerCase()
  );
  if (esIndex !== -1) return esIndex;

  return 0;
};
