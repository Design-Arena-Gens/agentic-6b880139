import { CallToActionCard } from "./components/CallToActionCard";
import { FlashcardTrainer } from "./components/FlashcardTrainer";
import { LearningPath } from "./components/LearningPath";
import { LessonShowcase } from "./components/LessonShowcase";
import { MicroDrillBoard } from "./components/MicroDrillBoard";
import { ProgressInsights } from "./components/ProgressInsights";
import { TrackPlanner } from "./components/TrackPlanner";
import { drills, learningPath, lessons, tracks } from "./data/content";

export default function HomePage() {
  return (
    <main>
      <section>
        <div className="badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h7l1.418 2.836A2 2 0 0 0 13.151 7h7.85m-3.35 5A6.65 6.65 0 1 1 10 5.35"
            />
          </svg>
          AI-guided polyglot companion
        </div>
        <h1>LinguaLift</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "640px" }}>
          Grow confident in a new language with adaptive storytelling lessons,
          real-time pronunciation coaching, and data-backed progress insights
          that keep you motivated every day.
        </p>
      </section>

      <section>
        <h2>Momentum blueprints</h2>
        <TrackPlanner tracks={tracks} />
      </section>

      <section>
        <h2>Today&apos;s smart lessons</h2>
        <LessonShowcase lessons={lessons} />
      </section>

      <section>
        <h2>Micro drills</h2>
        <MicroDrillBoard drills={drills} />
      </section>

      <section>
        <h2>Interactive coach</h2>
        <div className="grid grid-2">
          <FlashcardTrainer />
          <ProgressInsights />
        </div>
      </section>

      <section>
        <h2>Learning path</h2>
        <LearningPath steps={learningPath} />
      </section>

      <section>
        <h2>Next move</h2>
        <CallToActionCard />
      </section>
    </main>
  );
}
