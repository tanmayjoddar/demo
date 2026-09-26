import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { ReviewCard, ReviewsMarquee } from "@/components/reviews-carousel";
import { reviews } from "@/lib/reviews-data";
import { Button } from "@/components/ui/button";

const REVIEW_LINK = `https://www.google.com/maps/search/${encodeURIComponent("Inch by Inch to fulfil your dream")}`;

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — InchByInch" },
      {
        name: "description",
        content:
          "Real Google reviews for InchByInch interiors — storage-smart flats, artistic walls and professional finishing.",
      },
      { property: "og:title", content: "Reviews — InchByInch" },
      { property: "og:description", content: "What clients say about working with InchByInch." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Reviews · Google"
        title={
          <>
            Loved
            <br />
            <span className="italic text-primary">by clients.</span>
          </>
        }
      >
        Real reviews from real homes. Storage-smart flats, artistic feature walls and finishing
        clients recommend to neighbours.
      </PageIntro>
      <section className="px-5 py-10 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <p className="text-label text-primary">Continuous loop · hover to pause</p>
            <Button asChild variant="outline" size="wide">
              <a href={REVIEW_LINK} target="_blank" rel="noreferrer">
                Review us on Google
                <ExternalLink aria-hidden="true" className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
          <ReviewsMarquee />
        </div>
      </section>
      <section className="px-5 py-16 sm:px-10 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 border-t border-border pt-8">
            <h2 className="font-display text-4xl font-light sm:text-5xl">
              All <span className="italic text-primary">reviews.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="solid" size="wide">
              <Link to="/contact">Start your project</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
