import React from 'react';
import { Article } from '../../types';
import { QuickAnswerBox } from './QuickAnswerBox';
import { ChecklistBox } from './ChecklistBox';
import { DecisionBox } from './DecisionBox';
import { ProTipBox } from './ProTipBox';
import { WarningBox } from './WarningBox';
import { ComparisonTable } from './ComparisonTable';
import { KeyTakeaways } from './KeyTakeaways';
import { NextStepBox } from './NextStepBox';
import { ScenarioSelector } from './ScenarioSelector';
import { ArticleBody } from './ArticleBody';
import { AlertTriangle, Wrench, Calendar, CheckCircle2 } from 'lucide-react';

interface ArticleRendererProps {
  article: Article;
  onScrollToSteps?: () => void;
}

export const ArticleRenderer: React.FC<ArticleRendererProps> = ({
  article,
  onScrollToSteps,
}) => {
  return (
    <div className="article-renderer-stream space-y-8">
      {/* 1. Quick Answer Box */}
      {article.quickAnswer && (
        <QuickAnswerBox
          quickAnswer={article.quickAnswer}
          onScrollToDetails={onScrollToSteps}
        />
      )}

      {/* 2. Interactive Scenario Selector (Personalization) */}
      {article.scenarios && article.scenarios.length > 0 && (
        <ScenarioSelector scenarios={article.scenarios} />
      )}

      {/* 3. What You'll Need Materials Checklist */}
      {article.materials && article.materials.length > 0 && (
        <ChecklistBox
          title="What You'll Need"
          items={article.materials}
        />
      )}

      {/* 4. Decision Helper Box */}
      {article.decisions && article.decisions.length > 0 && (
        <DecisionBox
          title="If Your Problem Is..."
          items={article.decisions}
        />
      )}

      {/* 5. Core Article Body with HTML sections and 6 supporting images */}
      <ArticleBody
        content={article.content}
        supportingImages={article.images.supporting}
        category={article.category}
        articleTitle={article.title}
      />

      {/* 6. Explicit Structured Steps if provided */}
      {article.steps && article.steps.length > 0 && (
        <section id="step-by-step-guide" className="my-10 space-y-6 scroll-mt-24">
          <div className="border-b border-[#E8E2D8] pb-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48] block mb-1">
              Step-by-Step Practical Routine
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#252422]">
              The Complete Step-by-Step Method
            </h2>
          </div>

          <div className="space-y-6">
            {article.steps.map((step) => (
              <div
                key={step.number}
                className="p-6 sm:p-7 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] shadow-xs space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#252422] text-[#FAF8F5] font-serif font-bold text-sm flex items-center justify-center">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#252422]">
                    STEP {step.number} — {step.title}
                  </h3>
                </div>

                <div className="space-y-3 pl-0 sm:pl-11 text-sm leading-relaxed text-[#3D3A35]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#706B63] block mb-1">
                      What to do:
                    </span>
                    <p className="font-medium text-[#252422]">{step.whatToDo}</p>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48] block mb-1">
                      Why it matters:
                    </span>
                    <p className="text-[#5C5852]">{step.whyItMatters}</p>
                  </div>

                  {step.tip && (
                    <div className="p-3.5 rounded-xl bg-[#F2F6F3] border border-[#CFDFD3] text-xs text-[#2B382E]">
                      <span className="font-bold text-[#3F5243] block mb-0.5">
                        Helpful Tip:
                      </span>
                      {step.tip}
                    </div>
                  )}

                  {step.mistake && (
                    <div className="p-3.5 rounded-xl bg-[#FCF7F6] border border-[#ECCFC7] text-xs text-[#4E2E25]">
                      <span className="font-bold text-[#B9593E] block mb-0.5">
                        Common Mistake:
                      </span>
                      {step.mistake}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Pro Tips */}
      {article.proTips && article.proTips.length > 0 && (
        <div className="space-y-4 my-8">
          {article.proTips.map((tip, idx) => (
            <ProTipBox key={idx} title={tip.title}>
              {tip.text}
            </ProTipBox>
          ))}
        </div>
      )}

      {/* 8. Comparison Table */}
      {article.comparisonTable && (
        <ComparisonTable data={article.comparisonTable} />
      )}

      {/* 9. Common Mistakes Section if provided */}
      {article.mistakes && article.mistakes.length > 0 && (
        <section id="common-mistakes-to-avoid" className="my-10 scroll-mt-24">
          <div className="border-b border-[#E8E2D8] pb-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B9593E] block mb-1">
              Avoid These Traps
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#252422]">
              Common Mistakes to Avoid
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {article.mistakes.map((mistake, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#FCF7F6] border border-[#ECCFC7] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#B9593E]">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <h4 className="font-serif font-bold text-base text-[#4E2E25]">
                      Mistake #{idx + 1}: {mistake.title}
                    </h4>
                  </div>
                  <div className="text-xs sm:text-sm text-[#5C453F] space-y-2 mt-2">
                    <p>
                      <strong className="text-[#3A1B14]">Why it doesn't work:</strong>{' '}
                      {mistake.why}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8D0C7] text-xs sm:text-sm text-[#252422]">
                  <strong className="text-[#3F5243]">What to do instead:</strong>{' '}
                  {mistake.solution}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. Practical Routines (Daily / Weekly / Monthly) */}
      {article.routines && article.routines.length > 0 && (
        <section id="practical-routines" className="my-10 p-6 sm:p-7 rounded-2xl bg-[#F8F6F1] border border-[#E2DAD0] scroll-mt-24 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E8E2D8]">
            <Calendar className="w-5 h-5 text-[#8F6D48]" />
            <h3 className="font-serif text-xl font-bold text-[#252422]">
              Practical Maintenance Routine
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {article.routines.map((routine, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#EDE7DE] flex flex-col"
              >
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F0EBE1]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48]">
                    {routine.frequency}
                  </span>
                  {routine.title && (
                    <span className="text-[11px] text-[#8A8276] font-medium">
                      {routine.title}
                    </span>
                  )}
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#3D3A35] flex-1">
                  {routine.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8F6D48] mt-1.5 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 11. Troubleshooting / "If this doesn't work" */}
      {article.troubleshooting && article.troubleshooting.length > 0 && (
        <section id="troubleshooting-guide" className="my-10 scroll-mt-24">
          <div className="border-b border-[#E8E2D8] pb-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8F6D48] block mb-1">
              Troubleshooting & Diagnostics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#252422]">
              If The Basic Solution Doesn't Work
            </h2>
          </div>

          <div className="space-y-4">
            {article.troubleshooting.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] space-y-3"
              >
                <div className="flex items-center gap-2 text-base font-bold text-[#252422]">
                  <Wrench className="w-4 h-4 text-[#8F6D48]" />
                  <h4>Problem: "{item.problem}"</h4>
                </div>

                <div className="text-xs sm:text-sm text-[#5C5852] space-y-2">
                  <p>
                    <strong className="text-[#252422]">Possible causes:</strong>{' '}
                    {item.causes.join(', ')}
                  </p>
                  <p>
                    <strong className="text-[#3F5243]">What to try next:</strong>{' '}
                    {item.solution}
                  </p>
                  {item.whenToEscalate && (
                    <p className="text-[#8F6D48] italic pt-1">
                      {item.whenToEscalate}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 12. Warning Box (e.g. When to seek vet advice or safety cautions) */}
      {article.warning && (
        <WarningBox title={article.warning.title} variant="vet">
          <p className="mb-2">{article.warning.text}</p>
          {article.warning.action && (
            <p className="font-semibold text-[#6D2817]">{article.warning.action}</p>
          )}
        </WarningBox>
      )}

      {/* 13. Key Takeaways */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <KeyTakeaways items={article.keyTakeaways} />
      )}

      {/* 14. What to Do Next / Content Journey Box */}
      {article.nextStep && <NextStepBox data={article.nextStep} />}
    </div>
  );
};
