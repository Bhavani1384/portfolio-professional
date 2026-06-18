
export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background:
          "linear-gradient(180deg,#050816 0%,#0b1120 50%,#050816 100%)",
        color: "white",
        padding: "120px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Contact Me
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "60px",
          }}
        >
          Let's connect and build innovative software solutions together.
        </p>


        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >

          {/* Email */}
          <div className="contact-card">
            <h3>📧 Email</h3>

            <a
              href="mailto:kongabhavani2004@gmail.com"
              style={{color:"white"}}
            >
              kongabhavani2004@gmail.com
            </a>
          </div>


          {/* LinkedIn */}
          <div className="contact-card">

            <h3>💼 LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/bhavani-konga"
              target="_blank"
              style={{color:"white"}}
            >
              View Profile →
            </a>

          </div>


          {/* GitHub */}
          <div className="contact-card">

            <h3>🚀 GitHub</h3>

            <a
              href="https://github.com/Bhavani1384"
              target="_blank"
              style={{color:"white"}}
            >
              Explore Projects →
            </a>

          </div>


          {/* Resume */}
          <div className="contact-card">

            <h3>📄 Resume</h3>

            <a
              href="/resume.pdf"
              download
              style={{color:"white"}}
            >
              Download Resume →
            </a>

          </div>

        </div>


        {/* CTA */}

        <div
          style={{
            marginTop:"60px",
            textAlign:"center",
            background:"rgba(255,255,255,0.05)",
            padding:"40px",
            borderRadius:"30px",
          }}
        >

          <h3
            style={{
              fontSize:"2rem",
              marginBottom:"15px"
            }}
          >
            Ready to Collaborate?
          </h3>


          <p
            style={{
              color:"#cbd5e1",
              marginBottom:"25px"
            }}
          >
            Open for Software Development, Full Stack,
            AI/ML, Cloud and DevOps opportunities.
          </p>


          <a
            href="mailto:kongabhavani2004@gmail.com"
            style={{
              background:
              "linear-gradient(90deg,#3b82f6,#8b5cf6)",
              color:"white",
              padding:"14px 30px",
              borderRadius:"12px",
              textDecoration:"none",
              fontWeight:"bold"
            }}
          >
            Let's Connect
          </a>

        </div>

      </div>
    </section>
  );
}