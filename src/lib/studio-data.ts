import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import hero4 from "@/assets/hero4.png";
import hero5 from "@/assets/hero5.png";

export const projects = [
  {
    name: "Egyptian-Inspired Room",
    category: "Residential · Bardhaman, West Bengal",
    image: hero3,
    shape: "wide",
    story:
      "A bold feature wall inspired by ancient Egypt, filled with hieroglyphs, pyramids and traditional artwork in warm sandy tones. Open wooden shelves display books while small wall lights add a playful touch — a space made to feel different, colourful and full of character.",
  },
  {
    name: "Warm Media Wall",
    category: "Residential · Bardhaman",
    image: hero1,
    shape: "tall",
    story:
      "A clean TV unit combining light wood, marble-finish panels and warm lighting. Open shelves add a simple display area, while the wooden slats and soft LED lights give the wall a warm and comfortable feel.",
  },
  {
    name: "Framed Art Wall",
    category: "Residential · Katwa, West Bengal",
    image: hero4,
    shape: "tall",
    story:
      "A clean and elegant wall designed around a collection of framed artwork. Soft artwork, gold frames and a white wall create a calm and bright look, while warm ceiling lighting highlights each piece. Light marble flooring keeps the focus on the art — a simple but eye-catching feature.",
  },
  {
    name: "Golden Frame",
    category: "Residential · Bardhaman, West Bengal",
    image: hero5,
    shape: "square",
    story:
      "A simple feature wall built around one central artwork. The textured wall and layered golden borders give the space a rich look while keeping the design clean, and warm lighting from above highlights the texture and golden details.",
  },
  {
    name: "Decorative Living Space",
    category: "Residential · Bardhaman",
    image: hero2,
    shape: "square",
    story:
      "A bright living space with golden wall details, display shelves and traditional décor. Wooden ceiling strips and soft LED lighting add warmth, while the patterned walls and curved panels give the room a rich and personal look.",
  },
] as const;
