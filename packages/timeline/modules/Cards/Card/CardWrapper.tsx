import { type ReactNode } from "react";
import { type CardProps } from "./Card";

/**
 * Component that defines if the card will be an external link
 * or a button to filter sub-events.
 */
export const CardWrapper = (props: CardWrapperProps) => {
  const { url, subEvents, children, category, onEventClick } = props;

  if (url) return <ExternalCard url={url}>{children}</ExternalCard>;

  if (subEvents)
    return (
      <EventCard category={category} onEventClick={onEventClick}>
        {children}
      </EventCard>
    );

  return <article>{children}</article>;
};

/**
 * Component that defines if the card will open additional
 * cards.
 */
export const EventCard = (props: EventCardProps) => {
  const { children, onEventClick, category } = props;

  return (
    <button data-testid="event-card" onClick={() => onEventClick(category)}>
      {children}
    </button>
  );
};

/**
 * When the timeline card points to an external link,
 * this component is used
 */
export const ExternalCard = (props: ExternalCardProps) => {
  const { url, children } = props;

  return (
    <a data-testid="external-card" href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

interface CardWrapperProps extends CardProps {
  /**
   * Card content
   */
  children: ReactNode;
}

interface EventCardProps {
  /**
   * Event handler to filter sub-events on click
   */
  onEventClick: CardProps["onEventClick"];
  /**
   * Card content
   */
  children: ReactNode;
  /**
   * Key of the data object
   */
  category: CardProps["category"];
}

interface ExternalCardProps {
  /**
   * URL always existis on this card
   */
  url: NonNullable<CardProps["url"]>;
  /**
   * Card content
   */
  children: ReactNode;
}
