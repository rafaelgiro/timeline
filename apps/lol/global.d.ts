/**
 * Categories availables for the user to filter
 */
type Category = "skins" | "changes" | "champions" | "pbe" | "release" | "rumor";

/**
 * Name is the champion'sname  with spaces and special characters.
 * championId is the name of the champion without spaces and special characters.
 *
 * @example `{ name: "Cho'Gath"; championId: "ChoGath" }`
 */
type Champion = { name: string; championId: string };

/**
 * Event is one item on the timeline or in the card list.
 */
interface TimelineEvent {
  /**
   * Revelant champions for that event
   */
  champions?: Champion[];
  /**
   * Information source
   */
  url?: string;
  /**
   * Name of the event
   */
  name: string;
  /**
   * Description of the event
   */
  description: string;
  /**
   * Event's initial date on format YYYY-MM-DD
   *
   */
  startDate: Date;
  /**
   * Event's initial date on format YYYY-MM-DD
   *
   */
  endDate: Date;
  /**
   * Color category for event's border
   */
  borderCategory: Category;
  /**
   * Color category for event's background
   */
  backgroundCategory: Category;
  /**
   * Event's image. Required for events that will be featured
   */
  image: { url: string; alt: string };
  /**
   * Sub events to render as card when the user performs an action in the
   * timeline
   */
  subEvents?: TimelineEvent[];
  /**
   * If the event is featured, it will appear as card during
   * the initial app state
   */
  isFeatured?: boolean;
  /**
   * Visual variant of the event
   */
  variant?: "default" | "dashed" | "dotted";
}

interface ThemeColors {
  backgroundPrimary: string;
  backgroundSecondary: string;
  fontPrimary: string;
  border: string;
  highlight: string;
  skins: string;
  changes: string;
  champions: string;
  pbe: string;
  release: string;
  rumor: string;
}
