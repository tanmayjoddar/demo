export type Review = {
  name: string;
  meta: string;
  time: string;
  rating: number;
  text: string;
};

// Manually curated from Google reviews.
// To go automatic later: Google Places API (New) Place Details,
// cached server-side + refreshed weekly via cron. See note at bottom.
export const reviews = [
  {
    name: "Antara Gupta",
    meta: "2 reviews",
    time: "4 months ago",
    rating: 5,
    text: "They maximized every square foot of our flat, providing clever built-in storage while keeping the layout open and vibrant. Thanks very much.",
  },
  {
    name: "Soma Ganguli",
    meta: "1 review",
    time: "4 months ago",
    rating: 5,
    text: "Innovative art work… if you want to do an artistic makeover of your walls, choose it right now.",
  },
  {
    name: "Mintu Karmakar",
    meta: "1 review",
    time: "4 months ago",
    rating: 5,
    text: "Very professional work and fully satisfied.",
  },
  {
    name: "Suman Saha",
    meta: "1 review",
    time: "4 months ago",
    rating: 5,
    text: "Highly recommend, excellent work.",
  },
  {
    name: "Kalpesh Patel",
    meta: "Local Guide · 223 photos",
    time: "4 months ago",
    rating: 5,
    text: "Good work and best quality plywood material provided for work.",
  },
  {
    name: "Rahul Dev Bagdi",
    meta: "1 review",
    time: "4 months ago",
    rating: 5,
    text: "Highly recommended.",
  },
  {
    name: "Mosammat Nourin Sultana",
    meta: "5 reviews",
    time: "4 months ago",
    rating: 5,
    text: "Wow experience.",
  },
  {
    name: "Priyanka Education",
    meta: "1 review",
    time: "4 months ago",
    rating: 5,
    text: "Highly recommended.",
  },
  {
    name: "Radhashyam Maji",
    meta: "1 review",
    time: "4 months ago",
    rating: 5,
    text: "Very good.",
  },
  {
    name: "Attri Sahana",
    meta: "3 reviews",
    time: "4 months ago",
    rating: 5,
    text: "Love you.",
  },
] as const satisfies readonly Review[];

/*
AUTOMATIC GOOGLE FETCH (weekly, rate-limit safe) — when ready:

1. Get Place ID for "Inch by Inch to fulfil your dream" from Google Maps.
2. Store GOOGLE_PLACES_API_KEY as server env (never expose to client).
3. Add server route GET /api/reviews:
   - fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount`,
     { headers: { "X-Goog-Api-Key": env.GOOGLE_PLACES_API_KEY } })
   - cache result in memory / KV with 7-day TTL
   - return cached JSON (1 Google call per week max)
4. Client fetches /api/reviews with stale-while-revalidate, falls back to this
   manual list on error.

Rate limits: Places API allows 100+ QPS. 1 call/week = ~4 calls/month,
cost ~$0.02/month, well inside the $200 free tier. No quota risk.
*/
