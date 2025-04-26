import { FilterType } from "@/data/fetchData";
import CardMeal from "./CardMeal";

const CardMealContainer = ({ meals }: { meals: FilterType[] }) => {
  return (
    <div className="cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 my-8">
      {meals.map((meal) => (
        <CardMeal key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
};

export default CardMealContainer;
