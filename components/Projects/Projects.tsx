import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Bank Loan Automation & Financial Analytics",
      image: "/projects/bank-loan.jpg",
      tech: "Power BI, SQL, Data Analytics",
      description:
        "Analyzed loan approval trends, default analysis and financial insights using interactive Power BI dashboards.",
    },

    {
      title: "Child Mortality Prediction",
      image: "/projects/child-mortality.jpg",
      tech: "Python, Machine Learning",
      description:
        "Built predictive models to estimate child mortality rates using supervised learning algorithms.",
    },

    {
      title: "Brightness Control Using Hand Gestures",
      image: "/projects/brightness-control.jpg",
      tech: "Python, OpenCV",
      description:
        "Implemented computer vision techniques to control screen brightness through hand gesture recognition.",
    },

    {
      title: "FacePay Scanner",
      image: "/projects/facepay.jpg",
      tech: "Machine Learning, Face Recognition",
      description:
        "Developed a facial recognition based payment authentication system for secure transactions.",
    },

    // NEW PROJECT 1

    {
      title: "AI Resume Analyzer & Career Recommendation System",
      image: "/projects/ai-resume-analyzer.png",
      tech: "Python, NLP, AI/ML, React, FastAPI, LLM",
      description:
        "Developed an AI-powered resume analysis platform that extracts skills, evaluates resume quality, matches resumes with job descriptions, identifies missing skills, and provides career improvement suggestions using NLP and AI techniques.",
    },


    // NEW PROJECT 2

    {
      title: "AI Productivity Google Chrome Extension",
      image: "/projects/chrome-extension.jpg",
      tech: "JavaScript, React, Chrome API, HTML, CSS",
      description:
        "Built a smart Chrome extension that improves user productivity by automating browser tasks, enhancing workflow efficiency, and providing AI-powered browser utilities using Chrome Extension APIs.",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "#111827",
        color: "#fff",
        padding: "80px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Projects
        </h2>


        <div
          style={{
            display:
              "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "24px",
          }}
        >

          {projects.map((project) => (

            <div
              key={project.title}
              style={{
                background: "#1f2937",
                borderRadius: "18px",
                overflow: "hidden",
                transition: "0.3s ease",
              }}
            >

              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />


              <div
                style={{
                  padding: "20px",
                }}
              >

                <h3
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {project.title}
                </h3>


                <p
                  style={{
                    color: "#60a5fa",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {project.tech}
                </p>


                <p
                  style={{
                    lineHeight: 1.7,
                    color: "#d1d5db",
                  }}
                >
                  {project.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}