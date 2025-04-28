import CardMain from "./CardMain";

export type sectionDataType = {
  id: string;
  paragraph: string;
  buttonWord: string;
  link: string;
  src: string;
};
const Section = () => {
  const sectionAllData: sectionDataType[] = [
    {
      id: "1",
      paragraph:
        "Explore a variety of meal categories organized to help you easily find the types of dishes you're interested in.",
      buttonWord: "Go To Categories",
      link: "/categories",
      src: "/categories.png",
    },
    {
      id: "2",
      paragraph:
        "Discover meals organized by country, offering a rich collection of traditional dishes from around the world.",
      buttonWord: "Go To Countries",
      link: "/countries",
      src: "/countries.png",
    },
    {
      id: "3",
      paragraph:
        "Quickly find your favourite meals by searching with a name. Browse detailed recipes and ingredients effortless.",
      buttonWord: "Go To Search Page",
      link: "/search",
      src: "/countries.png",
    },
  ];
  return (
    <div>
      {sectionAllData.map((sectionData: sectionDataType) => (
        <CardMain key={sectionData.id} {...sectionData} />
      ))}
    </div>
  );
};

export default Section;
