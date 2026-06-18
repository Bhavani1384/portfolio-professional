
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef, useState } from "react";

import styles from "./VideoIntro.module.css";
import CinematicLayer from "../CinematicLayer/CinematicLayer";

type VideoIntroProps = {
  videoSrc: string;
  firstName: string;
  lastName: string;
  tagline: string;
  role: string;
};

export default function VideoIntro({
  videoSrc,
  firstName,
  lastName,
  tagline,
  role,
}: VideoIntroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLButtonElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  const foregroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          `.${styles.heroShell}`,
          `.${styles.tagline}`,
          `.${styles.nameLine}`,
          `.${styles.role}`,
          `.${styles.controls}`,
          `.${styles.scrollIndicator}`,
        ],
        {
          opacity: 0,
        }
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(`.${styles.heroShell}`, {
        opacity: 1,
        duration: 1.2,
      })
        .to(
          `.${styles.tagline}`,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.65"
        )
        .to(
          `.${styles.nameLine}`,
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
          },
          "-=0.5"
        )
        .to(
          `.${styles.role}`,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.65"
        )
        .to(
          `.${styles.controls}`,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.55"
        )
        .to(
          `.${styles.scrollIndicator}`,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.45"
        );

      gsap.to(`.${styles.pulseLine}`, {
        scaleY: 0.35,
        transformOrigin: "top center",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1.2,
      });

      gsap.to(`.${styles.soundHint}`, {
        y: -4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1.3,
      });
    }, sectionRef);

    const hintTimer = window.setTimeout(() => {
      setShowHint(false);
    }, 4200);

    return () => {
      ctx.revert();
      window.clearTimeout(hintTimer);
    };
  }, []);

  useEffect(() => {
    const fg = foregroundVideoRef.current;
    const bg = backgroundVideoRef.current;
    if (!fg || !bg) return;

    fg.muted = isMuted;
    bg.muted = true;

    const syncPlayState = async () => {
      try {
        if (isPlaying) {
          await fg.play();
          await bg.play();
        } else {
          fg.pause();
          bg.pause();
        }
      } catch {
        setIsPlaying(false);
      }
    };

    syncPlayState();
  }, [isMuted, isPlaying]);

  const toggleMute = async () => {
    const fg = foregroundVideoRef.current;
    if (!fg) return;

    try {
      const nextMuted = !isMuted;
      fg.muted = nextMuted;
      setIsMuted(nextMuted);

      if (!isPlaying) {
        await fg.play();
        setIsPlaying(true);
      }
    } catch {
      setIsMuted(true);
    }
  };

  const togglePlay = async () => {
    const fg = foregroundVideoRef.current;
    const bg = backgroundVideoRef.current;
    if (!fg || !bg) return;

    try {
      if (isPlaying) {
        fg.pause();
        bg.pause();
        setIsPlaying(false);
      } else {
        await fg.play();
        await bg.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const scrollToNext = () => {
    const next = document.getElementById("next-section");
    if (!next) return;

    next.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div className={styles.stickyFrame}>
        <div className={styles.heroShell}>
          <div className={styles.backgroundVideoWrap} aria-hidden="true">
            <video
              ref={backgroundVideoRef}
              className={styles.backgroundVideo}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>

          <div className={styles.overlayDark} />
          <div className={styles.overlayWarm} />
          <div className={styles.overlayVignette} />

          <CinematicLayer intensity={1} />

          <div className={styles.foregroundMedia}>
            <div className={styles.foregroundGlow} />
            <video
              ref={foregroundVideoRef}
              className={styles.foregroundVideo}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>

          <div ref={contentRef} className={styles.content}>
            <p className={styles.tagline}>{tagline}</p>

            <h1 className={styles.name}>
              <span className={styles.nameLine}>{firstName}</span>
              <span className={styles.nameLine}>{lastName}</span>
            </h1>

            <p className={styles.role}>{role}</p>
          </div>

          <div ref={controlsRef} className={`${styles.controls} ${styles.controls}`}>
            <button
              type="button"
              className={styles.glassButton}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <span className={styles.iconPause} aria-hidden="true" />
              ) : (
                <span className={styles.iconPlay} aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              className={styles.glassButton}
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <span className={styles.iconMuted} aria-hidden="true">
                  <span />
                </span>
              ) : (
                <span className={styles.iconSound} aria-hidden="true">
                  <span />
                  <span />
                </span>
              )}
            </button>
          </div>

          {showHint && (
            <div ref={hintRef} className={styles.soundHint}>
              <span className={styles.soundDot} />
              Tap for sound
            </div>
          )}

          <button
            ref={scrollRef}
            type="button"
            className={styles.scrollIndicator}
            onClick={scrollToNext}
            aria-label="Scroll to next section"
          >
            
            
            
          </button>
        </div>
      </div>
    </section>
  );
}
