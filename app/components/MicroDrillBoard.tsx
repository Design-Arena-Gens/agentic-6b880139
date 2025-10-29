'use client';

import { useState } from "react";
import type { MicroDrill } from "../data/content";

type MicroDrillBoardProps = {
  drills: MicroDrill[];
};

const drillAccent: Record<MicroDrill["type"], string> = {
  listening: "rgba(56, 189, 248, 0.25)",
  grammar: "rgba(192, 132, 252, 0.25)",
  vocabulary: "rgba(251, 191, 36, 0.25)"
};

export function MicroDrillBoard({ drills }: MicroDrillBoardProps) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setRevealed((current) => ({ ...current, [id]: !current[id] }));

  return (
    <div className="grid grid-3">
      {drills.map((drill) => (
        <article
          key={drill.id}
          className="card"
          style={{
            border: `1px solid ${drillAccent[drill.type]}`,
            background: "rgba(15,23,42,0.55)"
          }}
        >
          <span
            className="chip"
            style={{
              alignSelf: "flex-start",
              background: drillAccent[drill.type],
              color: "rgba(226,232,240,0.92)"
            }}
          >
            {drill.type.toUpperCase()}
          </span>
          <h3>{drill.prompt}</h3>
          <p style={{ fontStyle: "italic" }}>{drill.example}</p>
          <button
            type="button"
            onClick={() => toggle(drill.id)}
            style={{
              padding: "10px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(148, 163, 184, 0.25)",
              background: "rgba(37, 99, 235, 0.2)",
              color: "rgba(226, 232, 240, 0.95)",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.02em"
            }}
          >
            {revealed[drill.id] ? "Hide coaching tip" : "Reveal coaching tip"}
          </button>
          {revealed[drill.id] && (
            <p style={{ color: "rgba(96, 165, 250, 0.95)" }}>{drill.answer}</p>
          )}
        </article>
      ))}
    </div>
  );
}
