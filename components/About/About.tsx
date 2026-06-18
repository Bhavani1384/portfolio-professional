import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#050816 0%,#071120 50%,#0b1730 100%)",
        color: "white",
        padding: "120px 50px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Background */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#2563eb",
          filter: "blur(180px)",
          opacity: 0.2,
          top: "-150px",
          left: "-100px",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "#7c3aed",
          filter: "blur(150px)",
          opacity: 0.15,
          bottom: "-100px",
          right: "-100px",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Side Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              padding: "8px",
              background:
                "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              boxShadow:
                "0 0 80px rgba(59,130,246,0.6)",
            }}
          >
            <Image
              src="/profile.png"
              alt="Bhavani"
              width={350}
              height={350}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "30px",
            padding: "50px",
            boxShadow:
              "0 0 50px rgba(59,130,246,0.15)",
          }}
        >
          <h2
            style={{
              fontSize: "3.5rem",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            About Me
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "2",
              color: "#d1d5db",
            }}
          >
            I'm <span style={{ color: "#60a5fa" }}>Bhavani Konga</span>,
            a Software Developer and Computer Science Engineer
            specializing in Cyber Security.
            I am passionate about building scalable applications,
            solving real-world problems through AI/ML, and creating
            modern digital experiences using cutting-edge technologies.
          </p>

          <p
            style={{
              marginTop: "20px",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#9ca3af",
            }}
          >
            My interests span Software Development, Full Stack Development, Cloud Computing,
            DevOps, Machine Learning, Data Analytics, and Cyber Security.
            I enjoy transforming innovative ideas into impactful solutions
            while continuously learning emerging technologies.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "20px",
              }}
            >
              <h3 style={{ color: "#60a5fa", fontSize: "2rem" }}>4+</h3>
              <p>Projects</p>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "20px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "20px",
              }}
            >
              <h3 style={{ color: "#60a5fa", fontSize: "2rem" }}>5+</h3>
              <p>Certifications</p>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "20px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "20px",
              }}
            >
              <h3 style={{ color: "#60a5fa", fontSize: "2rem" }}>2026</h3>
              <p>Graduate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}