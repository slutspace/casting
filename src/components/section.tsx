import { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        {(eyebrow || title || description) && (
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 mb-14 md:mb-16 items-end">
            {eyebrow && (
              <div className="md:col-span-3 eyebrow">{eyebrow}</div>
            )}
            <div className="md:col-span-6">
              {title && (
                <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-editorial">
                  {title}
                </h2>
              )}
            </div>
            {description && (
              <div className="md:col-span-3 text-[15px] leading-relaxed text-ink/70">
                {description}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
