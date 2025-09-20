export type Course = {
  slug: string;
  title: string;
  summary: string;
  platform: "youtube" | "facebook";
  youtubeId?: string;
  fbVideoUrl?: string;
};
