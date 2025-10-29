import type { Lesson } from "../data/content";

type LessonShowcaseProps = {
  lessons: Lesson[];
};

export function LessonShowcase({ lessons }: LessonShowcaseProps) {
  return (
    <div className="grid grid-3">
      {lessons.map((lesson) => (
        <article key={lesson.id} className="card">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              className="chip"
              style={{
                fontSize: "0.8rem",
                padding: "8px 12px",
                background: "rgba(59,130,246,0.18)",
                color: "rgba(191,219,254,0.95)"
              }}
            >
              {lesson.duration}
            </span>
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                fontSize: "0.8rem",
                color: "rgba(203,213,225,0.75)"
              }}
            >
              {lesson.skills.join(" • ")}
            </div>
          </div>
          <div>
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
          </div>
          <div className="chip-group">
            {lesson.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
