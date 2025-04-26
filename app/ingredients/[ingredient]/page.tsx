import CardMealContainer from "@/components/CardMealContainer";
import { fetchData, FilterType, mainUrl } from "@/data/fetchData";
import Image from "next/image";

const ingredientPage = async ({
  params,
}: {
  params: Promise<{ ingredient: string }>;
}) => {
  const { ingredient } = await params;
  const { meals }: { meals: FilterType[] } = await fetchData(
    `${mainUrl}/filter.php?i=${ingredient}`
  );
  return (
    <div className="py-[100px]">
      <div className="container min-h-screen">
        <h4 className="mb-4 text-center sm:text-start">
          {ingredient.split("_").join(" ")}
        </h4>
        <Image
          src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
          alt={ingredient}
          width={300}
          height={300}
          className="w-full sm:w-[300px] mx-auto mb-8"
        />
        <h4 className="mt-6 text-center sm:text-start">
          Meals that use {ingredient.split("_").join(" ")}
        </h4>
        <CardMealContainer meals={meals} />
      </div>
    </div>
  );
};

export default ingredientPage;
