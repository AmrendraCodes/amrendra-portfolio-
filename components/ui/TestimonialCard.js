export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-surface-2 border border-border rounded-2xl p-8 h-full flex flex-col">
      <div className="text-accent text-xl tracking-widest mb-6">★★★★★</div>
      
      <p className="text-muted text-lg italic flex-grow mb-8 leading-relaxed">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center font-heading font-bold text-accent">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-heading font-bold text-text leading-tight">{testimonial.author}</div>
          <div className="text-muted text-sm">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
