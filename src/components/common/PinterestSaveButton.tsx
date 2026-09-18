import React, { useState } from 'react';
import { Bookmark, Check, Share2 } from 'lucide-react';

interface PinterestSaveButtonProps {
  url?: string;
  media?: string;
  description?: string;
  variant?: 'primary' | 'compact' | 'badge';
}

export const PinterestSaveButton: React.FC<PinterestSaveButtonProps> = ({
  url,
  media,
  description,
  variant = 'primary',
}) => {
  const [copied, setCopied] = useState(false);

  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://cleancathome.com');
  const imageUrl = media ? (media.startsWith('http') ? media : `https://cleancathome.com${media}`) : 'https://cleancathome.com/images/blog/cat-urine-smell.svg';
  const descText = description || 'Clean Cat Home - Practical ideas for happier cats and cleaner homes.';

  const handlePinterestClick = () => {
    const pinUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(descText)}`;
    window.open(pinUrl, '_blank', 'noopener,noreferrer,width=750,height=600');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  if (variant === 'badge') {
    return (
      <button
        onClick={handlePinterestClick}
        aria-label="Save to Pinterest"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E60023] hover:bg-[#B8001C] text-white shadow-xs transition-colors cursor-pointer"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
        <span>Pin</span>
      </button>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={handlePinterestClick}
        aria-label="Save this guide for later on Pinterest"
        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#FAF0EC] hover:bg-[#F5E2DA] text-[#B9593E] border border-[#EACEC5] transition-all cursor-pointer shadow-xs active:scale-98"
      >
        <svg className="w-4 h-4 fill-current text-[#E60023]" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
        <span>Save this guide for later</span>
      </button>

      <button
        onClick={handleCopyLink}
        aria-label="Copy article link"
        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-medium bg-[#FAF8F5] hover:bg-[#F3EFE9] text-[#5C5852] border border-[#E8E2D8] transition-colors cursor-pointer"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-[#3F5243]" />
            <span className="text-[#3F5243] font-semibold">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </>
        )}
      </button>
    </div>
  );
};
