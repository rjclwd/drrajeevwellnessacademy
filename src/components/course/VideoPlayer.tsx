"use client";

type Course = {
  platform: "youtube" | "facebook";
  youtubeId?: string;
  fbVideoUrl?: string;
};

export default function VideoPlayer({ course }: { course: Course }) {
  if (course.platform === "youtube" && course.youtubeId) {
    return (
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full rounded-xl"
          src={`https://www.youtube.com/embed/${course.youtubeId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (course.platform === "facebook" && course.fbVideoUrl) {
    return (
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full rounded-xl"
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(course.fbVideoUrl)}&show_text=false&width=1280`}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return <p className="text-neutral-600">Video unavailable.</p>;
}
