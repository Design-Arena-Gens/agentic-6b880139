'use client';

import { useMemo, useState } from "react";

type Flashcard = {
  id: string;
  term: string;
  translation: string;
  context: string;
  language: string;
};

const flashcards: Flashcard[] = [
  {
    id: "card-1",
    term: "encantado",
    translation: "delighted",
    context: "Encantado de conocerte.",
    language: "Spanish"
  },
  {
    id: "card-2",
    term: "maîtriser",
    translation: "to master",
    context: "Je veux maîtriser le français rapidement.",
    language: "French"
  },
  {
    id: "card-3",
    term: "よろしくお願いします",
    translation: "I look forward to working with you",
    context: "はじめまして。よろしくお願いします。",
    language: "Japanese"
  }
];

export function FlashcardTrainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const activeCard = useMemo(
    () => flashcards[activeIndex],
    [activeIndex]
  );

  const cycle = (direction: 1 | -1) => {
    setRevealed(false);
    setActiveIndex((prev) =>
      (prev + direction + flashcards.length) % flashcards.length
    );
  };

  return (
    <div
      className="card"
      style={{
        gap: "20px",
        background: "rgba(15,23,42,0.6)",
        border: "1px solid rgba(96,165,250,0.3)"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ marginBottom: 0 }}>Adaptive flashcards</h3>
        <span
          className="chip"
          style={{
            background: "rgba(37, 99, 235, 0.2)",
            border: "1px solid rgba(96, 165, 250, 0.4)"
          }}
        >
          {activeCard.language}
        </span>
      </div>
      <div
        style={{
          background: "rgba(15, 23, 42, 0.75)",
          borderRadius: "18px",
          border: "1px solid rgba(148, 163, 184, 0.25)",
          padding: "26px",
          textAlign: "center"
        }}
      >
        <p style={{ fontSize: "0.9rem", textTransform: "uppercase" }}>
          Front
        </p>
        <h3 style={{ fontSize: "2rem" }}>{activeCard.term}</h3>
        <p style={{ fontSize: "0.95rem", color: "rgba(203,213,225,0.75)" }}>
          {activeCard.context}
        </p>
        <button
          type="button"
          onClick={() => setRevealed((prev) => !prev)}
          style={{
            marginTop: "18px",
            padding: "10px 18px",
            borderRadius: "12px",
            border: "1px solid rgba(96, 165, 250, 0.45)",
            background: "rgba(37, 99, 235, 0.2)",
            color: "rgba(226, 232, 240, 0.95)",
            cursor: "pointer",
            fontWeight: 600,
            letterSpacing: "0.02em"
          }}
        >
          {revealed ? "Hide translation" : "Reveal translation"}
        </button>
        {revealed && (
          <div style={{ marginTop: "18px" }}>
            <p
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                color: "rgba(148,163,184,0.7)",
                marginBottom: "6px"
              }}
            >
              Back
            </p>
            <strong style={{ fontSize: "1.5rem" }}>
              {activeCard.translation}
            </strong>
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          type="button"
          onClick={() => cycle(-1)}
          style={navButtonStyle}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => cycle(1)}
          style={navButtonStyle}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const navButtonStyle: React.CSSProperties = {
  padding: "12px 20px",
  borderRadius: "12px",
  border: "1px solid rgba(148,163,184,0.35)",
  background: "rgba(15,23,42,0.55)",
  color: "rgba(226,232,240,0.95)",
  cursor: "pointer",
  fontWeight: 600,
  letterSpacing: "0.03em"
};
