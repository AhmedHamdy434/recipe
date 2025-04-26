import Image from "next/image";
import Link from "next/link";
import { sectionDataType } from "./Section";
const CardMain = ({
  id,
  paragraph,
  buttonWord,
  link,
  src,
}: sectionDataType) => {
  const even: boolean = parseInt(id) % 2 === 0;
  return (
    <section
      className={`flex flex-col items-center gap-8 sm:justify-between bg-background2 md:w-[90%] mb-[50px] rounded-2xl px-2 py-6 md:p-[50px] md:mx-auto
    shadow-section-light dark:shadow-section-dark ${
      even ? "sm:flex-row-reverse" : "sm:flex-row"
    }`}
    >
      <Image
        src={src}
        alt="img"
        width={500}
        height={500}
        className="w-[70%] sm:w-[40%]"
      />
      <div className="text w-full text-center md:w-[50%] md:text-start ">
        <p className="mb-3">{paragraph}</p>
        <Link href={link}>
          <button className="btn">{buttonWord}</button>
        </Link>
      </div>
    </section>
  );
};

export default CardMain;
