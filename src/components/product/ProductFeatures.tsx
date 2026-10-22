import React from 'react';

const features = [
  {
    img: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792695314/Planning.jpg',
    imgAlt: 'Winter cat shelter planning workspace with measurements and diagrams on paper.',
    title: 'Planning & Measurements',
    text: 'Shelter design overview, entrance size and position guidance, and a printable planning worksheet to organize your dimensions and materials.',
  },
  {
    img: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792695314/Materials_img.jpg',
    imgAlt: 'Materials for a DIY winter cat shelter including insulation, straw, and simple tools arranged neatly.',
    title: 'Materials, Insulation & Bedding',
    text: 'Beginner-friendly materials and tools lists, an insulation material comparison, and a clear straw vs. blankets guide with a winter bedding checklist.',
  },
  {
    img: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792695314/Weatherproofing.jpg',
    imgAlt: 'Raised outdoor cat shelter in snow with snow cleared from the entrance.',
    title: 'Weatherproofing & Winter Maintenance',
    text: 'Step-by-step help raising and placing your shelter, plus weatherproofing tips, a weatherproofing checklist, a winter inspection tracker, and a one-page quick-check.',
  },
];

export const ProductFeatures: React.FC = () => {
  return (
    <section id="inside" className="py-14 sm:py-20 bg-[#F3EFE9] border-y border-[#E8E2D8] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48]">
            Inside the Kit
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#252422] tracking-tight">
            What You Get Inside the DIY Winter Cat Shelter Starter Kit
          </h2>
          <p className="text-[#5C5852] leading-relaxed text-base sm:text-lg">
            You&rsquo;ll receive a premium 30-page PDF you can download instantly, plus printable worksheets and checklists you can reuse each winter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ img, imgAlt, title, text }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] p-7 hover:border-[#D5E2D7] hover:shadow-sm transition-all"
            >
              <img
                src={img}
                alt={imgAlt}
                loading="lazy"
                className="inside-kit-image"
              />
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
