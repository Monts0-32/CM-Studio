import React from "react";

function List({ title, items, empty }) {
  return (
    <div className="border-t border-ink/12 pt-5">
      <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">{title}</p>
      {items.length ? (
        <ul className="mt-3 grid gap-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">{empty}</p>
      )}
    </div>
  );
}

export default function ScopeSummary({ services, goals }) {
  return (
    <aside className="h-fit rounded-3xl border border-ink/12 bg-card/60 p-7 backdrop-blur-sm lg:sticky lg:top-24">
      <p className="font-heading text-xl font-medium tracking-tight">Your brief so far</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Nothing is sent until you press send. This just keeps track of what you've picked.
      </p>
      <div className="mt-6 grid gap-6">
        <List title="Services" items={services} empty="Pick what you need — start with the closest one." />
        <List title="Goals" items={goals} empty="Choose what the site should achieve." />
      </div>
      <div className="mt-7 border-t border-ink/12 pt-5">
        <p className="text-sm text-foreground">Most builds launch in three to four weeks.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          After a 30-minute call you get a written plan and one fixed price.
        </p>
      </div>
    </aside>
  );
}