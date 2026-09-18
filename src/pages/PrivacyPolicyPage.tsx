import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { siteConfig } from '../data/site';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Privacy Policy | Clean Cat Home"
        description="Privacy policy and data transparency guidelines for visitors to Clean Cat Home."
        canonical={`${siteConfig.url}/privacy-policy`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="my-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8F6D48]">
            Legal Transparency
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#252422]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#706B63]">Last updated: September 16, 2026</p>
        </div>

        <div className="prose prose-stone max-w-none text-[#332F2A] leading-relaxed space-y-5 text-sm sm:text-base">
          <p>
            At <strong>Clean Cat Home</strong>, accessible from {siteConfig.url}, one of our core priorities is the privacy of our visitors. This Privacy Policy document details the types of information collected and how we utilize it.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">1. Information We Collect</h2>
          <p>
            We collect information when you voluntarily subscribe to our newsletter, submit our contact form, or browse our pages. This may include your email address and name. We never sell or distribute your personal contact information to third-party data brokers.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">2. Log Files & Analytics</h2>
          <p>
            Clean Cat Home follows a standard procedure of using log files. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose is to analyze trends, administer the site, track users' movement on the website, and gather demographic information.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, Clean Cat Home uses &lsquo;cookies&rsquo;. These cookies are used to store information including visitors&rsquo; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize user experience by customizing our web page content based on visitors&rsquo; browser type and/or other information.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">4. Advertising Partners & Display Networks</h2>
          <p>
            Third-party ad servers or ad networks (such as Google AdSense, Raptive, or Mediavine) may use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Clean Cat Home. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[#252422]">5. CCPA and GDPR Privacy Rights</h2>
          <p>
            Under data protection regulations including CCPA and GDPR, you are entitled to request access to, correction of, or deletion of any personal data stored by our systems (such as newsletter subscription lists). To exercise any of these rights, please contact our privacy compliance team via our contact form.
          </p>
        </div>
      </div>
    </div>
  );
};
