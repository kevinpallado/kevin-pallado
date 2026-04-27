export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="num">01</span>About
            </div>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              A developer <em>who owns</em> the whole system.
            </h2>
          </div>
          <div className="section-kicker">
            From database schema and architecture diagrams to deployment, production support, and the
            phone call when something breaks.
          </div>
        </div>

        <div className="about-grid">
          <div>
            <p className="about-lede">
              I&apos;m Kevin — a fullstack engineer who&apos;s spent the last seven years{" "}
              <em>building the platforms</em> that businesses actually run on, across real estate,
              AI, fintech, and my own local industry back home.
            </p>

            <div className="about-pillars">
              <Pillar
                num="01"
                title="Systems thinker, not a feature factory"
                body="I start with the workflow, map it to a clean MVC + service-layer architecture, and design so the thing is still maintainable five years in."
              />
              <Pillar
                num="02"
                title="End-to-end ownership"
                body="Planning, architecture, delivery, deployment, and ongoing support — I don't hand off the hard parts. LondonFoster and Quansys are proof."
              />
              <Pillar
                num="03"
                title="Comfortable across stacks"
                body="PHP, Python, Node, React, SvelteKit — AWS, Stripe, Claude & OpenAI APIs. Right tool, not the favorite tool."
              />
              <Pillar
                num="04"
                title="Fluent with AI in daily work"
                body="Daily driver of Claude Code with custom Skills, MCP servers, and subagents — shipping faster without losing the architecture."
              />
            </div>
          </div>

          <div className="about-body">
            <p>
              I got my start at <strong>Xavier University&apos;s College of Agriculture</strong>{" "}
              building tablet apps for field research and training farmers on them. That taught me
              early that software lives or dies by whether real people can use it.
            </p>
            <p>
              From there I spent two years at <strong>PrinceTechnologies</strong> maintaining and
              extending PRISMS — a multi-client enrollment platform — and picking up IoT and embedded
              work on the side.
            </p>
            <p>
              Since 2021 I&apos;ve been the engineer behind{" "}
              <strong>LondonFoster Real Estate&apos;s</strong> internal and public platforms in
              Miami-Dade. Alongside that I&apos;ve worked with <strong>Fraia</strong> in Bangkok on
              RAG evaluation tooling and <strong>Grantable</strong> in the US on Stripe billing and
              LLM integrations.
            </p>
            <p>
              And on my own time, I built <strong>Quansys</strong> — an accounting and purchase-order
              platform running daily at a family-operated gasoline station in Cagayan de Oro.
              It&apos;s the project I&apos;m proudest of: a real business depends on it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="pillar">
      <div className="pillar-num">{num}</div>
      <div>
        <h3 className="pillar-title">{title}</h3>
        <p className="pillar-body">{body}</p>
      </div>
    </div>
  );
}
