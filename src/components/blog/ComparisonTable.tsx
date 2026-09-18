import React from 'react';
import { Table } from 'lucide-react';
import { ComparisonTableData } from '../../types';

interface ComparisonTableProps {
  data: ComparisonTableData;
  title?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ data, title }) => {
  if (!data || !data.headers || data.headers.length === 0) return null;

  return (
    <div className="my-8 overflow-hidden rounded-2xl bg-[#FDFBF8] border border-[#E8E2D8] shadow-xs">
      {(title || data.caption) && (
        <div className="px-6 py-4 bg-[#F5F2EB] border-b border-[#E8E2D8] flex items-center gap-2">
          <Table className="w-4 h-4 text-[#8F6D48]" />
          <h4 className="font-serif text-base font-bold text-[#252422]">
            {title || data.caption}
          </h4>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-[#FAF8F5] border-b border-[#E8E2D8] text-[11px] uppercase tracking-wider text-[#706B63]">
              {data.headers.map((header, idx) => (
                <th key={idx} className="py-3 px-5 font-bold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0EBE1]">
            {data.rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="hover:bg-[#FAF8F5] transition-colors text-[#3D3A35]"
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={`py-3.5 px-5 align-top leading-relaxed ${
                      cIdx === 0 ? 'font-semibold text-[#252422]' : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
