"use client";

export default function Navbar() {
  const menuItems = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Education",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(5,8,22,0.75)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 40px",
        }}
      >

        {/* Logo */}

        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "800",
            background:
              "linear-gradient(90deg,#60a5fa,#c084fc)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            margin: 0,
          }}
        >
          Bhavani Konga
        </h2>


        {/* Navigation Links */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >

          {menuItems.map((item) => (

            <a
              key={item}
              href={
                item === "Home"
                  ? "#"
                  : `#${item.toLowerCase()}`
              }
              style={{
                color: "#e2e8f0",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "500",
                transition: "0.3s",
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  "#60a5fa";
                e.currentTarget.style.transform =
                  "translateY(-3px)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  "#e2e8f0";
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}

            >
              {item}
            </a>

          ))}

        </div>


        {/* Resume Buttons */}

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >

          {/* Download Resume */}

          <a
            href="/resume.pdf"
            download
            style={{
              background:
                "linear-gradient(90deg,#3b82f6,#8b5cf6)",
              color: "white",
              padding: "10px 18px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Download Resume
          </a>


          {/* View Resume */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              background:
                "rgba(255,255,255,0.08)",
              color: "white",
              padding: "10px 18px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
              border:
                "1px solid rgba(255,255,255,0.15)",
            }}
          >
            View Resume
          </a>


        </div>


      </div>

    </nav>
  );
}