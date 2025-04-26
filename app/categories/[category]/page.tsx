import CardMealContainer from "@/components/CardMealContainer";
import { fetchData, FilterType, mainUrl } from "@/data/fetchData";
import { notFound } from "next/navigation";

const categoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const { meals }: { meals: FilterType[] } = await fetchData(
    `${mainUrl}/filter.php?c=${category}`
  );
  if (!meals) notFound();
  return (
    <div className="py-[100px]">
      <div className="container min-h-screen">
        <h4>{category} Meals</h4>
        <CardMealContainer meals={meals} />
      </div>
    </div>
  );
};

export default categoryPage;
