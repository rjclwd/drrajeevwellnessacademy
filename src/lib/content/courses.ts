export type Course = {
  slug: string;
  title: string;
  summary: string;
  platform: "youtube" | "facebook";
  youtubeId?: string;
  fbVideoUrl?: string;
};

const courses: Course[] = [
  {
    slug: "bfboee1yvps",
    title: "Course BFBoEE1Yvps",
    summary: "YouTube course with ID BFBoEE1Yvps.",
    platform: "youtube",
    youtubeId: "BFBoEE1Yvps"
  },
  {
    slug: "mjgd4mmzo1o",
    title: "Course Mjgd4mMzO1o",
    summary: "YouTube course with ID Mjgd4mMzO1o.",
    platform: "youtube",
    youtubeId: "Mjgd4mMzO1o"
  },
  {
    slug: "yzamkqhajfg",
    title: "Course yZAMkqHAJFg",
    summary: "YouTube course with ID yZAMkqHAJFg.",
    platform: "youtube",
    youtubeId: "yZAMkqHAJFg"
  },
  {
    slug: "syiwzmoclmq",
    title: "Course SyIWZMOclmk",
    summary: "YouTube course with ID SyIWZMOclmk.",
    platform: "youtube",
    youtubeId: "SyIWZMOclmk"
  },
  {
    slug: "m9rfhvjjirw",
    title: "Course M9RfHVJjiRw",
    summary: "YouTube course with ID M9RfHVJjiRw.",
    platform: "youtube",
    youtubeId: "M9RfHVJjiRw"
  },
  {
    slug: "wiqiugbd69m",
    title: "Course wIQIUGBD69M",
    summary: "YouTube course with ID wIQIUGBD69M.",
    platform: "youtube",
    youtubeId: "wIQIUGBD69M"
  },
  {
    slug: "evphjmve7zq",
    title: "Course EvPhJMvE7ZQ",
    summary: "YouTube course with ID EvPhJMvE7ZQ.",
    platform: "youtube",
    youtubeId: "EvPhJMvE7ZQ"
  },
  {
    slug: "wfjzfdqi8xg",
    title: "Course wFjZfdqI8Xg",
    summary: "YouTube course with ID wFjZfdqI8Xg.",
    platform: "youtube",
    youtubeId: "wFjZfdqI8Xg"
  },
  {
    slug: "mvvsvqor-j8",
    title: "Course MvVSVqOR-j8",
    summary: "YouTube course with ID MvVSVqOR-j8.",
    platform: "youtube",
    youtubeId: "MvVSVqOR-j8"
  },
  {
    slug: "6xk5yqtxnlg",
    title: "Course 6xk5yqtxnLg",
    summary: "YouTube course with ID 6xk5yqtxnLg.",
    platform: "youtube",
    youtubeId: "6xk5yqtxnLg"
  },
  {
    slug: "p-reurwsk",
    title: "Course P-REURwsk",
    summary: "YouTube course with ID P-REURwsk.",
    platform: "youtube",
    youtubeId: "P-REURwsk"
  },
  {
    slug: "ptcolnjoltk",
    title: "Course ptcolnjOltk",
    summary: "YouTube course with ID ptcolnjOltk.",
    platform: "youtube",
    youtubeId: "ptcolnjOltk"
  },
  {
    slug: "a_7c6_ackq",
    title: "Course A_7C6_ackQY",
    summary: "YouTube course with ID A_7C6_ackQY.",
    platform: "youtube",
    youtubeId: "A_7C6_ackQY"
  },
  {
    slug: "8ql79s2wccu",
    title: "Course 8QL79s2WcCU",
    summary: "YouTube course with ID 8QL79s2WcCU.",
    platform: "youtube",
    youtubeId: "8QL79s2WcCU"
  },
  {
    slug: "ojhnwql1eyq",
    title: "Course OJhnWQl1eyQ",
    summary: "YouTube course with ID OJhnWQl1eyQ.",
    platform: "youtube",
    youtubeId: "OJhnWQl1eyQ"
  }
];

export function listCourses(): Course[] {
  return courses;
}

export function getCourse(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug);
}
