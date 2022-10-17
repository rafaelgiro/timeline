import { Typography } from "../../../components/Typography";
import { CardFrame } from "./CardFrame";
import { CardImage } from "./CardImage";
import { CardWrapper } from "./CardWrapper";
import { CardContainer } from "./styles";

/**
 * Card component that stays on the lower part of the timeline
 */
export const Card = (props: CardProps) => {
  const { name, image, description, backgroundCategory, borderCategory } =
    props;

  return (
    <CardWrapper {...props}>
      <CardContainer>
        <div className="card-background" />
        {image && <CardImage image={image} />}
        <div className="card-text">
          <Typography htmlTag="h2" variant="heading">
            {name.toUpperCase()}
          </Typography>
          <Typography htmlTag="p">{description}</Typography>
        </div>
        <CardFrame
          backgroundCategory={backgroundCategory}
          borderCategory={borderCategory}
        />
      </CardContainer>
    </CardWrapper>
  );
};

export interface CardProps extends TimelineEvent {
  /**
   * Event handler to filter sub-events on click
   */
  onEventClick(category: string): void;
  /**
   * Key of the data object
   */
  category: string;
}
