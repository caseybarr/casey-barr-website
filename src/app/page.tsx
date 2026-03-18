"use client";

import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible] as const;
};

const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const ExternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const experiences = [
  {
    company: "Redwood Software",
    role: "Engagement Manager â Enterprise AI & Automation",
    desc: "activating enterprise automation across Fortune 500 portfolios",
    current: true,
  },
  {
    company: "WorkBoard",
    role: "Enterprise Customer Success Lead",
    desc: "built champion communities of 250+ and drove 108% NRR across strategic accounts",
  },
  {
    company: "Booz Allen Hamilton",
    role: "Senior Consultant â Defense & Intelligence",
    desc: "led technology modernization for federal agencies with security clearance",
  },
  {
    company: "Gentiva Health Services",
    role: "Business Intelligence & Operations",
    desc: "built analytics capabilities from scratch across 500+ home health locations",
  },
];

const ventures = [
  {
    name: "Shortlist.ai",
    status: "Live",
    statusColor: "#059669",
    desc: "AI-powered job search platform that turns career context into strategy. Not another resume tool â a system that thinks with you.",
    url: "https://shortlist-ai.io",
    emoji: "ð¯",
  },
  {
    name: "Do North Strategy",
    status: "Active",
    statusColor: "#2563eb",
    desc: "Advisory for leaders navigating AI adoption. Helping orgs treat deployment as behavior change, not technology rollout.",
    emoji: "ð§­",
  },
  {
    name: "The Forge",
    status: "Seeding",
    statusColor: "#9333ea",
    desc: "Men's leadership and emotional development. Helping men who built careers on competence learn to lead from connection.",
    emoji: "ð¥",
  },
];

const companyGroups = [
  {
    industry: "Technology & Cloud",
    companies: [
      { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
      { name: "AWS", logo: "https://logo.clearbit.com/aws.amazon.com" },
      { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
      { name: "VMware", logo: "https://logo.clearbit.com/vmware.com" },
      {
        name: "Hewlett Packard Enterprise",
        logo: "https://logo.clearbit.com/hpe.com",
      },
      { name: "Workday", logo: "https://logo.clearbit.com/workday.com" },
    ],
  },
  {
    industry: "Defense & Aerospace",
    companies: [
      { name: "Boeing", logo: "https://logo.clearbit.com/boeing.com" },
      {
        name: "Raytheon Technologies",
        logo: "https://logo.clearbit.com/rtx.com",
      },
    ],
  },
  {
    industry: "Pharma & Life Sciences",
    companies: [
      { name: "Merck", logo: "https://logo.clearbit.com/merck.com" },
      {
        name: "Bristol-Myers Squibb",
        logo: "https://logo.clearbit.com/bms.com",
      },
      {
        name: "AstraZeneca",
        logo: "https://logo.clearbit.com/astrazeneca.com",
      },
    ],
  },
  {
    industry: "Financial Services",
    companies: [
      {
        name: "Morgan Stanley",
        logo: "https://logo.clearbit.com/morganstanley.com",
      },
      {
        name: "Western Union",
        logo: "https://logo.clearbit.com/westernunion.com",
      },
    ],
  },
  {
    industry: "Consumer & Retail",
    companies: [
      { name: "Nike", logo: "https://logo.clearbit.com/nike.com" },
      {
        name: "Chedraui",
        logo: "https://logo.clearbit.com/chedraui.com.mx",
      },
    ],
  },
  {
    industry: "Aviation",
    companies: [
      {
        name: "Air Canada",
        logo: "https://logo.clearbit.com/aircanada.com",
      },
    ],
  },
];

const contentLinks = [
  {
    title: "The Wayfinder",
    type: "Newsletter",
    desc: "Weekly field notes on navigating AI displacement, career transitions, and what the labor market actually looks like from inside it.",
    color: "#c2410c",
  },
  {
    title: "LinkedIn",
    type: "Writing",
    desc: "Where I think out loud about enterprise AI adoption, the displacement nobody's talking about, and building in public.",
    color: "#0369a1",
  },
  {
    title: "Shortlist.ai Blog",
    type: "Product",
    desc: "Deep dives on the job search system â what's broken, what AI actually fixes, and what it can't.",
    color: "#059669",
  },
];

export default function CaseyBarrSite() {
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fdf6ef 0%, #f5ebe0 25%, #ede4da 50%, #f0e6dc 75%, #faf5f0 100%)",
      }}
    >
      {/* Hero */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px 40px" }}>
        <FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center" }}>
            <div style={{ flex: "1 1 400px" }}>
              <h1
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(48px, 8vw, 72px)",
                  lineHeight: 1.05,
                  background:
                    "linear-gradient(135deg, #92400e 0%, #c2410c 40%, #9a3412 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 20,
                }}
              >
                Casey Barr
              </h1>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "#44403c",
                  maxWidth: 460,
                  marginBottom: 28,
                }}
              >
                I&apos;ve spent a decade getting Fortune 500s to actually use the
                software they buy â 60+ deployments across Boeing, Nike, Morgan
                Stanley, you name it. Somewhere around deployment forty I started
                noticing: every automation I activated made someone&apos;s role
                smaller. So now I&apos;m building for both sides.{" "}
                <strong style={{ color: "#92400e" }}>
                  Technology changes systems â people change everything else.
                </strong>
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a
                  href="https://www.linkedin.com/in/caseyabarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "linear-gradient(135deg, #92400e, #c2410c)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 2px 8px rgba(146, 64, 14, 0.25)",
                  }}
                >
                  <LinkedInIcon /> Connect on LinkedIn
                </a>
                <a
                  href="https://shortlist-ai.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "white",
                    color: "#44403c",
                    padding: "12px 24px",
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "1.5px solid #d6cdc5",
                    transition: "transform 0.2s, border-color 0.2s",
                  }}
                >
                  <ExternalIcon /> Shortlist.ai
                </a>
                <a
                  href="#newsletter"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "white",
                    color: "#44403c",
                    padding: "12px 24px",
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "1.5px solid #d6cdc5",
                    transition: "transform 0.2s, border-color 0.2s",
                  }}
                >
                  <ExternalIcon /> The Wayfinder
                </a>
              </div>
            </div>
            <div style={{ flex: "0 0 auto" }}>
              <div
                style={{
                  width: 240,
                  height: 280,
                  borderRadius: 20,
                  background: "linear-gradient(135deg, #d6cdc5, #c2b5a8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  border: "4px solid rgba(255,255,255,0.6)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #92400e22, #c2410c11)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    color: "#92400e",
                    fontWeight: 500,
                    textAlign: "center",
                    padding: 20,
                  }}
                >
                  [ your headshot here ]
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Experience */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, textAlign: "center", color: "#292524", marginBottom: 8 }}>Experience</h2>
          <p style={{ textAlign: "center", color: "#78716c", marginBottom: 32, fontSize: 16 }}>60+ enterprise technology deployments across defense, health, SaaS, and automation</p>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                style={{
                  background: "white",
                  borderRadius: 14,
                  padding: "20px 24px",
                  borderLeft: `4px solid ${exp.current ? "#c2410c" : "#d6cdc5"}`,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                  <strong style={{ fontSize: 16, color: "#292524" }}>
                    {exp.role} â {exp.company}
                  </strong>
                  {exp.current && (
                    <span
                      style={{
                        background: "#c2410c",
                        color: "white",
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "2px 10px",
                        borderRadius: 20,
                        letterSpacing: 0.5,
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 15, color: "#78716c" }}>{exp.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Ventures */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, textAlign: "center", color: "#292524", marginBottom: 8 }}>What I&apos;m Building</h2>
          <p style={{ textAlign: "center", color: "#78716c", marginBottom: 32, fontSize: 16 }}>Three ventures across a single AI transition thesis</p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {ventures.map((v, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: 28,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.3s, transform 0.3s",
                  cursor: v.url ? "pointer" : "default",
                  height: "100%",
                }}
                onClick={() => v.url && window.open(v.url, "_blank")}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{v.emoji}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#292524" }}>{v.name}</h3>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: v.statusColor,
                      background: `${v.statusColor}15`,
                      padding: "2px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {v.status}
                  </span>
                </div>
                <p style={{ fontSize: 15, color: "#78716c", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Companies */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, textAlign: "center", color: "#292524", marginBottom: 8 }}>Enterprise Clients I&apos;ve Activated</h2>
          <p style={{ textAlign: "center", color: "#78716c", marginBottom: 32, fontSize: 16 }}>Deployments across defense, pharma, financial services, tech, and global retail</p>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {companyGroups.map((group, gi) => (
            <FadeIn key={gi} delay={gi * 0.08}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#a8a29e", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10, paddingLeft: 4 }}>{group.industry}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {group.companies.map((c, ci) => {
                    const key = `${gi}-${ci}`;
                    return (
                      <span
                        key={key}
                        onMouseEnter={() => setHoveredCompany(key)}
                        onMouseLeave={() => setHoveredCompany(null)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 10,
                          background: hoveredCompany === key ? "#92400e" : "white",
                          color: hoveredCompany === key ? "white" : "#57534e",
                          padding: "10px 20px",
                          borderRadius: 12,
                          fontSize: 14,
                          fontWeight: 500,
                          border: "1.5px solid #e7e0d8",
                          transition: "all 0.2s",
                          cursor: "default",
                          boxShadow:
                            hoveredCompany === key
                              ? "0 4px 12px rgba(146,64,14,0.2)"
                              : "0 1px 2px rgba(0,0,0,0.03)",
                        }}
                      >
                        <img
                          src={c.logo}
                          alt=""
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 4,
                            objectFit: "contain",
                            filter:
                              hoveredCompany === key
                                ? "brightness(0) invert(1)"
                                : "none",
                            transition: "filter 0.2s",
                          }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                        {c.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Content */}
      <div id="newsletter" style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, textAlign: "center", color: "#292524", marginBottom: 8 }}>Where I Write</h2>
          <p style={{ textAlign: "center", color: "#78716c", marginBottom: 32, fontSize: 16 }}>Thinking out loud about AI adoption, career navigation, and building in public</p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          {contentLinks.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: 24,
                  borderTop: `3px solid ${c.color}`,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: c.color, textTransform: "uppercase", letterSpacing: 1 }}>{c.type}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#292524", margin: "8px 0" }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: "#78716c", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* About */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 32px" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, textAlign: "center", color: "#292524", marginBottom: 4 }}>A Bit More About Me</h2>
          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #92400e, #c2410c)", margin: "0 auto 32px", borderRadius: 2 }} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div
            style={{
              background: "white",
              borderRadius: 20,
              padding: "36px 32px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            <p style={{ fontSize: 17, color: "#44403c", lineHeight: 1.8, marginBottom: 20 }}>
              I&apos;m a builder who ended up in enterprise software â and I keep finding
              ways to build things anyway. Redwood pays me to activate automation
              strategies across Fortune 500s. But the thing that gets me out of bed is
              the question nobody in those boardrooms is asking:{" "}
              <em>what happens to the people on the other side of all this efficiency?</em>
            </p>
            <p style={{ fontSize: 17, color: "#44403c", lineHeight: 1.8, marginBottom: 20 }}>
              That question turned into Shortlist.ai â a job search tool I&apos;m building
              because I watched the existing ones fail everyone I know. It turned into a
              newsletter called The Wayfinder. And eventually it&apos;ll turn into The Forge,
              a program for men trying to figure out who they are when the title stops
              being enough.
            </p>
            <p style={{ fontSize: 17, color: "#44403c", lineHeight: 1.8 }}>
              Outside of all that: I&apos;m a dad to Lily, a husband, and someone who
              believes the non-negotiables ARE the strategy â family, fitness, sleep.
              I&apos;m based in LA. I read too many macro research reports. And I&apos;m
              convinced the most important skill of the next decade isn&apos;t prompting
              AI â it&apos;s knowing who you are without a job title.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <FadeIn>
        <div style={{ textAlign: "center", padding: "40px 24px 60px", color: "#a8a29e", fontSize: 14 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 16 }}>
            <a href="https://www.linkedin.com/in/caseyabarr" target="_blank" rel="noopener noreferrer" style={{ color: "#78716c", textDecoration: "none" }}>LinkedIn</a>
            <a href="https://shortlist-ai.io" target="_blank" rel="noopener noreferrer" style={{ color: "#78716c", textDecoration: "none" }}>Shortlist.ai</a>
            <a href="mailto:caseybarrman@gmail.com" style={{ color: "#78716c", textDecoration: "none" }}>Email</a>
          </div>
          <p>Casey Barr â Los Angeles, CA</p>
        </div>
      </FadeIn>
    </div>
  );
}
