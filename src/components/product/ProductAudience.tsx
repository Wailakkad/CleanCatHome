import React from 'react';
import { HeartHandshake, Hammer, Users } from 'lucide-react';

const cards = [
  {
    icon: HeartHandshake,
    title: 'Outdoor Cat Caregivers',
    text: 'You regularly see or care for outdoor, stray, or community cats and want at least one reliable winter shelter ready before cold weather hits.',
  },
  {
    icon: Hammer,
    title: 'DIY Cat Owners',
    text: 'You enjoy simple home projects and want to build your own outdoor cat house instead of guessing through multiple tutorials.',
  },
  {
    icon: Users,
    title: 'Rescue Volunteers & TNR Supporters',
    text: 'You support community cats and need a repeatable plan, plus printable checklists you can share when setting up multiple shelters.',
  },
];

export const ProductAudience: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#252422] tracking-tight">
            Is This Starter Kit Right for You?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] p-7 text-center hover:shadow-sm transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF0EC] border border-[#EFD9CF] flex items-center justify-center mx-auto mb-5">
                <Icon className="w-5 h-5 text-[#B9593E]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#252422] mb-3">
                {title}
              </h3>
              <p className="text-[#5C5852] text-[15px] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
