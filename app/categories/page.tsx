import CategoryBox from "@/components/CategoryBox";
import { CategoryType, fetchData, mainUrl } from "@/data/fetchData";

const categoriesPage = async () => {
  const {
    categories,
  }: {
    categories: CategoryType[];
  } = await fetchData(`${mainUrl}/categories.php`);

  return (
    <div className="py-[100px]">
      <div className="container min-h-screen">
        <h4 className="mb-8">All Categories</h4>
        <div className="boxes grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-6 sm:gap-x-4">
          {categories.map((category) => (
            <CategoryBox key={category.idCategory} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default categoriesPage;
