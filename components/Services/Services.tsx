"use client";

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Building scalable, efficient and user-friendly software applications using modern programming technologies.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Developing responsive and interactive websites using HTML, CSS, JavaScript, React and Next.js.",
    },
    {
      icon: "🚀",
      title: "Full Stack Development",
      description:
        "Creating complete web applications with frontend, backend, databases and cloud integration.",
    },
    {
      icon: "🤖",
      title: "AI / ML Solutions",
      description:
        "Developing intelligent systems using Machine Learning, predictive analytics and data-driven models.",
    },
    {
      icon: "🔐",
      title: "Cyber Security",
      description:
        "Security analysis, vulnerability assessment, risk management and secure application practices.",
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description:
        "Creating Power BI dashboards and transforming data into meaningful business insights.",
    },
  ];

  return (
    <section
      id="services"
      style={{
        background:
          "linear-gradient(180deg, #050816 0%, #0a1124 100%)",
        color: "#fff",
        padding: "120px 40px",
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
          Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "35px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.25)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                  color: "#ffffff",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  fontSize: "15px",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}