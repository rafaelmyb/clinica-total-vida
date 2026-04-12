"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/container";
import { ScheduleConsultationLink } from "@/components/schedule-consultation-link";
import { mainNav } from "@/lib/site-nav";
import { siteImages } from "@/lib/site-images";

const navLinkClass = (active: boolean) =>
  `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
    active
      ? "bg-brand text-[#25D366] shadow-sm ring-1 ring-brand/15"
      : "text-muted hover:bg-brand-soft/50 hover:text-ink"
  }`;

const drawerNavLinkClass = (active: boolean) =>
  `block w-full rounded-2xl px-4 py-3.5 text-base font-medium text-left transition-colors ${
    active
      ? "bg-brand-soft text-brand shadow-sm ring-1 ring-brand/15"
      : "text-muted hover:bg-brand-soft/50 hover:text-ink"
  }`;

const SCROLL_SOLID_THRESHOLD_PX = 12;

export const SiteHeader = () => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_SOLID_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen, closeDrawer]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solidBar = scrolled || drawerOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-out motion-reduce:transition-none ${
        solidBar
          ? "border-brand/10 bg-canvas/92 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between gap-4 py-4 px-8! lg:gap-6 max-w-full">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2"
          onClick={closeDrawer}
        >
          <Image
            src={siteImages.clinica.logoHeader}
            alt={siteImages.clinica.altLogo}
            width={1210}
            height={709}
            unoptimized
            className="h-10 w-auto max-w-[min(200px,55vw)] object-contain object-left bg-transparent"
            sizes="(max-width: 640px) 55vw, 200px"
            priority
          />
        </Link>

        <nav
          aria-label="Principal"
          className="hidden min-w-0 flex-1 justify-center lg:flex"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={navLinkClass(active)}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <ScheduleConsultationLink />
        </div>

        <div className="ml-auto lg:hidden">
          <IconButton
            type="button"
            color="inherit"
            aria-label="Abrir menu"
            aria-expanded={drawerOpen}
            aria-controls="site-header-drawer"
            onClick={() => setDrawerOpen(true)}
            size="medium"
            className="text-ink"
          >
            <MenuIcon />
          </IconButton>
          {/* <ScheduleConsultationLink variant="inline" /> */}
        </div>
      </Container>

      <Drawer
        id="site-header-drawer"
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        slotProps={{
          backdrop: { sx: { backgroundColor: "rgba(26, 26, 26, 0.45)" } },
          paper: {
            className: "bg-canvas",
            sx: {
              width: "min(70vw, 360px)",
              maxWidth: "100%",
              boxSizing: "border-box",
            },
          },
        }}
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex shrink-0 items-center justify-end border-b border-brand/10 px-2 py-2">
            <IconButton
              type="button"
              aria-label="Fechar menu"
              onClick={closeDrawer}
              size="medium"
              className="text-ink"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <nav
            aria-label="Principal"
            className="min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-2"
          >
            <ul className="flex flex-col gap-2">
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={drawerNavLinkClass(active)}
                      aria-current={active ? "page" : undefined}
                      onClick={closeDrawer}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="shrink-0 border-t border-brand/10 p-4">
            <ScheduleConsultationLink variant="fullWidth" />
          </div>
        </div>
      </Drawer>
    </header>
  );
};
