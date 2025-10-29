'use client';

import { useMemo, useState } from "react";
import type { LanguageTrack } from "../data/content";

type TrackPlannerProps = {
  tracks: LanguageTrack[];
};

const levelColor: Record<LanguageTrack["level"], string> = {
  Beginner: "rgba(74, 222, 128, 0.2)",
  Intermediate: "rgba(251, 191, 36, 0.25)",
  Advanced: "rgba(248, 113, 113, 0.25)"
};

export function TrackPlanner({ tracks }: TrackPlannerProps) {
  const [activeTrackId, setActiveTrackId] = useState<string>(tracks[0].id);

  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === activeTrackId) ?? tracks[0],
    [activeTrackId, tracks]
  );

  return (
    <div className="grid grid-2">
      <div className="card" style={{ gap: "18px" }}>
        <h3>Pick your momentum goal</h3>
        <p>
          Each track blends adaptive lessons, conversation labs, and spaced
          repetition to keep your progress curve rising steadily.
        </p>

        <div className="chip-group">
          {tracks.map((track) => (
            <button
              key={track.id}
              type="button"
              onClick={() => setActiveTrackId(track.id)}
              style={{
                padding: "12px 18px",
                borderRadius: "16px",
                border:
                  track.id === activeTrackId
                    ? "1px solid rgba(96, 165, 250, 0.7)"
                    : "1px solid rgba(148, 163, 184, 0.28)",
                background:
                  track.id === activeTrackId
                    ? "linear-gradient(135deg, rgba(56, 189, 248, 0.35), rgba(37, 99, 235, 0.35))"
                    : "rgba(15, 23, 42, 0.55)",
                color: "rgba(226, 232, 240, 0.9)",
                cursor: "pointer",
                fontSize: "0.95rem",
                letterSpacing: "0.01em",
                transition: "transform 180ms ease, border-color 180ms ease",
                fontWeight: track.id === activeTrackId ? 600 : 500
              }}
            >
              {track.name}
            </button>
          ))}
        </div>
        <p style={{ fontSize: "0.85rem", color: "rgba(148,163,184,0.75)" }}>
          Tracks auto-adjust each Monday based on streaks, time availability,
          and areas that need reinforcement.
        </p>
      </div>

      <div className="card" style={{ gap: "20px" }}>
        <span
          className="chip"
          style={{
            alignSelf: "flex-start",
            background: levelColor[activeTrack.level],
            border: "1px solid rgba(148, 163, 184, 0.35)",
            color: "rgba(226, 232, 240, 0.95)"
          }}
        >
          {activeTrack.level}
        </span>
        <div>
          <h3>{activeTrack.name}</h3>
          <p>{activeTrack.nextMilestone}</p>
        </div>
        <div>
          <p style={{ fontSize: "0.85rem", marginBottom: "8px" }}>
            Focus pillars
          </p>
          <div className="chip-group">
            {activeTrack.focus.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="metrics-bar" style={{ marginTop: "8px" }}>
          <div className="metric">
            <strong>{activeTrack.weeklyHours} hrs</strong>
            Weekly commitment
          </div>
          <div className="metric">
            <strong>{activeTrack.progress}%</strong>
            Track completion
            <div className="progress-bar" style={{ marginTop: "12px" }}>
              <span style={{ width: `${activeTrack.progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
