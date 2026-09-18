import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScenarioItem } from '../../types';

interface ScenarioSelectorProps {
  title?: string;
  scenarios: ScenarioItem[];
}

export const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({
  title = 'What Best Describes Your Situation?',
  scenarios,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  if (!scenarios || scenarios.length === 0) return null;

  const activeScenario = scenarios[selectedIndex] || scenarios[0];

  return (
    <div className="my-10 p-6 sm:p-7 rounded-2xl bg-[#F7F4EE] border border-[#DDD4C6] shadow-xs">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E8E0D2]">
        <HelpCircle className="w-5 h-5 text-[#8F6D48]" />
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#252422]">
          {title}
        </h3>
      </div>

      {/* Radio Scenario Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
        {scenarios.map((scen, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`p-3.5 rounded-xl text-left transition-all border text-xs sm:text-sm flex items-center justify-between cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#B9593E] text-[#252422] font-semibold shadow-xs ring-1 ring-[#B9593E]'
                  : 'bg-[#FAF8F5] border-[#E8E2D8] text-[#5C5852] hover:bg-white hover:text-[#252422]'
              }`}
            >
              <span>{scen.label}</span>
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  isSelected
                    ? 'border-[#B9593E] bg-[#B9593E]'
                    : 'border-[#C5BBAE] bg-white'
                }`}
              >
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Solution Output */}
      <div className="p-5 rounded-xl bg-white border border-[#E0D8CC] space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3F5243]">
          <CheckCircle2 className="w-4 h-4 text-[#5A705E]" />
          <span>Recommended Next Action</span>
        </div>

        <p className="text-sm sm:text-[15px] text-[#252422] font-medium leading-relaxed">
          {activeScenario.recommendation}
        </p>

        {activeScenario.link && (
          <div className="pt-2">
            <Link
              to={activeScenario.link.url}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B9593E] hover:underline"
            >
              <span>{activeScenario.link.text}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
