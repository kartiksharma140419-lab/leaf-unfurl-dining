import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LeafGlyph } from "@/components/brand/LeafGlyph";

export function Reservation() {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState({ date: "", time: "19:30", party: "2", name: "", phone: "" });

  const onQuick = (e: FormEvent) => {
    e.preventDefault();
    setConfirmed(false);
    setOpen(true);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-[color:var(--color-sindoor)] py-24 md:py-32"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 20%, rgba(225,137,43,0.12) 0, transparent 45%), radial-gradient(circle at 85% 80%, rgba(201,162,76,0.12) 0, transparent 45%)",
      }}
    >
      {/* Faint spice-scatter texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F4E9D8 1px, transparent 1.5px), radial-gradient(circle, #E1892B 1px, transparent 1.5px)",
          backgroundSize: "40px 40px, 60px 60px",
          backgroundPosition: "0 0, 20px 30px",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 text-center">
        <p className="font-accent text-[11px] text-[color:var(--color-malai)]/80 mb-6 flex items-center justify-center gap-3">
          <LeafGlyph className="h-3 w-3 rotate-[-12deg]" /> Reserve a Table
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl leading-[1.05] text-[color:var(--color-malai)] max-w-3xl mx-auto"
        >
          The table&rsquo;s better <span className="italic">with you at it.</span>
        </motion.h2>

        <form
          onSubmit={onQuick}
          className="mx-auto mt-12 grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_1fr_auto] md:gap-4 max-w-3xl"
        >
          <FieldWrap label="Date">
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="reservation-input"
            />
          </FieldWrap>
          <FieldWrap label="Time">
            <input
              type="time"
              required
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="reservation-input"
            />
          </FieldWrap>
          <FieldWrap label="Party of">
            <select
              value={form.party}
              onChange={(e) => setForm({ ...form, party: e.target.value })}
              className="reservation-input"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n} className="bg-[color:var(--color-tandoor)]">
                  {n} guest{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </FieldWrap>
          <button
            type="submit"
            className="font-accent text-[12px] px-8 py-4 rounded-sm bg-[color:var(--color-marigold)] text-[color:var(--color-tandoor)] hover:bg-[color:var(--color-gold)] transition-colors shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
          >
            Continue →
          </button>
        </form>
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[color:var(--color-tandoor)] border border-[color:var(--color-gold)]/30 text-[color:var(--color-malai)] max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl leading-tight text-[color:var(--color-malai)]">
              {confirmed ? "See you soon." : "One more thing."}
            </DialogTitle>
            <DialogDescription className="font-body text-[color:var(--color-malai)]/70">
              {confirmed
                ? `We've noted a table for ${form.party} on ${form.date || "your chosen date"} at ${form.time}. A quick message will follow shortly.`
                : "So we know who to greet at the door."}
            </DialogDescription>
          </DialogHeader>
          {!confirmed ? (
            <form onSubmit={onSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="font-accent text-[10px] text-[color:var(--color-gold)]">Your Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="reservation-input w-full"
                  placeholder="Full name"
                />
              </div>
              <div className="space-y-2">
                <label className="font-accent text-[10px] text-[color:var(--color-gold)]">Phone</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="reservation-input w-full"
                  placeholder="+91 ..."
                />
              </div>
              <button
                type="submit"
                className="w-full font-accent text-[12px] mt-2 px-8 py-4 rounded-sm bg-[color:var(--color-marigold)] text-[color:var(--color-tandoor)] hover:bg-[color:var(--color-gold)] transition-colors"
              >
                Confirm Reservation
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center py-6 gap-3">
              <LeafGlyph strokeVein className="h-10 w-10 text-[color:var(--color-marigold)]" />
              <p className="font-display italic text-lg text-[color:var(--color-malai)]/85">
                Atithi Devo Bhava.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style>{`
        .reservation-input {
          background-color: rgba(28, 18, 16, 0.55);
          border: 1px solid rgba(244, 233, 216, 0.25);
          color: var(--color-malai);
          padding: 14px 16px;
          border-radius: 2px;
          font-family: var(--font-body);
          font-size: 14px;
          width: 100%;
          transition: border-color 0.2s;
        }
        .reservation-input:focus {
          outline: none;
          border-color: var(--color-marigold);
        }
        .reservation-input::-webkit-calendar-picker-indicator {
          filter: invert(1) sepia(1) saturate(4) hue-rotate(-10deg);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

function FieldWrap({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col items-start gap-1 text-left">
      <span className="font-accent text-[9px] text-[color:var(--color-malai)]/70">{label}</span>
      {children}
    </label>
  );
}
