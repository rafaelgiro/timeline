import { Card } from "./Card";
import { CardsContainer } from "../Timeline/styles";

/**
 * Wrapper container for events that are featured on the timeline.
 */
export const CardsWrapper = (props: CardsWrapperProps) => {
  const { data } = props;

  const categories = Object.keys(data);

  // TODO: handle global category state
  function handleCardClick(cat: string) {
    console.log(cat);
  }

  return (
    <CardsContainer>
      {categories.map((cat) => {
        const cardData = data[cat];

        if (cardData.isFeatured)
          return (
            <Card
              key={cardData.description}
              category={cat}
              onEventClick={handleCardClick}
              {...data[cat]}
            />
          );

        return null;
      })}
    </CardsContainer>
  );
};

interface CardsWrapperProps {
  /**
   * Data object where the key is a category for events
   */
  data: Record<string, TimelineEvent>;
}
