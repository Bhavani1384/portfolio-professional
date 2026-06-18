import Image from "next/image";

export default function Education() {
  return (
    <section
      id="education"
      style={{
        background:
          "linear-gradient(180deg,#050816 0%,#0b1120 50%,#050816 100%)",
        color: "white",
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
            fontWeight: "bold",
          }}
        >
          Education & Academic Excellence
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE IMAGE */}
          <div>
            <Image
              src="/education/mlritm-achievement.png"
              alt="MLRITM Academic Achievement"
              width={1100}
              height={800}
              style={{
                 width: "100%",
  height: "auto",
  objectFit: "contain",
  borderRadius: "24px",
                boxShadow:
                  "0 0 25px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.2)",
              }}
            />
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              padding: "35px",
              borderRadius: "25px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 30px rgba(59,130,246,0.15)",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                color: "#60a5fa",
                marginBottom: "20px",
              }}
            >
              Marri Laxman Reddy Institute of Technology & Management
            </h3>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#cbd5e1",
                lineHeight: "1.9",
              }}
            >
              Bachelor of Technology (B.Tech)
              <br />
              Computer Science & Engineering
              (Cyber Security)
            </p>

            <p
              style={{
                marginTop: "20px",
                color: "#d1d5db",
                lineHeight: "1.9",
              }}
            >
              Pursuing B.Tech in Computer Science &
              Engineering with specialization in
              Cyber Security. Strong foundation in
              Software Development, Artificial
              Intelligence, Machine Learning,
              Cloud Computing, DevOps,
              Data Analytics and Cyber Security.
            </p>

            {/* Achievement Card */}
            <div
              style={{
                marginTop: "30px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(250,204,21,0.3)",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h4
                style={{
                  color: "#facc15",
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                }}
              >
                🏆 Academic Topper
              </h4>

              <p
                style={{
                  color: "#dbeafe",
                  lineHeight: "1.8",
                }}
              >
                Recognized as Academic Topper for
                outstanding academic performance,
                consistency, leadership and dedication
                throughout the engineering program.
                Awarded institutional recognition and
                merit honors by MLRITM.
              </p>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "15px",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "18px",
                  background: "#111827",
                  borderRadius: "15px",
                }}
              >
                <h3 style={{ color: "#60a5fa" }}>2026</h3>
                <p>Graduate</p>
              </div>

              <div
                style={{
                  textAlign: "center",
                  padding: "18px",
                  background: "#111827",
                  borderRadius: "15px",
                }}
              >
                <h3 style={{ color: "#60a5fa" }}>CSE</h3>
                <p>Cyber Security</p>
              </div>

              <div
                style={{
                  textAlign: "center",
                  padding: "18px",
                  background: "#111827",
                  borderRadius: "15px",
                }}
              >
                <h3 style={{ color: "#facc15" }}>🏅</h3>
                <p>Topper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}