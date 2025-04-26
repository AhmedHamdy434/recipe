import { fetchData, mainUrl } from "@/data/fetchData";
import Link from "next/link";

const countriesPage = async () => {
  const {
    meals,
  }: {
    meals: {
      strArea: string;
    }[];
  } = await fetchData(`${mainUrl}/list.php?a=list`);

  return (
    <div className="py-[100px]">
      <div className="container min-h-screen">
        <h4 className="mb-8">All Countries</h4>
        <div className="boxes grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {meals.map(({ strArea }) => (
            <Link
              href={`/countries/${strArea}`}
              key={strArea}
              className="p-4 zoom bg-background2 rounded-2xl"
            >
              {strArea}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default countriesPage;
