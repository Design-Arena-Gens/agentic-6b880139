import type { LearningStep } from "../data/content";

type LearningPathProps = {
  steps: LearningStep[];
};

export function LearningPath({ steps }: LearningPathProps) {
  return (
    <div className="learning-path">
      {steps.map((step) => (
        <div key={step.id} className="card">
          <div className="learning-step">
            <strong>{step.id}</strong>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
          <div
            style={{
              marginTop: "6px",
              padding: "12px 16px",
              borderRadius: "14px",
              border: "1px solid rgba(96, 165, 250, 0.25)",
              background: "rgba(37, 99, 235, 0.15)",
              color: "rgba(226,232,240,0.95)"
            }}
          >
            Outcome: {step.outcome}
          </div>
        </div>
      ))}
    </div>
  );
}
