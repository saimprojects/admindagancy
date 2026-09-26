import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function WorkVideoCard({
  project,
  index,
  playerOpen,
  onSelect,
}) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(cardRef.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (loaded && visible && engaged && pageVisible && !playerOpen) {
      video.muted = true;
      video.play().catch(() => {
        // The poster remains available when a browser disallows preview playback.
      });
    } else video.pause();
    return () => video.pause();
  }, [loaded, visible, engaged, pageVisible, playerOpen]);

  return (
    <button
      ref={cardRef}
      type="button"
      // React must retain the reveal class when playback changes className.
      // `loaded` stays true after the first visit, including after scrolling away.
      className={`work-card work-video-card reveal ${loaded ? "is-visible" : ""} ${playing ? "is-playing" : ""}`}
      style={{ "--delay": `${index * 100}ms` }}
      aria-label={`Play video ${index + 1}: ${project.title} with sound`}
      aria-haspopup="dialog"
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setEngaged(true);
      }}
      onPointerLeave={() => setEngaged(false)}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) setEngaged(true);
      }}
      onBlur={() => setEngaged(false)}
      onClick={() => {
        videoRef.current.pause();
        setEngaged(false);
        onSelect(project);
      }}
    >
      <div className="work-image work-video-image">
        <video
          ref={videoRef}
          src={loaded ? project.video : undefined}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setPlaying(false)}
        />
        <div className="work-image-top">
          <span>{project.name}</span>
          <span className="work-concept">0{index + 1} / VIDEO</span>
        </div>
        <div className="video-preview-hint" aria-hidden="true">
          {playing ? <VolumeX size={15} /> : <Play size={15} />}
          <span>{playing ? "Muted preview" : "Hover to preview"}</span>
        </div>
        <div className="work-video-action" aria-hidden="true">
          <span>
            <Volume2 size={16} />
            <span className="video-click-copy">Click for sound</span>
            <span className="video-tap-copy">Tap to watch</span>
          </span>
          <span className="round-arrow">
            <Play size={19} fill="currentColor" />
          </span>
        </div>
      </div>
      <div className="work-meta">
        <div>
          <h3>{project.title}</h3>
          <p>{project.service}</p>
        </div>
        <span>0{index + 1}</span>
      </div>
    </button>
  );
}
