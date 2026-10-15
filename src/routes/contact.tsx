import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Navigation, Phone, Star } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

const PHONE_DISPLAY = "091268 01517";
const PHONE_TEL = "tel:+919126801517";
const WHATSAPP_LINK =
  "https://wa.me/919126801517?text=Hello%20Inch%20by%20Inch%2C%20I%27d%20like%20to%20discuss%20an%20interior%20project.";
const ADDRESS = "D.V.C. More, Vinayake Apartment, Bardhaman, Gopalnagar P, West Bengal 713103";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Inch%20by%20Inch%20to%20fulfil%20your%20dream%20Bardhaman%20West%20Bengal%20713103&output=embed";
const MAPS_DIRECTIONS =
  "https://www.google.com/maps/search/?api=1&query=Inch%20by%20Inch%20to%20fulfil%20your%20dream%20Bardhaman%20713103";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Studio — InchByInch" },
      {
        name: "description",
        content:
          "Visit, call or WhatsApp Inch by Inch to fulfil your dream — 4.9-rated interior designer in Bardhaman, West Bengal.",
      },
      { property: "og:title", content: "Contact & Studio — InchByInch" },
      {
        property: "og:description",
        content: "D.V.C. More, Bardhaman. Open daily, closes 8:30 pm. Call or WhatsApp us today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Visit · Call · WhatsApp"
        title={
          <>
            Come, call,
            <br />
            <span className="italic text-primary">let&apos;s talk.</span>
          </>
        }
      >
        4.9-rated interior studio in Bardhaman. Call or WhatsApp — we usually reply the same day.
      </PageIntro>

      <section className="px-5 pb-16 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Info Column */}
            <div className="space-y-6 lg:col-span-5">
              <div className="border-t border-border pt-6">
                <p className="text-label text-primary">Visit the studio</p>
                <h2 className="mt-4 font-display text-3xl font-light sm:text-4xl">
                  In the heart of Bardhaman.
                </h2>
                <p className="mt-6 flex items-start gap-2 text-sm leading-7 text-muted-foreground">
                  <MapPin aria-hidden="true" className="mt-1.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{ADDRESS}</span>
                </p>
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
                >
                  <Navigation aria-hidden="true" className="h-3.5 w-3.5" />
                  Get directions
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-label text-muted-foreground">Google rating</p>
                <div
                  className="mt-3 flex items-center gap-1.5"
                  aria-label="Rated 4.9 out of 5 on Google"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden="true"
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                  <span className="ml-1 text-sm font-bold">4.9 · 14 reviews</span>
                </div>
                <Link
                  to="/reviews"
                  className="mt-3 inline-block text-sm font-semibold text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
                >
                  Read what clients say
                </Link>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-label text-muted-foreground">Hours</p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  Open daily
                  <br />
                  Closes 8:30 pm
                </p>
              </div>
            </div>

            {/* Right Contact Card Panel — first on mobile so Call/WhatsApp are above the fold */}
            <div className="order-first lg:order-none lg:col-span-7">
              <div className="glass-panel p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
                  <div>
                    <p className="text-label text-primary">Direct line</p>
                    <p className="mt-1 font-display text-2xl font-light sm:text-3xl">
                      InchByInch Studio
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Bardhaman · Open till 8:30 pm
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="solid" size="wide" className="w-full sm:flex-1">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                      <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />
                      WhatsApp inquiry
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="wide" className="w-full sm:flex-1">
                    <a href={PHONE_TEL}>
                      <Phone aria-hidden="true" className="mr-2 h-4 w-4" />
                      Call {PHONE_DISPLAY}
                    </a>
                  </Button>
                </div>

                <dl className="mt-10 grid gap-8 border-t border-border/80 pt-8 sm:grid-cols-3">
                  <div>
                    <dt className="text-label text-muted-foreground">Call</dt>
                    <dd className="mt-2 text-sm leading-6">
                      <a
                        href={PHONE_TEL}
                        className="font-semibold text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
                      >
                        {PHONE_DISPLAY}
                      </a>
                      <p className="mt-1 text-muted-foreground">Tap to call directly</p>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-label text-muted-foreground">WhatsApp</dt>
                    <dd className="mt-2 text-sm leading-6">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
                      >
                        {PHONE_DISPLAY}
                      </a>
                      <p className="mt-1 text-muted-foreground">Chat with us instantly</p>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-label text-muted-foreground">Hours</dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground">
                      Open daily
                      <br />
                      Closes 8:30 pm
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="glass-panel mt-12 overflow-hidden">
            <iframe
              title="Map — Inch by Inch to fulfil your dream, Bardhaman"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="aspect-[4/3] w-full border-0 sm:aspect-[16/8]"
            />
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span>{ADDRESS}</span>
            </p>
            <Button asChild variant="outline" size="wide" className="shrink-0">
              <a href={MAPS_DIRECTIONS} target="_blank" rel="noreferrer">
                <Navigation aria-hidden="true" className="mr-2 h-4 w-4" />
                Get directions
              </a>
            </Button>
          </div>
        </div>
      </section>
      {/* Sticky mobile action bar — Call / WhatsApp always in thumb reach */}
      <div aria-hidden="true" className="h-[76px] md:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-2 gap-3 px-5 pb-[max(0.9rem,env(safe-area-inset-bottom))] pt-3">
          <Button asChild variant="outline" size="wide">
            <a href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`}>
              <Phone aria-hidden="true" className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
          <Button asChild variant="solid" size="wide">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
              <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
