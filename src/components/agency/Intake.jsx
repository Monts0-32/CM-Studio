import { db } from "@/api/db";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import SectionHeading from "@/components/agency/SectionHeading";
import ToggleChip from "@/components/agency/ToggleChip";
import ScopeSummary from "@/components/agency/ScopeSummary";

const SERVICE_OPTIONS = ["Websites & redesigns", "Online stores", "Care & growth"];
const GOAL_OPTIONS = [
  "More enquiries",
  "More online sales",
  "Get found locally",
  "Look up to date",
  "Ongoing support",
];

const EMPTY = { name: "", business: "", email: "", phone: "", details: "" };

export default function Intake() {
  const [services, setServices] = useState([]);
  const [goals, setGoals] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const toggle = (value, list, setList) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const update = (key) => (event) => setForm({ ...form, [key]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    if (!form.name.trim()) return setError("Please add your name so we know who to reply to.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Please check your email address.");
    if (!services.length) return setError("Pick at least one thing you need — you can change it later.");

    setError("");
    setSubmitting(true);
    try {
      await db.entities.Lead.create({ ...form, services, goals, status: "new" });
      setSent(true);
    } catch (err) {
      setError("That didn't send. Please try again, or email hello@lumenstudio.co.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setServices([]);
    setGoals([]);
    setForm(EMPTY);
    setError("");
    setSent(false);
  };

  const inputClass =
    "w-full rounded-xl border border-ink/15 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-ink/45";

  return (
    <section id="start" className="relative isolate overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="bloom-soft pointer-events-none absolute -left-40 top-0 h-[42rem] w-[42rem] rounded-full opacity-80 blur-[40px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          label="Start a project"
          title="Tell us what you need."
          intro="Two minutes now saves a lot of back-and-forth later. We reply within one working day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-ink/12 bg-card/60 p-6 backdrop-blur-sm sm:p-9">
            {sent ? (
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-heading text-3xl font-semibold tracking-tight">Brief received.</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  Thanks {form.name.trim().split(" ")[0]} — we'll come back within one working day with a few
                  questions and a time for that 30-minute call.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 rounded-full border border-ink/25 px-5 py-2.5 text-sm transition-colors duration-300 hover:bg-background/60"
                >
                  Send another brief
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-9">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                    Step 1 · What you need
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((option) => (
                      <ToggleChip
                        key={option}
                        label={option}
                        active={services.includes(option)}
                        onClick={() => toggle(option, services, setServices)}
                      />
                    ))}
                  </div>
                </div>

                <div className="border-t border-ink/12 pt-7">
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                    Step 2 · What it should achieve
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {GOAL_OPTIONS.map((option) => (
                      <ToggleChip
                        key={option}
                        label={option}
                        active={goals.includes(option)}
                        onClick={() => toggle(option, goals, setGoals)}
                      />
                    ))}
                  </div>
                </div>

                <div className="border-t border-ink/12 pt-7">
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                    Step 3 · Who we're speaking to
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="lead-name" className="text-xs text-muted-foreground">
                        Your name
                      </label>
                      <input
                        id="lead-name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Alex Morgan"
                        className={`mt-2 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-business" className="text-xs text-muted-foreground">
                        Business name
                      </label>
                      <input
                        id="lead-business"
                        value={form.business}
                        onChange={update("business")}
                        placeholder="Morgan & Sons"
                        className={`mt-2 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-email" className="text-xs text-muted-foreground">
                        Email
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="alex@morganandsons.co"
                        className={`mt-2 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-phone" className="text-xs text-muted-foreground">
                        Phone <span className="text-muted-foreground/70">(optional)</span>
                      </label>
                      <input
                        id="lead-phone"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="07700 900123"
                        className={`mt-2 ${inputClass}`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="lead-details" className="text-xs text-muted-foreground">
                        Anything else we should know?
                      </label>
                      <textarea
                        id="lead-details"
                        rows={4}
                        value={form.details}
                        onChange={update("details")}
                        placeholder="Our current site is eight years old and we lose orders when it's busy…"
                        className={`mt-2 resize-none ${inputClass}`}
                      />
                    </div>
                  </div>
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send the brief"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-xs text-muted-foreground">No mailing list, no sales calls.</p>
                </div>
              </form>
            )}
          </div>

          <ScopeSummary services={services} goals={goals} />
        </div>
      </div>
    </section>
  );
}