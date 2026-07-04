import { techStack } from '@/data/experience';

function splitIntoColumns(items, columns) {
  const cols = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => cols[i % columns].push(item));
  return cols;
}

export default function TechMarquee() {
  const cols = splitIntoColumns(techStack, 4);

  return (
    <section className="marquee-section" aria-label="Technology stack">
      <div className="container">
        <div className="marquee-cols">
          {cols.map((col, i) => {
            const looped = [...col, ...col];
            return (
              <div className={`marquee-col ${i % 2 === 1 ? 'down' : ''}`} key={i}>
                <div className="marquee-track" style={{ animationDuration: `${16 + i * 3}s` }}>
                  {looped.map((tech, idx) => (
                    <span className="tech-chip" key={`${tech}-${idx}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
