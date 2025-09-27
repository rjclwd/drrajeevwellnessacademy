export type YtVideo = {
  id: string;
  title: string;       // placeholder; replace when you have real titles
  link: string;        // https://www.youtube.com/watch?v=...
  thumbnail: string;   // https://img.youtube.com/vi/<id>/hqdefault.jpg
};

const make = (id: string, i: number): YtVideo => ({
  id,
  title: `Lesson ${String(i + 1).padStart(2, "0")}`,
  link: `https://www.youtube.com/watch?v=${id}`,
  thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
});

// merged & de-duped in order you provided
const ids = [
  "BFBoEE1Yvps","Mjgd4mMzO1o","yZAMkqHAJFg","SyIWZMOclmk",
  "M9RfHVJjiRw","wIQIUGBD69M","EvPhJMvE7ZQ","wFjZfdqI8Xg","MvVSVqOR-j8","6xk5yqtxnLg","P-REURwsk",
  "ptcolnjOltk","A_7C6_ackQY","8QL79s2WcCU","OJhnWQl1eyQ",
];

export const videos: YtVideo[] = Array.from(new Set(ids)).map(make);
