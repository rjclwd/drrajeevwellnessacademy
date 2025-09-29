"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ThemeProvider/ModeToggle";
import { Menu } from "lucide-react";

function cx(...cls: (string | false | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/search", label: "Search" },
];

const policyLinks = [
  { href: "/policies/disclaimer", label: "Disclaimer" },
  { href: "/policies/privacy", label: "Privacy" },
  { href: "/policies/terms", label: "Terms" },
  { href: "/policies/refund", label: "Refund" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold text-base md:text-lg">
            DrRajeev <span className="text-muted-foreground">Academy</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {primaryLinks.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={l.href}
                      className={cx(
                        "px-3 py-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                        isActive(l.href) && "bg-accent text-accent-foreground"
                      )}
                    >
                      {l.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* Policies dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  Policies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-2">
                    {policyLinks.map((p) => (
                      <li key={p.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={p.href}
                            className={cx(
                              "block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                              isActive(p.href) &&
                                "bg-accent text-accent-foreground"
                            )}
                          >
                            {p.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />

          {/* CTA */}
          <Button asChild size="sm">
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <ModeToggle />
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 px-3 ml-2">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col">
                {primaryLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cx(
                      "rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                      isActive(l.href) && "bg-accent text-accent-foreground"
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
                <Separator className="my-3" />
                <div className="px-3 pb-2 text-xs uppercase tracking-wide text-muted-foreground">
                  Policies
                </div>
                {policyLinks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setOpen(false)}
                    className={cx(
                      "rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                      isActive(p.href) && "bg-accent text-accent-foreground"
                    )}
                  >
                    {p.label}
                  </Link>
                ))}
                <Separator className="my-3" />
                <Button asChild className="mx-3">
                  <Link href="/courses" onClick={() => setOpen(false)}>
                    Explore Courses
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
