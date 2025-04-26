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
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi iusto sed necessitatibus qui impe",
      buttonWord: "Go To Categories",
      link: "/categories",
      src: "/categories.png",
    },
    {
      id: "2",
      paragraph:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi iusto sed necessitatibus qui impe",
      buttonWord: "Go To Countries",
      link: "/countries",
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
