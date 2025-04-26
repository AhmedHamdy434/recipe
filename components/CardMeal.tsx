import { FilterType } from "@/data/fetchData";
import Link from "next/link";
import Image from "next/image";

const CardMeal = ({ strMeal, strMealThumb, idMeal }: FilterType) => {
  return (
    <Link
      href={`/meal/${idMeal}`}
      className="bg-background2 rounded-2xl text-center move-on-hover overflow-hidden"
    >
      <Image
        src={strMealThumb}
        alt={strMeal}
        width={200}
        height={200}
        className="w-auto mx-auto"
      />
      <h3 className="text-main font-bold my-3">{strMeal}</h3>
    </Link>
  );
};

export default CardMeal;
