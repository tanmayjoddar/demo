import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/work", label: "Work" },
  { to: "/philosophy", label: "Philosophy" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

const menuLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/philosophy", label: "Philosophy" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <header className="relative z-50 flex h-20 items-center justify-between px-5 sm:px-10 lg:px-12">
        <Link
          to="/"
          className="font-display text-2xl font-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Inch<span className="italic text-primary">ByInch</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary font-semibold" }}
              className="nav-link transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="menu"
          size="menu"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="[&_svg]:size-5"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>Menu</span>
          <Menu aria-hidden="true" />
        </Button>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex min-h-dvh flex-col bg-foreground text-background animate-in fade-in duration-200">
          <div className="flex h-20 items-center justify-between px-5 sm:px-10 lg:px-12">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-light text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Inch<span className="italic text-primary">ByInch</span>
            </Link>
            <Button
              variant="menuInverse"
              size="menu"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="[&_svg]:size-5"
            >
              <span>Close</span>
              <X aria-hidden="true" />
            </Button>
          </div>
          <nav
            aria-label="Menu"
            className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-10 sm:px-10"
          >
            {menuLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="group flex items-center justify-between border-b border-background/15 py-4 font-display text-4xl font-light transition-colors hover:text-primary sm:py-5 sm:text-6xl lg:text-7xl"
              >
                <span>{link.label}</span>
                <span className="font-sans text-xs text-primary transition-transform group-hover:translate-x-1">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="px-5 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 border-t border-border pt-12 lg:flex-row lg:items-end">
        <div>
          <p className="font-display text-4xl font-light">
            Let’s make a room
            <br />
            <span className="italic text-primary">worth remembering.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-7 text-label">
            <Link to="/work" className="hover:text-primary transition-colors">
              Work
            </Link>
            <Link to="/philosophy" className="hover:text-primary transition-colors">
              Philosophy
            </Link>
            <Link to="/reviews" className="hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <a
              href="https://instagram.com"
              rel="noreferrer"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="text-left text-label text-muted-foreground lg:text-right">
          <p>© 2026 InchByInch Studio</p>
          <p className="mt-2">Bardhaman · West Bengal</p>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="px-5 pb-20 pt-16 sm:px-10 lg:px-12 lg:pb-28 lg:pt-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="text-label text-primary">{eyebrow}</p>
          <h1 className="mt-6 font-display text-6xl font-light leading-[0.9] sm:text-8xl lg:text-9xl">
            {title}
          </h1>
        </div>
        <div className="self-end text-base leading-relaxed text-muted-foreground lg:col-span-4">
          {children}
        </div>
      </div>
    </section>
  );
}
