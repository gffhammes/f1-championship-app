import React from "react";
import { EmblaCarousel } from "../../Common/EmblaCarousel";
import { ISectionCardProps, SectionCard } from "./SectionCard";

interface ISectionsDataProps {
  cardsData: ISectionCardProps[];
}

export const SectionsData = ({ cardsData }: ISectionsDataProps) => {
  const slides = cardsData.map((card, index) => (
    <SectionCard key={index} {...card} />
  ));

  return (
    <EmblaCarousel
      slides={slides}
      options={{
        align: 0,
        dragFree: true,
        slidesToScroll: 3,
        containScroll: "trimSnaps",
      }}
    />
  );
};
