import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { siteConfig } from '../data/site';
import { Mail, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Question regarding cleaning or odor',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect contact form endpoint (e.g. Formspree, Resend, or serverless function)
    console.log('[Contact Form Submission]:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Contact Clean Cat Home | Reader Inquiries & Editorial"
        description="Get in touch with the editors of Clean Cat Home for practical cat care questions, editorial feedback, or partnership opportunities."
        canonical={`${siteConfig.url}/contact`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        <div className="my-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48]">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252422] tracking-tight">
            Contact the Editors
          </h1>
          <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed">
            Have a difficult cat odor problem you’d like us to research, or feedback on one of our cleaning guides? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-8">
          {/* Contact Details */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#252422]">
                Editorial Correspondence
              </h3>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                For questions regarding guides, corrections, or suggestions for future problem topics:
              </p>
              <div className="flex items-center gap-2.5 text-xs font-medium text-[#8F6D48]">
                <Mail className="w-4 h-4 text-[#B9593E]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8E0D2] text-xs text-[#5C5852] space-y-2">
              <span className="font-semibold text-[#252422] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5A705E]" />
                Urgent Veterinary Notice
              </span>
              <p className="leading-relaxed">
                We cannot provide personalized medical diagnosis or triage over email. If your cat is showing signs of physical distress or urinary obstruction, please reach out to your local emergency veterinarian.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-3xl bg-[#EBF1EC] border border-[#D5E2D7] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#3F5243] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#252422]">
                  Message Received
                </h3>
                <p className="text-sm text-[#4A443E] max-w-sm mx-auto">
                  Thank you for reaching out. We review reader questions weekly and use common challenges to inspire future comprehensive guides.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-[#FDFBF8] border border-[#E8E2D8] space-y-4 shadow-xs">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-[#FAF8F5] border border-[#E8E2D8] text-[#252422] focus:outline-none focus:border-[#8F6D48]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-[#FAF8F5] border border-[#E8E2D8] text-[#252422] focus:outline-none focus:border-[#8F6D48]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1.5">
                    Topic of Inquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-[#FAF8F5] border border-[#E8E2D8] text-[#252422] focus:outline-none focus:border-[#8F6D48] cursor-pointer"
                  >
                    <option value="Question regarding cleaning or odor">Question regarding cleaning or odor</option>
                    <option value="Litter box routine feedback">Litter box routine feedback</option>
                    <option value="Cat room / furniture design suggestion">Cat room / furniture design suggestion</option>
                    <option value="Editorial correction / feedback">Editorial correction / feedback</option>
                    <option value="Partnership / display ad inquiry">Partnership / display ad inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what problem you are trying to solve..."
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-[#FAF8F5] border border-[#E8E2D8] text-[#252422] focus:outline-none focus:border-[#8F6D48]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#252422] text-[#FAF8F5] hover:bg-[#3D3A35] transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
