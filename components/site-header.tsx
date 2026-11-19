'use client';

import { useState } from 'react';
import { DarkModeToggle } from 'jamstacks';
import { business, phoneHref } from '../content/business';
import { CrestWordmark } from './art/crest';
import { HeaderPerimeter } from './art/motifs';
import { Icon } from './art/icons';
import { SiteLink } from './site-link';

const NAV_ITEMS = [
  { href: '/pests/', label: 'Pests' },
  { href: '/inspections/', label: 'Inspections & plans' },
  { href: '/safe-at-home/', label: 'Safe at home' },
  { href: '/contact/', label: 'Contact' },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-double-rule sticky top-0 z-40 bg-bg/95 backdrop-blur-xs">
      <div className="wrap flex min-h-[4.75rem] items-center justify-between gap-3 py-2.5">
        <SiteLink
          href="/"
          className="shrink-0 no-underline hover:no-underline"
          aria-label={`${business.name} — Home`}
        >
          <CrestWordmark />
        </SiteLink>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map(item => (
            <SiteLink
              key={item.href}
              href={item.href}
              markCurrent="page"
              className="nav-link text-[0.95rem]"
            >
              {item.label}
            </SiteLink>
          ))}
        </nav>

        {/* Desktop right controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={phoneHref(business.phone)}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-wide text-sepia hover:text-accent-ink"
          >
            <Icon name="phone" className="h-4 w-4 text-accent-ink" />
            <span>{business.phone}</span>
          </a>
          <DarkModeToggle />
          <SiteLink href="/contact/" className="button text-sm">
            Book a free inspection
          </SiteLink>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <DarkModeToggle />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(open => !open)}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-ui border border-line bg-surface px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink"
          >
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
              ) : (
                <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-surface px-4 pb-6 pt-4 shadow-md lg:hidden"
        >
          <div className="wrap flex flex-col gap-4">
            <SiteLink
              href="/contact/"
              className="button w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Book a free inspection
            </SiteLink>

            <nav aria-label="Mobile" className="flex flex-col divide-y divide-line/60">
              <SiteLink
                href="/"
                markCurrent="page"
                className="py-2.5 font-serif text-lg text-ink"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </SiteLink>
              {NAV_ITEMS.map(item => (
                <SiteLink
                  key={item.href}
                  href={item.href}
                  markCurrent="page"
                  className="py-2.5 font-serif text-lg text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </SiteLink>
              ))}
            </nav>

            <div className="border-t border-line pt-3 flex items-center justify-between text-sm">
              <a
                href={phoneHref(business.phone)}
                className="inline-flex items-center gap-2 font-mono font-bold text-accent-ink"
              >
                <Icon name="phone" className="h-4 w-4" />
                <span>{business.phone}</span>
              </a>
              <span className="font-mono text-xs text-muted">Charlotte, NC</span>
            </div>
          </div>
        </div>
      ) : null}

      <HeaderPerimeter />
    </header>
  );
}
