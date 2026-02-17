export interface TimelineStep {
  number: number;
  title: string;
  text: string;
}

export function Timeline({
  title,
  steps,
}: {
  title: string;
  steps: TimelineStep[];
}) {
  return (
    <section className="section-timeline">
      <div className="container">
        <h2 className="timeline-title">
          <span className="timeline-title-line" aria-hidden />
          {title}
          <span className="timeline-title-line" aria-hidden />
        </h2>
        <div className="timeline">
          <div className="timeline-line" aria-hidden />
          {steps.map((step) => (
            <div key={step.number} className="timeline-step">
              <div className="timeline-marker">
                <span className="timeline-number">{step.number}</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-step-title">{step.title}</h3>
                <p className="timeline-step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

