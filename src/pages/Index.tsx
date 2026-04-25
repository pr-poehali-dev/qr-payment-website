import { useState } from "react";
import Icon from "@/components/ui/icon";

const GOLD_PACKAGES = [
  { id: 1, gold: 80, bonus: 0, price: 75, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/3fbdff51-9b66-4d41-b476-0add0163144d.jpg", popular: false, sale: false },
  { id: 2, gold: 160, bonus: 16, price: 149, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/3fbdff51-9b66-4d41-b476-0add0163144d.jpg", popular: false, sale: false },
  { id: 3, gold: 330, bonus: 66, price: 299, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/3fbdff51-9b66-4d41-b476-0add0163144d.jpg", popular: true, sale: false },
  { id: 4, gold: 700, bonus: 175, price: 599, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/3fbdff51-9b66-4d41-b476-0add0163144d.jpg", popular: false, sale: false },
  { id: 5, gold: 1500, bonus: 450, price: 1199, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/3fbdff51-9b66-4d41-b476-0add0163144d.jpg", popular: false, sale: false },
  { id: 6, gold: 3200, bonus: 1120, price: 2399, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/3fbdff51-9b66-4d41-b476-0add0163144d.jpg", popular: false, sale: true },
];

const BATTLE_PASS = [
  { id: 10, name: "Battle Pass", levels: 1, price: 149, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/6147c3da-b93d-4a04-b01c-615d1c0b52c5.jpg", popular: false },
  { id: 11, name: "Battle Pass x10", levels: 10, price: 999, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/6147c3da-b93d-4a04-b01c-615d1c0b52c5.jpg", popular: true },
  { id: 12, name: "Battle Pass x30", levels: 30, price: 2499, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/6147c3da-b93d-4a04-b01c-615d1c0b52c5.jpg", popular: false },
];

const SKINS = [
  { id: 20, name: "Нож Призрак", rarity: "Легендарный", price: 1499, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/79a6ae24-e791-49ed-b01b-99dbdaf82728.jpg", rarityColor: "#ffd700" },
  { id: 21, name: "АК-47 Дракон", rarity: "Эпический", price: 799, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/79a6ae24-e791-49ed-b01b-99dbdaf82728.jpg", rarityColor: "#bf5af2" },
  { id: 22, name: "M4A1 Неон", rarity: "Редкий", price: 399, img: "https://cdn.poehali.dev/projects/8941ff12-b515-4c7f-9549-419ccc2ae58f/files/79a6ae24-e791-49ed-b01b-99dbdaf82728.jpg", rarityColor: "#00d4ff" },
];

type Tab = "gold" | "battlepass" | "skins";

type PayStep = "form" | "qr" | "success";

interface SelectedItem {
  id: number;
  name: string;
  price: number;
}

export default function Index() {
  const [tab, setTab] = useState<Tab>("gold");
  const [selected, setSelected] = useState<SelectedItem | null>(null);
  const [payStep, setPayStep] = useState<PayStep>("form");
  const [userId, setUserId] = useState("");
  const [payOpen, setPayOpen] = useState(false);

  function openPay(item: SelectedItem) {
    setSelected(item);
    setPayStep("form");
    setUserId("");
    setPayOpen(true);
  }

  function closePay() {
    setPayOpen(false);
    setTimeout(() => {
      setSelected(null);
      setPayStep("form");
    }, 300);
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!userId.trim()) return;
    setPayStep("qr");
  }

  function handleQrScanned() {
    setPayStep("success");
  }

  return (
    <div style={{ background: "#1a1d2e", minHeight: "100vh", fontFamily: "'Rajdhani', sans-serif", color: "#fff" }}>
      {/* Header */}
      <header style={{ background: "#212438", borderBottom: "1px solid #2e3250", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: "linear-gradient(135deg, #ff6b35, #ff4444)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: 16, color: "#fff",
              boxShadow: "0 0 12px rgba(255,100,50,0.5)"
            }}>S2</div>
            <div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.1em", color: "#fff" }}>STANDOFF 2</div>
              <div style={{ fontSize: 10, color: "#8b90b0", letterSpacing: "0.15em", textTransform: "uppercase" }}>Официальный магазин</div>
            </div>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: 4 }}>
            {[
              { key: "gold", label: "Голда" },
              { key: "battlepass", label: "Battle Pass" },
              { key: "skins", label: "Скины" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key as Tab)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: "0.05em",
                  transition: "all 0.2s",
                  background: tab === key ? "linear-gradient(135deg, #ff6b35, #ff4444)" : "transparent",
                  color: tab === key ? "#fff" : "#8b90b0",
                  boxShadow: tab === key ? "0 0 14px rgba(255,80,50,0.4)" : "none",
                }}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#ffd700", fontSize: 13, fontWeight: 600 }}>
              <Icon name="Coins" size={16} fallback="Star" />
              <span>0</span>
            </div>
            <button style={{
              width: 36, height: 36, borderRadius: 8,
              background: "#2e3250", border: "1px solid #3a3f60",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#8b90b0"
            }}>
              <Icon name="User" size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero banner */}
      <div style={{
        background: "linear-gradient(135deg, #1a1d2e 0%, #212438 50%, #1a1d2e 100%)",
        borderBottom: "1px solid #2e3250",
        padding: "32px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 30% 50%, #ff6b35 0%, transparent 50%), radial-gradient(circle at 70% 50%, #ff4444 0%, transparent 50%)"
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 28, fontWeight: 900, letterSpacing: "0.05em", marginBottom: 8 }}>
            {tab === "gold" && "Купить Голду"}
            {tab === "battlepass" && "Battle Pass"}
            {tab === "skins" && "Скины и предметы"}
          </div>
          <div style={{ color: "#8b90b0", fontSize: 15 }}>
            {tab === "gold" && "Получай больше голды с каждым пополнением — бонусы до +35%"}
            {tab === "battlepass" && "Открывай уровни и получай эксклюзивные награды"}
            {tab === "skins" && "Редкие скины для вашего снаряжения"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px" }}>

        {/* GOLD TAB */}
        {tab === "gold" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {GOLD_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  style={{
                    background: "#212438",
                    borderRadius: 12,
                    border: pkg.popular ? "2px solid #ff6b35" : "1px solid #2e3250",
                    overflow: "hidden",
                    position: "relative",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: pkg.popular ? "0 0 20px rgba(255,107,53,0.2)" : "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.5)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = pkg.popular ? "0 0 20px rgba(255,107,53,0.2)" : "0 4px 16px rgba(0,0,0,0.3)"; }}
                >
                  {pkg.popular && (
                    <div style={{
                      position: "absolute", top: 12, right: 12, zIndex: 2,
                      background: "linear-gradient(135deg, #ff6b35, #ff4444)",
                      padding: "3px 10px", borderRadius: 20,
                      fontSize: 11, fontWeight: 700, fontFamily: "'Orbitron', sans-serif",
                      letterSpacing: "0.1em", color: "#fff",
                    }}>ПОПУЛЯРНОЕ</div>
                  )}
                  {pkg.sale && (
                    <div style={{
                      position: "absolute", top: 12, left: 12, zIndex: 2,
                      background: "#ff4444",
                      padding: "3px 10px", borderRadius: 20,
                      fontSize: 11, fontWeight: 700, fontFamily: "'Orbitron', sans-serif",
                      letterSpacing: "0.1em", color: "#fff",
                    }}>АКЦИЯ</div>
                  )}

                  {/* Image */}
                  <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #212438 100%)", zIndex: 1 }} />
                    <img src={pkg.img} alt="gold" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
                  </div>

                  {/* Info */}
                  <div style={{ padding: "16px 20px 20px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 24, fontWeight: 900, color: "#ffd700" }}>
                        {pkg.gold.toLocaleString()}
                      </span>
                      <span style={{ color: "#ffd700", fontSize: 14 }}>голды</span>
                    </div>
                    {pkg.bonus > 0 && (
                      <div style={{ fontSize: 13, color: "#4ade80", fontWeight: 600, marginBottom: 12 }}>
                        + {pkg.bonus} голды в подарок
                      </div>
                    )}
                    {pkg.bonus === 0 && <div style={{ marginBottom: 12, height: 20 }} />}

                    <button
                      onClick={() => openPay({ id: pkg.id, name: `${pkg.gold} голды`, price: pkg.price })}
                      style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: 8,
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Orbitron', sans-serif",
                        fontWeight: 700,
                        fontSize: 14,
                        letterSpacing: "0.05em",
                        background: "linear-gradient(135deg, #ff6b35, #ff4444)",
                        color: "#fff",
                        boxShadow: "0 0 12px rgba(255,80,50,0.4)",
                        transition: "all 0.2s",
                      }}
                    >
                      {pkg.price} ₽
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* BATTLE PASS TAB */}
        {tab === "battlepass" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {BATTLE_PASS.map((bp) => (
              <div
                key={bp.id}
                style={{
                  background: "#212438",
                  borderRadius: 12,
                  border: bp.popular ? "2px solid #ffd700" : "1px solid #2e3250",
                  overflow: "hidden",
                  transition: "transform 0.2s",
                  boxShadow: bp.popular ? "0 0 20px rgba(255,215,0,0.15)" : "0 4px 16px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"}
              >
                {bp.popular && (
                  <div style={{
                    background: "linear-gradient(90deg, #ffd700, #ffaa00)",
                    padding: "6px 16px",
                    textAlign: "center",
                    fontSize: 11, fontWeight: 700, fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: "0.15em", color: "#1a1d2e",
                  }}>ЛУЧШАЯ ЦЕНА</div>
                )}
                <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #212438 100%)", zIndex: 1 }} />
                  <img src={bp.img} alt="bp" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
                </div>
                <div style={{ padding: "16px 20px 20px" }}>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>{bp.name}</div>
                  <div style={{ color: "#8b90b0", fontSize: 13, marginBottom: 16 }}>
                    {bp.levels} {bp.levels === 1 ? "уровень" : bp.levels < 5 ? "уровня" : "уровней"} Battle Pass
                  </div>
                  <button
                    onClick={() => openPay({ id: bp.id, name: bp.name, price: bp.price })}
                    style={{
                      width: "100%", padding: "12px",
                      borderRadius: 8, border: "none", cursor: "pointer",
                      fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: 14,
                      letterSpacing: "0.05em",
                      background: bp.popular ? "linear-gradient(135deg, #ffd700, #ffaa00)" : "linear-gradient(135deg, #ff6b35, #ff4444)",
                      color: bp.popular ? "#1a1d2e" : "#fff",
                      boxShadow: bp.popular ? "0 0 12px rgba(255,215,0,0.4)" : "0 0 12px rgba(255,80,50,0.4)",
                      transition: "all 0.2s",
                    }}
                  >{bp.price} ₽</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SKINS TAB */}
        {tab === "skins" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {SKINS.map((skin) => (
              <div
                key={skin.id}
                style={{
                  background: "#212438",
                  borderRadius: 12,
                  border: "1px solid #2e3250",
                  overflow: "hidden",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"}
              >
                <div style={{ height: 180, overflow: "hidden", position: "relative", background: "#161828" }}>
                  <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at center, ${skin.rarityColor}22 0%, transparent 70%)` }} />
                  <img src={skin.img} alt={skin.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
                  <div style={{
                    position: "absolute", bottom: 10, left: 12, zIndex: 2,
                    padding: "2px 10px", borderRadius: 20,
                    fontSize: 11, fontWeight: 700, fontFamily: "'Orbitron', sans-serif",
                    background: skin.rarityColor + "33", color: skin.rarityColor,
                    border: `1px solid ${skin.rarityColor}66`,
                  }}>{skin.rarity}</div>
                </div>
                <div style={{ padding: "14px 20px 18px" }}>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 12 }}>{skin.name}</div>
                  <button
                    onClick={() => openPay({ id: skin.id, name: skin.name, price: skin.price })}
                    style={{
                      width: "100%", padding: "10px",
                      borderRadius: 8, border: "none", cursor: "pointer",
                      fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: 13,
                      background: "linear-gradient(135deg, #ff6b35, #ff4444)",
                      color: "#fff", boxShadow: "0 0 10px rgba(255,80,50,0.3)",
                    }}
                  >{skin.price} ₽</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #2e3250", padding: "24px 20px", marginTop: 40, textAlign: "center", color: "#4a4f70", fontSize: 13 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.15em", marginBottom: 8 }}>STANDOFF 2 STORE</div>
          <div>Официальный магазин игры Standoff 2 · Все права защищены</div>
        </div>
      </footer>

      {/* Payment Modal */}
      {payOpen && selected && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.75)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 20,
            backdropFilter: "blur(6px)",
          }}
          onClick={e => { if (e.target === e.currentTarget) closePay(); }}
        >
          <div style={{
            background: "#212438",
            borderRadius: 16,
            border: "1px solid #2e3250",
            width: "100%",
            maxWidth: 460,
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            animation: "fadeInScale 0.25s ease-out",
          }}>
            {/* Modal header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "20px 24px 18px",
              borderBottom: "1px solid #2e3250",
            }}>
              <div>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 800, fontSize: 16 }}>
                  {payStep === "form" && "Оформление покупки"}
                  {payStep === "qr" && "Сканируйте QR-код"}
                  {payStep === "success" && "Оплата успешна"}
                </div>
                <div style={{ color: "#8b90b0", fontSize: 13, marginTop: 2 }}>{selected.name}</div>
              </div>
              <button
                onClick={closePay}
                style={{
                  width: 32, height: 32, borderRadius: 8, border: "1px solid #3a3f60",
                  background: "#2e3250", cursor: "pointer", color: "#8b90b0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            {/* STEP 1: Form */}
            {payStep === "form" && (
              <form onSubmit={handleFormSubmit} style={{ padding: "24px" }}>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 13, color: "#8b90b0", marginBottom: 8, fontWeight: 600 }}>
                    ID игрока в Standoff 2
                  </label>
                  <input
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                    placeholder="Введите ваш ID (например: 123456789)"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: "1px solid #3a3f60",
                      background: "#161828",
                      color: "#fff",
                      fontSize: 14,
                      fontFamily: "'Rajdhani', sans-serif",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#ff6b35"}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = "#3a3f60"}
                  />
                  <div style={{ fontSize: 12, color: "#4a4f70", marginTop: 6 }}>
                    Найдите свой ID в профиле игры → Настройки
                  </div>
                </div>

                {/* Order summary */}
                <div style={{
                  background: "#161828",
                  borderRadius: 10, padding: "16px",
                  marginBottom: 20,
                  border: "1px solid #2e3250",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ color: "#8b90b0", fontSize: 14 }}>Товар</span>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{selected.name}</span>
                  </div>
                  <div style={{ height: 1, background: "#2e3250", margin: "10px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#8b90b0", fontSize: 14 }}>Итого</span>
                    <span style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontWeight: 800, fontSize: 18, color: "#ff6b35"
                    }}>{selected.price} ₽</span>
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%", padding: "14px",
                    borderRadius: 8, border: "none", cursor: "pointer",
                    fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: 14,
                    letterSpacing: "0.05em",
                    background: "linear-gradient(135deg, #ff6b35, #ff4444)",
                    color: "#fff",
                    boxShadow: "0 0 16px rgba(255,80,50,0.5)",
                    transition: "all 0.2s",
                  }}
                >
                  Перейти к оплате
                </button>
              </form>
            )}

            {/* STEP 2: QR */}
            {payStep === "qr" && (
              <div style={{ padding: "24px", textAlign: "center" }}>
                <div style={{ color: "#8b90b0", fontSize: 14, marginBottom: 20 }}>
                  Отсканируйте QR-код любым банковским приложением для оплаты <strong style={{ color: "#fff" }}>{selected.price} ₽</strong>
                </div>

                {/* QR code visual */}
                <div style={{
                  width: 220, height: 220,
                  margin: "0 auto 20px",
                  background: "#fff",
                  borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                  padding: 12,
                  boxShadow: "0 0 30px rgba(255,107,53,0.2)",
                }}>
                  <QRPattern />
                </div>

                <div style={{ fontSize: 12, color: "#4a4f70", marginBottom: 20, lineHeight: 1.6 }}>
                  ID игрока: <span style={{ color: "#fff", fontFamily: "'Share Tech Mono', monospace" }}>{userId}</span>
                  <br />После оплаты голда будет зачислена в течение нескольких минут
                </div>

                <div style={{
                  background: "#161828", borderRadius: 8, padding: "10px 16px",
                  border: "1px solid #2e3250", marginBottom: 20,
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#ffd700",
                    boxShadow: "0 0 8px #ffd700",
                    animation: "pulse 1.5s ease-in-out infinite",
                    flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 13, color: "#8b90b0" }}>Ожидание оплаты...</span>
                </div>

                {/* Simulate button */}
                <button
                  onClick={handleQrScanned}
                  style={{
                    width: "100%", padding: "12px",
                    borderRadius: 8, border: "1px dashed #3a3f60",
                    background: "transparent",
                    cursor: "pointer", color: "#8b90b0",
                    fontSize: 13, fontFamily: "'Rajdhani', sans-serif",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#ff6b35"; (e.currentTarget as HTMLButtonElement).style.color = "#ff6b35"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#3a3f60"; (e.currentTarget as HTMLButtonElement).style.color = "#8b90b0"; }}
                >
                  Я оплатил
                </button>
              </div>
            )}

            {/* STEP 3: Success */}
            {payStep === "success" && (
              <div style={{ padding: "32px 24px", textAlign: "center" }}>
                <div style={{
                  width: 72, height: 72,
                  borderRadius: "50%",
                  background: "rgba(74,222,128,0.15)",
                  border: "2px solid #4ade80",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 0 24px rgba(74,222,128,0.3)",
                }}>
                  <Icon name="Check" size={32} fallback="CheckCircle" />
                </div>

                <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 8, color: "#4ade80" }}>
                  Оплата принята!
                </div>
                <div style={{ color: "#8b90b0", fontSize: 14, marginBottom: 4 }}>
                  Покупка: {selected.name}
                </div>
                <div style={{ color: "#4a4f70", fontSize: 13, marginBottom: 24 }}>
                  ID игрока: <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#fff" }}>{userId}</span>
                </div>

                <div style={{
                  background: "#161828", borderRadius: 10,
                  border: "1px solid #4ade8033",
                  padding: "14px 16px", marginBottom: 24,
                }}>
                  <div style={{ fontSize: 13, color: "#4ade80", fontWeight: 600 }}>
                    Товар будет зачислен в течение 5 минут
                  </div>
                </div>

                <button
                  onClick={closePay}
                  style={{
                    width: "100%", padding: "12px",
                    borderRadius: 8, border: "none", cursor: "pointer",
                    fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: 13,
                    background: "linear-gradient(135deg, #ff6b35, #ff4444)",
                    color: "#fff",
                  }}
                >
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}

function QRPattern() {
  return (
    <svg width="196" height="196" viewBox="0 0 196 196" xmlns="http://www.w3.org/2000/svg">
      {/* Top-left position square */}
      <rect x="0" y="0" width="56" height="56" fill="#000" rx="4" />
      <rect x="6" y="6" width="44" height="44" fill="#fff" rx="2" />
      <rect x="14" y="14" width="28" height="28" fill="#000" rx="2" />

      {/* Top-right position square */}
      <rect x="140" y="0" width="56" height="56" fill="#000" rx="4" />
      <rect x="146" y="6" width="44" height="44" fill="#fff" rx="2" />
      <rect x="154" y="14" width="28" height="28" fill="#000" rx="2" />

      {/* Bottom-left position square */}
      <rect x="0" y="140" width="56" height="56" fill="#000" rx="4" />
      <rect x="6" y="146" width="44" height="44" fill="#fff" rx="2" />
      <rect x="14" y="154" width="28" height="28" fill="#000" rx="2" />

      {/* Data modules — random pattern */}
      {[
        [64,0],[72,0],[80,0],[96,0],[104,0],[120,0],[128,0],
        [64,8],[88,8],[112,8],[128,8],
        [72,16],[80,16],[96,16],[104,16],[120,16],
        [64,24],[88,24],[96,24],[112,24],[128,24],
        [72,32],[80,32],[104,32],[120,32],
        [64,40],[88,40],[96,40],[104,40],[128,40],
        [72,48],[80,48],[112,48],[120,48],
        [0,64],[8,64],[24,64],[32,64],[48,64],[64,64],[72,64],[88,64],[96,64],[104,64],[120,64],[128,64],[136,64],[152,64],[168,64],[184,64],[192,64],
        [0,72],[16,72],[32,72],[48,72],[80,72],[96,72],[112,72],[128,72],[144,72],[160,72],[176,72],[192,72],
        [8,80],[24,80],[40,80],[56,80],[72,80],[88,80],[104,80],[120,80],[136,80],[152,80],[168,80],[184,80],
        [0,88],[16,88],[32,88],[56,88],[72,88],[96,88],[112,88],[128,88],[144,88],[160,88],[176,88],[192,88],
        [8,96],[24,96],[48,96],[64,96],[80,96],[96,96],[120,96],[136,96],[152,96],[168,96],[184,96],
        [0,104],[16,104],[32,104],[48,104],[72,104],[88,104],[104,104],[128,104],[144,104],[160,104],[176,104],[192,104],
        [8,112],[24,112],[40,112],[64,112],[80,112],[96,112],[112,112],[136,112],[152,112],[168,112],[184,112],
        [0,120],[16,120],[32,120],[56,120],[72,120],[104,120],[120,120],[128,120],[144,120],[160,120],[176,120],[192,120],
        [8,128],[24,128],[48,128],[64,128],[88,128],[96,128],[112,128],[136,128],[152,128],[168,128],[184,128],
        [64,140],[80,140],[88,140],[104,140],[120,140],[136,140],[152,140],[160,140],[176,140],[192,140],
        [72,148],[96,148],[104,148],[128,148],[144,148],[160,148],[184,148],
        [64,156],[80,156],[88,156],[112,156],[128,156],[136,156],[152,156],[168,156],[192,156],
        [72,164],[96,164],[104,164],[120,164],[136,164],[144,164],[160,164],[176,164],
        [64,172],[80,172],[88,172],[104,172],[128,172],[144,172],[152,172],[168,172],[184,172],[192,172],
        [72,180],[96,180],[112,180],[120,180],[136,180],[160,180],[176,180],
        [64,188],[80,188],[88,188],[104,188],[128,188],[136,188],[152,188],[168,188],[184,188],[192,188],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="6" height="6" fill="#000" />
      ))}
    </svg>
  );
}
