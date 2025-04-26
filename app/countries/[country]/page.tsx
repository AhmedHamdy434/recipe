import CardMealContainer from "@/components/CardMealContainer";
import { FilterType, fetchData, mainUrl } from "@/data/fetchData";
import { notFound } from "next/navigation";

const countryPage = async ({
  params,
}: {
  params: Promise<{ country: string }>;
}) => {
  const { country } = await params;

  const { meals }: { meals: FilterType[] } = await fetchData(
    `${mainUrl}/filter.php?a=${country}`
  );
  if (!meals) notFound();

  return (
    <div className="py-[100px]">
      <div className="container min-h-screen">
        <h4>{country} Meals</h4>
        <CardMealContainer meals={meals} />
      </div>
    </div>
  );
};

export default countryPage;
