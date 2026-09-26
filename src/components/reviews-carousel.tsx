import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { reviews } from "@/lib/reviews-data";
import { cn } from "@/lib/utils";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn("h-3.5 w-3.5", i < value ? "fill-primary text-primary" : "text-border")}
        />
      ))}
    </div>
  );
}

export function ReviewCard({
  name,
  meta,
  time,
  rating,
  text,
}: {
  name: string;
  meta: string;
  time: string;
  rating: number;
  text: string;
}) {
  return (
    <figure className="glass-panel flex h-full flex-col justify-between gap-8 p-7 sm:p-8">
      <div>
        <Stars value={rating} />
        <blockquote className="mt-5 font-display text-xl font-light leading-snug sm:text-2xl">
          “{text}”
        </blockquote>
      </div>
      <figcaption className="border-t border-border pt-5">
        <p className="text-sm font-semibold break-words">{name}</p>
        <p className="mt-2 text-[11px] font-bold uppercase leading-[1.9] tracking-[0.18em] text-muted-foreground break-words">
          {meta} · {time} · Google
        </p>
      </figcaption>
    </figure>
  );
}

export function ReviewsMarquee({ durationMs = 55000 }: { durationMs?: number }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="group relative overflow-hidden" aria-label="Client reviews scrolling">
      <div
        className="animate-marquee flex w-max items-stretch gap-5 pr-5 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${durationMs}ms` }}
      >
        {doubled.map((r, i) => (
          <div
            key={`${r.name}-${i}`}
            aria-hidden={i >= reviews.length}
            className="w-[82vw] max-w-[320px] shrink-0 self-stretch sm:w-[380px] sm:max-w-none"
          >
            <ReviewCard {...r} />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

export function ReviewsCarousel({ autoplayMs = 4500 }: { autoplayMs?: number }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || paused) return;
    const id = window.setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [api, paused, autoplayMs]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start", skipSnaps: false }}
        className="w-full"
      >
        <CarouselContent className="-ml-5">
          {reviews.map((r) => (
            <CarouselItem key={r.name} className="pl-5 sm:basis-1/2 lg:basis-1/3">
              <ReviewCard {...r} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2" aria-hidden="true">
          {reviews.map((r, i) => (
            <span
              key={r.name}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                i === selected ? "w-8 bg-primary" : "w-3 bg-border",
              )}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous reviews"
            onClick={() => api?.scrollPrev()}
            className="rounded-full"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next reviews"
            onClick={() => api?.scrollNext()}
            className="rounded-full"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
