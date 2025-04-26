"use client";

import { useEffect, useRef, useState } from "react";
import { fetchData, mainUrl, MealType } from "@/data/fetchData";
import CardMealContainer from "./CardMealContainer";
import ImageLoading from "./ImageLoading";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [searchMeals, setSearchMeals] = useState<MealType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const searchFetch = async () => {
      if (searchRef.current?.value === "" || !searchRef.current) return;
      setIsLoading(true);
      const { meals }: { meals: MealType[] } = await fetchData(
        `${mainUrl}/search.php?s=${search}`
      );

      setSearchMeals(meals ? meals : []);
      searchRef.current.value = "";
      setIsLoading(false);
    };
    searchFetch();
  }, [search]);
  const handleSearch = () => {
    if (searchRef.current?.value === "" || !searchRef.current) return;
    setSearch(searchRef.current.value);
  };
  return (
    <>
      <h4 className="mb-8">Search by Name</h4>
      <div className="search flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <input
          type="text"
          name="name"
          id="name"
          ref={searchRef}
          placeholder="Search By Name"
          className="ps-2 py-2 w-full caret-main rounded-md focus:outline-none bg-background2 sm:flex-[1]"
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {search.length > 0 && (
        <h2 className="text-[30px] text-main text-center my-6">{`"${search}"`}</h2>
      )}
      {isLoading && <ImageLoading />}
      {search.length > 0 &&
        !isLoading &&
        (searchMeals.length == 0 ? (
          <h2 className="text-[40px] text-main-hover text-center my-12">
            No Result Found
          </h2>
        ) : (
          <CardMealContainer meals={searchMeals} />
        ))}
    </>
  );
};

export default SearchForm;
