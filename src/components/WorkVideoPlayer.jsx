import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function WorkVideoPlayer({ project }) {
  const ref = useRef(null);
  const [needsPlay, setNeedsPlay] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = ref.current;
    let active = true;
    video.muted = false;
    video.volume = 1;
    video.play().catch(() => {
      if (active) setNeedsPlay(true);
    });
    const onVisibility = () => {
      if (document.hidden) video.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      active = false;
      video.pause();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [project.video]);

  return (
    <div className="work-player">
      <div className="work-player-stage">
        <video
          ref={ref}
          src={project.video}
          poster={project.poster}
          controls
          playsInline
          preload="auto"
          aria-label={`${project.title} — video with audio`}
          onPlaying={() => setNeedsPlay(false)}
          onError={() => setFailed(true)}
        />
        {needsPlay && !failed && (
          <button
            type="button"
            className="button work-player-start"
            onClick={() => {
              ref.current.muted = false;
              ref.current
                .play()
                .then(() => setNeedsPlay(false))
                .catch(() => setNeedsPlay(true));
            }}
          >
            <Play size={18} /> Play with sound
          </button>
        )}
        {failed && (
          <div className="work-player-error" role="alert">
            This video couldn’t load.{" "}
            <a href={project.video}>Open the video directly</a>.
          </div>
        )}
      </div>
      <div className="work-player-caption">
        <span>{project.name} / ADMIND CREATIVE</span>
        <h3>{project.title}</h3>
        <p>Use the player controls to pause, adjust sound or go full screen.</p>
      </div>
    </div>
  );
}
