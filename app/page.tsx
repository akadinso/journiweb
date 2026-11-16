"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Globe,
  MessageSquare,
  Workflow,
  Zap,
  Target,
  CalendarDays,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TALLY_URL =
  process.env.NEXT_PUBLIC_TALLY_FORM_URL ?? "https://tally.so/r/7XKK0R";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/akadinso-osuagwu/intro-call";

const services = [
  {
    title: "AI Lead Generation",
    description:
      "Capture, qualify, and manage potential customers with AI-powered lead-generation systems that help your team respond consistently.",
    icon: Target,
    outcomes: [
      "Website and campaign lead capture",
      "AI-assisted lead qualification",
      "Automated lead follow-ups",
      "CRM and booking integrations",
    ],
  },
  {
    title: "Web Development",
    description:
      "Build a credible, high-performing digital presence with responsive websites and web applications designed around your business goals.",
    icon: Globe,
    outcomes: [
      "Business websites and landing pages",
      "Responsive, mobile-first experiences",
      "Contact and booking integrations",
      "Performance and SEO foundations",
    ],
  },
  {
    title: "AI Automation",
    description:
      "Connect your tools and streamline repetitive work with practical automations and AI-assisted workflows.",
    icon: Workflow,
    outcomes: [
      "Lead and customer workflow automation",
      "Email and appointment workflows",
      "CRM and data synchronisation",
      "Custom integrations and AI assistants",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn about your business, your current process, and the outcome you want to achieve.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Plan & Build",
    description:
      "We recommend a suitable approach, agree on the scope, and build your website or solution.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Test & Launch",
    description:
      "We test the solution with you, make agreed refinements, and prepare it for launch.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Improve",
    description:
      "Where ongoing support is agreed, we monitor, maintain, and improve the solution over time.",
    icon: Bot,
  },
];

const pricingGroups = [
  {
    title: "AI Lead Generation",
    plans: [
      {
        name: "Starter",
        price: "R4,999",
        description: "For businesses beginning to systemise lead capture.",
        features: [
          "AI chatbot on 1 website",
          "Up to 50 leads per month",
          "Basic CRM integration",
          "Email support",
          "Monthly reporting",
        ],
      },
      {
        name: "Growth",
        price: "R9,999",
        description:
          "For growing businesses that need a stronger lead process.",
        features: [
          "AI chatbot on up to 3 websites",
          "Up to 200 leads per month",
          "Advanced CRM automation",
          "Priority support",
          "Weekly reporting",
          "Custom landing pages",
        ],
        featured: true,
      },
      {
        name: "Scale",
        price: "R19,999",
        description: "For businesses with more advanced lead-generation needs.",
        features: [
          "Multi-website deployment",
          "Higher-volume lead handling",
          "Custom workflow automation",
          "Dedicated account coordination",
          "Advanced reporting",
          "Custom AI configuration",
        ],
      },
    ],
  },
  {
    title: "Web Development",
    plans: [
      {
        name: "Landing Page",
        price: "R2,999",
        description: "A focused page for one offer, service, or campaign.",
        features: [
          "1 custom landing page",
          "Mobile-responsive design",
          "Contact form integration",
          "Performance foundations",
          "2 rounds of revisions",
          "1 month of support",
        ],
      },
      {
        name: "Business Website",
        price: "R7,999",
        description: "A professional multi-page website for your business.",
        features: [
          "Up to 5 custom pages",
          "Responsive design",
          "SEO foundations",
          "Contact and booking forms",
          "Analytics setup",
          "3 rounds of revisions",
        ],
        featured: true,
      },
      {
        name: "E-commerce",
        price: "R14,999",
        description:
          "An online store for selling products and managing orders.",
        features: [
          "Online storefront",
          "Up to 50 initial products",
          "Payment gateway integration",
          "Cart and checkout",
          "Product management",
          "Order management setup",
        ],
      },
    ],
  },
  {
    title: "AI Automation",
    plans: [
      {
        name: "Essential",
        price: "R3,499",
        description: "Automate a small set of everyday business tasks.",
        features: [
          "Up to 3 automation workflows",
          "Email automation",
          "Calendar and scheduling workflow",
          "Basic data synchronisation",
          "Setup and handover",
          "1 month of support",
        ],
      },
      {
        name: "Professional",
        price: "R6,999",
        description: "Connect key tools and processes across your business.",
        features: [
          "Up to 10 automation workflows",
          "CRM integration",
          "Invoice and payment workflow options",
          "Document-generation workflow",
          "Third-party app integrations",
          "Custom reporting",
        ],
        featured: true,
      },
      {
        name: "Enterprise",
        price: "R12,999",
        description: "For complex workflows and broader integration needs.",
        features: [
          "Scoped multi-workflow solution",
          "Multi-platform integrations",
          "AI-assisted automation options",
          "Custom API integrations",
          "Advanced reporting",
          "Priority support",
        ],
      },
    ],
  },
];

function ExternalButton({
  href,
  children,
  variant = "default",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Button asChild variant={variant} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link
            href="/"
            aria-label="JourniWeb home"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="JourniWeb"
              width={180}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
          </div>

          <ExternalButton href={CALENDLY_URL} className="font-semibold">
            Book a consultation <ArrowRight className="ml-2 h-4 w-4" />
          </ExternalButton>
        </div>
      </nav>

      <section className="relative overflow-hidden px-4 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container relative mx-auto">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Zap className="h-4 w-4" />
              AI Lead Generation · Web Development · AI Automation
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Digital solutions that{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                move business forward.
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/70 md:text-2xl">
              JourniWeb helps businesses attract and manage leads, build a
              stronger online presence, and automate repetitive work with
              practical technology.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
              <ExternalButton
                href={TALLY_URL}
                className="px-8 py-6 text-base font-semibold shadow-lg"
              >
                Tell us about your project{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </ExternalButton>
              <ExternalButton
                href={CALENDLY_URL}
                variant="outline"
                className="px-8 py-6 text-base font-semibold"
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                Book a consultation
              </ExternalButton>
            </div>
            <p className="text-sm text-muted-foreground">
              South Africa · Remote consultations available
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-muted/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What we do
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Three services. Practical outcomes.
            </h2>
            <p className="text-lg text-foreground/70">
              Choose the service that addresses your current business challenge.
              We can also combine services where a project requires it.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="h-full border-2 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ul className="space-y-3">
                      {service.outcomes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ExternalButton
                      href={TALLY_URL}
                      variant="outline"
                      className="w-full"
                    >
                      Enquire about this service{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </ExternalButton>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our process
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              From business challenge to working solution.
            </h2>
            <p className="text-lg text-foreground/70">
              A clear process keeps the project focused and expectations
              aligned.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.step} className="relative border-2">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-bold text-primary">
                      {item.step}
                    </p>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-muted/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Pricing
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Choose a starting point.
            </h2>
            <p className="text-lg text-foreground/70">
              These packages provide an initial guide. Final scope,
              integrations, ongoing costs, and delivery timelines are confirmed
              in a proposal.
            </p>
          </div>

          <div className="space-y-20">
            {pricingGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-10 text-center text-3xl font-bold text-primary">
                  {group.title}
                </h3>
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
                  {group.plans.map((plan) => (
                    <Card
                      key={plan.name}
                      className={`relative flex h-full flex-col ${
                        plan.featured
                          ? "border-primary border-2 shadow-xl"
                          : "border-2"
                      }`}
                    >
                      {plan.featured && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                          Popular choice
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <p className="text-3xl font-bold">{plan.price}</p>
                        <CardDescription className="text-base">
                          {plan.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col gap-6">
                        <ul className="flex-1 space-y-3">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 text-sm"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                              <span className="text-foreground/80">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <ExternalButton
                          href={TALLY_URL}
                          variant={plan.featured ? "default" : "outline"}
                          className="w-full"
                        >
                          Request a proposal{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </ExternalButton>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto">
          <Card className="mx-auto max-w-4xl border-2 shadow-xl">
            <CardContent className="space-y-6 p-8 text-center md:p-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-foreground/70">
                Tell us what you want to improve. We’ll review your requirements
                and discuss a practical next step for your business.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ExternalButton
                  href={TALLY_URL}
                  className="px-8 py-6 font-semibold"
                >
                  Start an enquiry <ArrowRight className="ml-2 h-5 w-5" />
                </ExternalButton>
                <ExternalButton
                  href={CALENDLY_URL}
                  variant="outline"
                  className="px-8 py-6 font-semibold"
                >
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book a consultation
                </ExternalButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/40 px-4 py-12">
        <div className="container mx-auto">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-4">
              <Image
                src="/logo.png"
                alt="JourniWeb"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                AI lead generation, web development, and AI automation for
                businesses looking to build smarter digital operations.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#services" className="hover:text-foreground">
                    AI Lead Generation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-foreground">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-foreground">
                    AI Automation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="mailto:contact@journiweb.co.za"
                    className="hover:text-foreground"
                  >
                    contact@journiweb.co.za
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/27710811915"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    +27 71 081 1915 (WhatsApp)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/journiweb-za-a5b80b3a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61578639140595"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 text-sm text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} JourniWeb. All rights reserved.</p>
            <p>Powered by JourniWeb</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
