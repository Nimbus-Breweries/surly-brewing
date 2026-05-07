import { useState } from "react";
import App from "./App.jsx";
import { DEMO_CONFIG } from "./demo.config.js";
import {
  Star, Beer, Calendar, Award, Gift, TrendingUp, QrCode,
  LayoutDashboard, Sparkles, DollarSign, Users,
  ExternalLink, ArrowLeft
} from "lucide-react";

const C = DEMO_CONFIG;

const features = [
  { icon: Star,            title: "Loyalty Points",    desc: `${C.memberTier} for every visit and purchase` },
  { icon: Beer,            title: "Beer Collection",   desc: `${C.beerCount} craft beers with ratings and flavor profiles` },
  { icon: Calendar,        title: "Events Calendar",   desc: "Festivals, releases, and community gatherings" },
  { icon: Award,           title: "Badge System",      desc: "Earn badges from first visit to legend status" },
  { icon: Gift,            title: "Rewards Program",   desc: "Redeem points for pints, merch, and experiences" },
  { icon: TrendingUp,      title: "Member Tiers",      desc: "Bronze, Silver, Gold, and Platinum levels" },
  { icon: QrCode,          title: "QR Check-in",       desc: "Scan to earn points at the taproom" },
  { icon: LayoutDashboard, title: "Admin Dashboard",   desc: "Full analytics, CRM, and broadcast tools" },
];

const salesCards = [
  { icon: Sparkles,   title: `Built for ${C.breweryShort}`, desc: `Not a template. A fully custom app designed around ${C.possessive} brand, beer lineup, and the community you've built.` },
  { icon: DollarSign, title: "Square POS Integration",       desc: "Connects directly with your existing Square setup — transactions, payments, and member management with no workflow changes." },
  { icon: Users,      title: "Member Engagement",            desc: "Push notifications, event RSVPs, beer ratings, and broadcast messaging keep your taproom community active between visits." },
];

export default function DemoWrapper() {
  const [isAdmin, setIsAdmin] = useState(false);

  const accent     = "#3A6A90";
  const accentDark = "#254A68";

  return (
    <div style={{
      display: "flex", height: "100vh", overflow: "hidden",
      background: "radial-gradient(ellipse at 50% 110%, rgba(58,106,144,.4) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, #0a1520 0%, #05090f 55%, #020508 100%)",
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      color: "#E8E8E8",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #020508; }
        .side-scroll::-webkit-scrollbar { width: 4px; }
        .side-scroll::-webkit-scrollbar-track { background: transparent; }
        .side-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,.1); border-radius: 2px; }
        .side-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,.2); }
        @media (max-width: 1100px) {
          .demo-sidebar-left, .demo-sidebar-right { display: none !important; }
          .demo-center { flex: 1 !important; }
        }
      `}</style>

      {/* LEFT SIDEBAR */}
      {!isAdmin && (
        <div className="demo-sidebar-left side-scroll" style={{
          width: 300, minWidth: 300, height: "100vh", overflowY: "auto",
          padding: "40px 28px", borderRight: "1px solid rgba(255,255,255,.06)",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: accent, marginBottom: 28 }}>
            Prototype Demo
          </div>

          {/* Logo + name */}
          <div style={{ marginBottom: 32 }}>
            <img src="https://surlybrewing.com/wp-content/uploads/2023/06/surly-logo-header.svg" alt={C.breweryShort || C.breweryName} style={{height: 34, width: "auto", display: "block", filter: "brightness(0) invert(1)", opacity: 0.9}} onError={e => e.target.style.display="none"} />
            <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginTop: 10 }}>{C.breweryShort || C.breweryName}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.35)", marginTop: 3 }}>Brewery Loyalty App</div>
          </div>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
            {features.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 12,
                padding: "11px 0",
                borderBottom: i < features.length - 1 ? "1px solid rgba(255,255,255,.04)" : "none",
              }}>
                <f.icon size={16} color={`${accent}90`} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,.9)" }}>{f.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.35)", marginTop: 2, lineHeight: 1.4, textWrap: "balance" }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,.05)", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,.18)" }}>
            Built by Nimbus Theory™
          </div>
        </div>
      )}

      {/* CENTER: PHONE or FULL-SCREEN ADMIN */}
      {isAdmin ? (
        /* FULL-SCREEN ADMIN MODE */
        <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 16, padding: "14px 32px",
            borderBottom: `1px solid ${accent}30`,
            background: `linear-gradient(90deg, ${accent}18, transparent)`,
            flexShrink: 0,
          }}>
            <button onClick={() => setIsAdmin(false)} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "7px 14px", background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.1)", borderRadius: 8,
              color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}>
              <ArrowLeft size={14} /> Exit Admin
            </button>
            <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.6)", letterSpacing: 1, textTransform: "uppercase" }}>
              {C.breweryShort} — Admin Dashboard
            </div>
          </div>
          <div className="side-scroll" style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
            <App isAdmin={true} onExitAdmin={() => setIsAdmin(false)} />
          </div>
        </div>
      ) : (
        /* PHONE FRAME */
        <div className="demo-center" style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px 0", overflow: "hidden",
        }}>
          {/* Phone chassis */}
          <div style={{
            position: "relative",
            width: 414,
            height: "min(calc(100vh - 48px), 856px)",
            background: "#0a0a0a",
            borderRadius: 52,
            boxShadow: "0 0 0 1px #1a1a1a, 0 40px 100px rgba(0,0,0,.9), 0 12px 40px rgba(0,0,0,.7), 0 0 80px rgba(58,106,144,0.35), 0 0 160px rgba(58,106,144,0.18), inset 0 1px 0 rgba(255,255,255,.08)",
            padding: 12,
            flexShrink: 0,
          }}>
            {/* Power button */}
            <div style={{position:"absolute",right:-3,top:120,width:3,height:64,background:"#1e1e1e",borderRadius:"0 3px 3px 0"}} />
            {/* Volume buttons */}
            <div style={{position:"absolute",left:-3,top:100,width:3,height:36,background:"#1e1e1e",borderRadius:"3px 0 0 3px"}} />
            <div style={{position:"absolute",left:-3,top:148,width:3,height:64,background:"#1e1e1e",borderRadius:"3px 0 0 3px"}} />
            <div style={{position:"absolute",left:-3,top:224,width:3,height:64,background:"#1e1e1e",borderRadius:"3px 0 0 3px"}} />
            {/* Screen */}
            <div style={{
              width: "100%", height: "100%", borderRadius: 42,
              overflow: "hidden", position: "relative",
              background: "#0C0908",
            }}>
              {/* Dynamic Island */}
              <div style={{
                position:"absolute", top:10, left:"50%",
                transform:"translateX(-50%)", width:90, height:14,
                background:"#000", borderRadius:10, zIndex:51,
              }} />
              {/* App content */}
              <div style={{ width:"100%", height:"100%", overflowY:"auto", overflowX:"hidden" }}>
                <App isAdmin={false} onOpenAdmin={() => setIsAdmin(true)} onExitAdmin={() => setIsAdmin(false)} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RIGHT SIDEBAR */}
      {!isAdmin && (
        <div className="demo-sidebar-right side-scroll" style={{
          width: 300, minWidth: 300, height: "100vh", overflowY: "auto",
          padding: "40px 28px", borderLeft: "1px solid rgba(255,255,255,.06)",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {/* Admin CTA */}
          <div style={{
            background: `linear-gradient(135deg, ${accent}22, ${accent}0a)`,
            border: `1px solid ${accent}35`, borderRadius: 14, padding: 22,
          }}>
            <LayoutDashboard size={20} color={accent} style={{ marginBottom: 12 }} />
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Admin Dashboard</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.6, marginBottom: 16 }}>
              Full analytics, member CRM, beer management, event scheduling, and broadcast messaging.
            </div>
            <button onClick={() => setIsAdmin(true)} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "9px 18px", background: accent,
              color: "#fff", border: "none", borderRadius: 8,
              fontWeight: 700, fontSize: 13, letterSpacing: .5, cursor: "pointer",
              boxShadow: `0 4px 16px ${accent}50`,
            }}>
              <LayoutDashboard size={14} /> Open Admin Dashboard
            </button>
          </div>

          {/* Sales cards */}
          {salesCards.map((card, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.06)",
              borderRadius: 14, padding: 22,
            }}>
              <card.icon size={20} color={accent} style={{ marginBottom: 12 }} />
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{card.title}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.6 }}>{card.desc}</div>
            </div>
          ))}

          {/* CTA */}
          <div style={{
            background: `linear-gradient(135deg, ${accent}18, ${accent}06)`,
            border: `1px solid ${accent}25`, borderRadius: 14, padding: 22, marginTop: 4,
          }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Ready to Launch?</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.6, marginBottom: 16 }}>
              Every screen is production-ready. We build your branded app in under a week.
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "9px 18px", background: accent, color: "#fff",
              borderRadius: 8, fontWeight: 700, fontSize: 13,
              letterSpacing: .5, cursor: "pointer",
              boxShadow: `0 4px 16px ${accent}50`,
            }}>
              <ExternalLink size={14} /> Get Started
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
