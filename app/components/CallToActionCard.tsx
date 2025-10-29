export function CallToActionCard() {
  return (
    <div className="card">
      <div className="cta-card">
        <div>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "12px" }}>
            Ready for your placement sprint?
          </h3>
          <p style={{ fontSize: "1rem" }}>
            Start with a 10-minute adaptive assessment. We will calibrate your
            voice profile, current CEFR level, and time availability to craft a
            plan that actually fits your schedule.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button type="button">Launch assessment</button>
          <p style={{ fontSize: "0.8rem", margin: 0, color: "rgba(226,232,240,0.75)" }}>
            Takes under 10 minutes. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}
