import ScrollReveal from './ScrollReveal';

export default function SectionTitle({ tag, title, subtitle, className = '' }) {
  return (
    <ScrollReveal className={`mb-12 ${className}`}>
      {tag && (
        <span className="inline-block text-xs font-semibold text-muted uppercase tracking-widest mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-muted text-lg max-w-2xl">{subtitle}</p>}
    </ScrollReveal>
  );
}
