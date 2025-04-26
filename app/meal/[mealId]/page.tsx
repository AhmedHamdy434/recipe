import { fetchData, mainUrl, MealType } from "@/data/fetchData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const mealPage = async ({
  params,
}: {
  params: Promise<{ mealId: string }>;
}) => {
  const { mealId } = await params;
  const { meals }: { meals: MealType[] } = await fetchData(
    `${mainUrl}/lookup.php?i=${mealId}`
  );
  const meal = meals[0];
  if (!meals) return notFound();
  return (
    <div className="py-[100px]">
      <div className="container min-h-screen">
        <div className="hero flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="img-side sm:w-[40%]">
            <h4 className="mb-6">{meal.strMeal}</h4>
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={200}
              height={200}
              className="w-full max-w-[300px] mx-auto sm:max-w-[1000px]"
            />
          </div>
          <div className="text-side md:w-[50%]">
            <h4 className="mb-8">Ingredients</h4>
            <div className="ings w-full grid grid-cols-2 gap-2">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                const measure = meal[`strMeasure${num}` as keyof MealType];
                const ingredient =
                  meal[`strIngredient${num}` as keyof MealType];
                const ingredientNoSpace = ingredient
                  .toLocaleLowerCase()
                  .split(" ")
                  .join("_");
                if (!measure || !ingredient) return;
                return (
                  <Link
                    href={`/ingredients/${ingredientNoSpace}`}
                    key={num}
                    className="ing w-full bg-background2 flex items-center text-[14px] gap-4 p-2 rounded-2xl"
                  >
                    <div className="ing_measure">{measure}</div>
                    <div className="ing_ingredient">{ingredient}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="extra-info flex my-6 gap-8">
          <Link
            href={`/categories/${meal.strCategory}`}
            className="categ px-3 py-2 rounded-xl bg-green-800"
          >
            {meal.strCategory}
          </Link>
          <Link
            href={`/countries/${meal.strArea}`}
            className="area px-3 py-2 rounded-xl bg-green-800"
          >
            {meal.strArea}
          </Link>
          <Link
            href={meal.strYoutube}
            target="_blank"
            className="youtube px-3 py-2 rounded-xl bg-red-700"
          >
            Youtube
          </Link>
        </div>
        <h4 className="mt-3">Instruction</h4>
        <p className="mt-3 text-[14px] text-secondary-text leading-[2]">
          {meal.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default mealPage;
