type Insight = {
  label: string;
  value: string;
  description: string;
  progress?: number;
};

const insights: Insight[] = [
  {
    label: "Speaking streak",
    value: "27 days",
    description: "Consistent AI conversation labs unlocked advanced drills."
  },
  {
    label: "Vocabulary retention",
    value: "92%",
    description: "High retention thanks to smart spaced repetition scheduling.",
    progress: 92
  },
  {
    label: "Live sessions booked",
    value: "3 this month",
    description: "Coach-led sessions refine intonation and natural flow."
  }
];

export function ProgressInsights() {
  return (
    <div className="card" style={{ gap: "20px" }}>
      <h3>Progress insights</h3>
      <div className="metrics-bar">
        {insights.map((insight) => (
          <div key={insight.label} className="metric">
            <strong>{insight.value}</strong>
            <span style={{ display: "block", marginBottom: "6px" }}>
              {insight.label}
            </span>
            <p style={{ fontSize: "0.85rem", margin: 0 }}>{insight.description}</p>
            {typeof insight.progress === "number" && (
              <div className="progress-bar" style={{ marginTop: "12px" }}>
                <span style={{ width: `${insight.progress}%` }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
