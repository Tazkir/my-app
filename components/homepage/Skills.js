import { skills } from "../../utils/data";

function Skill() {
  return (
    <div class="layer relative flex overflow-hidden h-20">
      <div class="rounded-full animate-loop flex items-center gap-[--gap] [--gap:theme(spacing.5)] hover:[animation-play-state:paused]">
        {skills.map((skill, i) => (
          <div className="skill" key={i}>
            {skill}
          </div>
        ))}
        {skills.map((skill, i) => (
          <div className="skill" key={i}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
