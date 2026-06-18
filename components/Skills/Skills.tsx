"use client";

import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "Java", image: "/skills/java.png" },
    { name: "Python", image: "/skills/python.jpg" },
    { name: "JavaScript", image: "/skills/javascript.png" },
    { name: "React", image: "/skills/react.png" },
    { name: "Next.js", image: "/skills/nextjs.png" },
    { name: "HTML", image: "/skills/html.png" },
    { name: "CSS", image: "/skills/css.png" },
    { name: "MySQL", image: "/skills/mysql.jpg" },
    { name: "MongoDB", image: "/skills/mongodb.png" },
    { name: "Power BI", image: "/skills/powerbi.png" },
    { name: "AWS", image: "/skills/aws.png" },
    { name: "Azure", image: "/skills/azure.png" },
    { name: "Git", image: "/skills/git.png" },
    { name: "GitHub", image: "/skills/github.png" },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "120px 40px",
        background:
          "linear-gradient(180deg,#050816 0%,#081229 100%)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "70px",
            fontWeight: "700",
          }}
        >
          Technical Skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "25px",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                background:
                  "rgba(255,255,255,0.05)",
                backdropFilter: "blur(15px)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "30px",
                textAlign: "center",
                boxShadow:
                  "0 0 25px rgba(59,130,246,0.15)",
                transition: "0.3s ease",
              }}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={70}
                height={70}
                style={{
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                }}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}