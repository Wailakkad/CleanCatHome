import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

interface NewsletterSectionProps {
  variant?: 'inline' | 'full';
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  variant = 'full',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    // TODO: Connect your newsletter API here!
    // Supported providers: Mailchimp, ConvertKit / Kit, Klaviyo, Substack, Brevo, Beehiiv
    // Example:
    // await fetch('/api/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });

    console.log('[Newsletter Subscription Frontend Ready]:', email);
    setStatus('submitted');
  };

  if (status === 'submitted') {
    return (
      <div className={`p-8 rounded-3xl bg-[#EBF1EC] border border-[#D5E2D7] text-center my-8 ${variant === 'inline' ? 'p-6' : 'p-10'}`}>
        <div className="w-12 h-12 rounded-full bg-[#3F5243] text-white flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-[#252422] mb-2">
          You're on the list!
        </h3>
        <p className="text-sm text-[#4A443E] max-w-md mx-auto">
          Thank you for subscribing. We will send you practical, non-spammy cat home care, odor elimination, and room design ideas directly to your inbox.
        </p>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="p-6 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] my-8 shadow-xs">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F6D48] block mb-1">
          Weekly Editorial Notes
        </span>
        <h4 className="font-serif text-xl font-semibold text-[#252422] mb-2">
          Get Practical Cat Home Tips
        </h4>
        <p className="text-xs text-[#5C5852] leading-relaxed mb-4">
          Simple ideas for cleaner homes, happier indoor cats, and easier everyday care.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF8F5] border border-[#E8E2D8] text-[#252422] placeholder:text-[#A39A8E] focus:outline-none focus:border-[#8F6D48]"
          />
          <button
            type="submit"
            className="w-full px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-colors cursor-pointer"
          >
            Get the Tips
          </button>
        </form>
      </div>
    );
  }

  return (
    <section className="my-16 sm:my-20">
      <div className="rounded-3xl bg-[#F4EFEA] border border-[#E8E2D8] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 rounded-full bg-[#EAE3D7]/60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 rounded-full bg-[#EAE3D7]/60 pointer-events-none" />

        <div className="relative max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E0D8CB] flex items-center justify-center mx-auto mb-5 text-[#8F6D48] shadow-xs">
            <Mail className="w-6 h-6" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48] block mb-2">
            Weekly Feline Living Newsletter
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252422] tracking-tight mb-4">
            Get Practical Cat Home Tips
          </h2>

          <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed mb-8">
            Simple ideas for cleaner homes, happier indoor cats, and easier everyday care. Delivered once weekly with zero clutter or sales pitches.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full text-sm bg-[#FAF8F5] border border-[#DDD5C7] text-[#252422] placeholder:text-[#9E9588] focus:outline-none focus:border-[#8F6D48] shadow-xs"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full text-sm font-semibold bg-[#252422] text-[#FAF8F5] hover:bg-[#3E3B36] transition-all cursor-pointer shadow-xs whitespace-nowrap active:scale-98"
            >
              Get the Tips
            </button>
          </form>

          <p className="mt-4 text-[11px] text-[#8F887C]">
            We respect your privacy. Unsubscribe anytime with a single click.
          </p>
        </div>
      </div>
    </section>
  );
};
