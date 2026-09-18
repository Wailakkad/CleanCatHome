import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#EBF1EC] flex items-center justify-center text-[#3F5243] border border-[#D5E2D7] group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 18c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#252422]">
                {siteConfig.name}
              </span>
              <span className="text-[9px] tracking-widest uppercase font-sans text-[#8F6D48] font-semibold -mt-0.5">
                Cleaner Homes • Happier Cats
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {siteConfig.primaryNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-[#B9593E] relative py-1 ${
                    isActive
                      ? 'text-[#B9593E] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B9593E]'
                      : 'text-[#4A443E]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-[#B9593E] py-1 ${
                  isActive ? 'text-[#B9593E] font-semibold' : 'text-[#4A443E]'
                }`
              }
            >
              All Guides
            </NavLink>
          </nav>

          {/* Right Action: Search & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/search"
              aria-label="Search guides"
              className="p-2.5 rounded-full text-[#4A443E] hover:text-[#252422] hover:bg-[#F3EFE9] transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2.5 rounded-lg text-[#4A443E] hover:text-[#252422] hover:bg-[#F3EFE9] transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
