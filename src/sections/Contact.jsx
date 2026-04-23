import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme, tk } from "../context/ThemeContext";
import { useReveal } from "../hooks";

export default function Contact() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const { dark } = useTheme();
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!form.name || !form.email || !form.message) return setStatus("empty");
    setLoading(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: "Portfolio Contact",
          time: new Date().toLocaleString(),

          reply_to: form.email,
        },
        publicKey,
      );
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setLoading(false);
    setTimeout(() => setStatus(null), 5000);
  };

  const iS = {
    width: "100%",
    padding: "13px 16px",
    background: tk.inputBg(dark),
    border: `1px solid ${tk.inputBdr(dark)}`,
    borderRadius: 12,
    color: tk.text(dark),
    fontFamily: "Outfit",
    fontSize: 15,
    outline: "none",
    transition: "all 0.3s",
    boxSizing: "border-box",
  };
  const foc = (e) => {
    e.target.style.borderColor = "#e879f9";
    e.target.style.background = dark
      ? "rgba(232,121,249,0.06)"
      : "rgba(192,38,211,0.04)";
    e.target.style.boxShadow = "0 0 0 3px rgba(232,121,249,0.12)";
  };
  const blu = (e) => {
    e.target.style.borderColor = tk.inputBdr(dark);
    e.target.style.background = tk.inputBg(dark);
    e.target.style.boxShadow = "none";
  };

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/Gouravmishra92",
      icon: "🐙",
      val: "github.com/Gouravmishra92",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gourav-mishra-09372a2ab/",
      icon: "💼",
      val: "linkedin.com/in/gourav-mishra",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=gouravmishra872@gmail.com",
      icon: "✉️",
      val: "gouravmishra872@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 1.5rem 5rem",
        background: tk.bg(dark),
        transition: "background 0.4s",
      }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: "0.75rem",
          }}
        >
          <span
            style={{ fontFamily: "Fira Code", fontSize: 12, color: "#e879f9" }}
          >
            05.
          </span>
          <span
            style={{
              fontFamily: "Fira Code",
              fontSize: 12,
              color: tk.muted2(dark),
              letterSpacing: 2,
              transition: "color 0.3s",
            }}
          >
            CONTACT
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background: tk.border(dark),
              transition: "background 0.3s",
            }}
          />
        </div>
        <h2
          style={{
            fontFamily: "Outfit",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: tk.text(dark),
            transition: "color 0.3s",
          }}
        >
          Let's{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#e879f9,#38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Work Together
          </span>
        </h2>
        <p
          style={{
            fontFamily: "Outfit",
            fontSize: 16,
            color: tk.muted(dark),
            marginBottom: "3rem",
            maxWidth: 500,
            transition: "color 0.3s",
          }}
        >
          Have a project in mind or just want to say hi? Drop me a message and
          I'll get back to you ASAP.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <div>
            <p
              style={{
                fontFamily: "Fira Code",
                fontSize: 12,
                color: tk.muted2(dark),
                marginBottom: "1.25rem",
                letterSpacing: 1,
                transition: "color 0.3s",
              }}
            >
              // find me here
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    background: tk.surface(dark),
                    border: `1px solid ${tk.border(dark)}`,
                    borderRadius: 14,
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = dark
                      ? "rgba(232,121,249,0.07)"
                      : "rgba(192,38,211,0.05)";
                    e.currentTarget.style.borderColor = "rgba(232,121,249,0.3)";
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = tk.surface(dark);
                    e.currentTarget.style.borderColor = tk.border(dark);
                    e.currentTarget.style.transform = "";
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(232,121,249,0.1)",
                      border: "1px solid rgba(232,121,249,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "Outfit",
                        fontWeight: 700,
                        fontSize: 14,
                        color: tk.text(dark),
                        marginBottom: 2,
                        transition: "color 0.3s",
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "Fira Code",
                        fontSize: 11,
                        color: tk.muted2(dark),
                        transition: "color 0.3s",
                      }}
                    >
                      {s.val}
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      color: tk.muted2(dark),
                      fontSize: 14,
                      transition: "color 0.3s",
                    }}
                  >
                    →
                  </div>
                </a>
              ))}
            </div>
            <div
              style={{
                marginTop: 20,
                padding: "1.25rem",
                background: "rgba(52,211,153,0.06)",
                border: "1px solid rgba(52,211,153,0.2)",
                borderRadius: 14,
              }}
            >
              <div
                style={{
                  fontFamily: "Outfit",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#34d399",
                  marginBottom: 4,
                }}
              >
                ⚡ Usually responds within 24h
              </div>
              <div
                style={{
                  fontFamily: "Outfit",
                  fontSize: 13,
                  color: "rgba(52,211,153,0.7)",
                  lineHeight: 1.6,
                }}
              >
                Open to freelance, internships, and interesting collaborations.
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "2rem",
              background: tk.cardBg(dark),
              border: `1px solid ${tk.border(dark)}`,
              borderRadius: 20,
              transition: "all 0.3s",
              boxShadow: dark ? "none" : "0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            {[
              { k: "name", l: "Your Name", tt: "text", ph: "Enter your name" },
              {
                k: "email",
                l: "Email Address",
                tt: "email",
                ph: "Enter your email",
              },
            ].map(({ k, l, tt, ph }) => (
              <div key={k} style={{ marginBottom: "1.25rem" }}>
                <label
                  style={{
                    display: "block",
                    fontFamily: "Outfit",
                    fontSize: 13,
                    fontWeight: 600,
                    color: tk.muted(dark),
                    marginBottom: 8,
                    letterSpacing: 0.3,
                    transition: "color 0.3s",
                  }}
                >
                  {l}
                </label>
                <input
                  type={tt}
                  value={form[k]}
                  placeholder={ph}
                  onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                  style={iS}
                  onFocus={foc}
                  onBlur={blu}
                />
              </div>
            ))}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "Outfit",
                  fontSize: 13,
                  fontWeight: 600,
                  color: tk.muted(dark),
                  marginBottom: 8,
                  transition: "color 0.3s",
                }}
              >
                Message
              </label>
              <textarea
                value={form.message}
                rows={5}
                placeholder="Tell me about your project..."
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...iS, resize: "vertical" }}
                onFocus={foc}
                onBlur={blu}
              />
            </div>
            {status === "ok" && (
              <div
                style={{
                  padding: "12px",
                  background: "rgba(52,211,153,0.1)",
                  border: "1px solid rgba(52,211,153,0.3)",
                  borderRadius: 10,
                  marginBottom: "1rem",
                  fontFamily: "Outfit",
                  fontSize: 14,
                  color: "#34d399",
                  fontWeight: 600,
                }}
              >
                ✅ Message sent! I'll reply soon.
              </div>
            )}
            {status === "empty" && (
              <div
                style={{
                  padding: "12px",
                  background: "rgba(251,146,60,0.1)",
                  border: "1px solid rgba(251,146,60,0.3)",
                  borderRadius: 10,
                  marginBottom: "1rem",
                  fontFamily: "Outfit",
                  fontSize: 14,
                  color: "#fb923c",
                  fontWeight: 600,
                }}
              >
                ⚠️ Please fill all fields.
              </div>
            )}
            {status === "error" && (
              <div
                style={{
                  padding: "12px",
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  borderRadius: 10,
                  marginBottom: "1rem",
                  fontFamily: "Outfit",
                  fontSize: 14,
                  color: "#f87171",
                  fontWeight: 600,
                }}
              >
                ❌ Something went wrong. Try again.
              </div>
            )}
            <button
              onClick={send}
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: 12,
                border: "none",
                cursor: loading ? "wait" : "pointer",
                background: loading
                  ? "rgba(232,121,249,0.3)"
                  : "linear-gradient(135deg,#e879f9,#38bdf8)",
                color: "#fff",
                fontFamily: "Outfit",
                fontWeight: 700,
                fontSize: 15,
                transition: "all 0.2s",
                boxShadow: loading
                  ? "none"
                  : "0 4px 24px rgba(232,121,249,0.3)",
              }}
              onMouseEnter={(e) => {
                if (!loading)
                  e.target.style.boxShadow = "0 8px 36px rgba(232,121,249,0.5)";
              }}
              onMouseLeave={(e) => {
                if (!loading)
                  e.target.style.boxShadow = "0 4px 24px rgba(232,121,249,0.3)";
              }}
            >
              {loading ? "Sending…" : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
