export type ContentTier = "open" | "subscriber" | "ppv" | "private" | "view-once";

export type CreatorTier = 1 | 2 | 3 | 4;

export interface Creator {
  id: string;
  handle: string;
  legalRepresented?: boolean;
  displayName: string;
  pronouns?: string;
  tagline: string;
  city: string;
  borough?: string;
  agencyOfRecord?: string;
  tier: CreatorTier;
  joinedYear: number;
  measurements?: {
    height?: string;
    bust?: string;
    waist?: string;
    hips?: string;
    shoe?: string;
    hair?: string;
    eyes?: string;
  };
  disciplines: string[];
  languages: string[];
  unionMemberships?: string[];
  portraitUrl: string;
  coverUrl: string;
  bio: string;
  representedBy?: string;
  reels: number;
  followers: string;
  bookings: number;
  rating?: number;
  rateCardCents?: number;
}

export interface CastingCall {
  id: string;
  slug: string;
  title: string;
  productionHouse: string;
  productionType:
    | "Editorial"
    | "Campaign"
    | "Film"
    | "Series"
    | "Runway"
    | "Lookbook"
    | "Commercial"
    | "Private Commission";
  location: string;
  shootWindow: string;
  ratePerDayCents: number;
  ratePerDayLabel: string;
  closesOn: string;
  postedOn: string;
  status: "Open" | "Final Callbacks" | "Closing Soon" | "Closed";
  union: "SAG-AFTRA" | "Non-Union" | "Either";
  exclusivity: string;
  usage: string;
  brief: string;
  requirements: string[];
  submissionsCount: number;
  spots: number;
  posterUrl: string;
  director?: string;
  stylist?: string;
  photographer?: string;
}

export interface Booking {
  id: string;
  contentId: string;
  title: string;
  client: string;
  status: "Confirmed" | "On Hold" | "Pending" | "Wrapped";
  callTime: string;
  location: string;
  rateCents: number;
  rateLabel: string;
}

export interface UploadItem {
  id: string;
  title: string;
  duration: string;
  uploadedOn: string;
  state:
    | "uploading"
    | "pipeline_running"
    | "pending_2257_review"
    | "playable"
    | "taken_down";
  views: number;
  earningsCents: number;
  earningsLabel: string;
  posterUrl: string;
  accessTier: ContentTier;
}

export interface PressMention {
  outlet: string;
  headline: string;
  date: string;
  url: string;
}
