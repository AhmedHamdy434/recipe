import { CategoryType } from "@/data/fetchData";
import Link from "next/link";
import Image from "next/image";

const CategoryBox = ({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}: CategoryType) => {
  const truncateText = (text: string, max: number) => {
    return text.length > max ? `${text.slice(0, max)}...` : text;
  };
  return (
    <Link
      href={`/categories/${strCategory}`}
      className="bg-background2 rounded-2xl text-center move-on-hover"
    >
      <Image
        src={strCategoryThumb}
        alt={strCategory}
        width={200}
        height={200}
        className="w-auto mx-auto mt-2"
      />
      <h3 className="text-main text-[20px] font-bold my-3">{strCategory}</h3>
      <p className="mb-3 text-secondary-text text-[14px] mx-2">
        {truncateText(strCategoryDescription, 150)}
      </p>
    </Link>
  );
};

export default CategoryBox;
