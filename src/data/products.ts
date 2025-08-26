// src/data/products.ts

export type ProductCategory =
  | "sofa_sets"
  | "dining_sets"
  | "bar_sets"
  | "loungers"
  | "swings";

export interface Product {
  id: string;
  name: string;
  image: string;
  subImages: string[];
  description: string;
  price: number;
  category: ProductCategory;
}

export type ProductMap = {
  [K in ProductCategory]: Product[];
};

export const productsByCategory: ProductMap = {
  sofa_sets: [
    {
      id: "sofa1",
      name: "Marcela Luxe Garden Sofa Ensemble",
      image: "/images/sofa_sets/sofa1/main.webp",
      subImages: [
        "/images/sofa_sets/sofa1/sub1.webp",
        "/images/sofa_sets/sofa1/sub2.webp",
      ],
      description:
        "Elevate your patio with this sophisticated grey outdoor set, including a spacious triple-seater, two plush armchairs, and a chic centerpiece table. Its braided rope accents infuse contemporary flair and weather-ready comfort, making it a remarkable retreat for family gatherings or quiet reflection.",
      price: 1200,
      category: "sofa_sets",
    },
    {
      id: "sofa2",
      name: "Fonsie Cappuccino Patio Retreat Set",
      image: "/images/sofa_sets/sofa2/main.webp",
      subImages: [
        "/images/sofa_sets/sofa2/sub1.webp",
        "/images/sofa_sets/sofa2/sub2.webp",
      ],
      description:
        "Sink into relaxation with this inviting duo-seater, pair of single chairs, and a modern center table. Finished in a warm cappuccino shade, this outdoor collection blends inviting style with weather-resistant materials for effortless outdoor leisure.",
      price: 1500,
      category: "sofa_sets",
    },
    {
      id: "sofa3",
      name: "Arthur Grand Outdoor Lounge Suite",
      image: "/images/sofa_sets/sofa3/main.webp",
      subImages: [
        "/images/sofa_sets/sofa3/sub1.webp",
        "/images/sofa_sets/sofa3/sub2.webp",
        "/images/sofa_sets/sofa3/sub3.webp",
        "/images/sofa_sets/sofa3/sub4.webp",
        "/images/sofa_sets/sofa3/sub5.webp",
        "/images/sofa_sets/sofa3/sub6.webp",
      ],
      description:
        "Transform your terrace with this all-in-one garden suite. It offers dual three-seater sofas, two cozy single lounge chairs, both a compact and a main table, plus a handy side table—perfectly balancing hospitality, convenience, and contemporary design.",
      price: 1600,
      category: "sofa_sets",
    },
    {
      id: "sofa4",
      name: "Hancy Six-Seater Terrace Living Set",
      image: "/images/sofa_sets/sofa4/main.webp",
      subImages: [
        "/images/sofa_sets/sofa4/sub1.webp",
        "/images/sofa_sets/sofa4/sub2.webp",
        "/images/sofa_sets/sofa4/sub3.webp",
        "/images/sofa_sets/sofa4/sub4.webp",
        "/images/sofa_sets/sofa4/sub5.webp",
      ],
      description:
        "Experience outdoor luxury with a six-seater sofa, dual ottomans, and both center and side tables. Rich tan and beige hues partner with braided rope detailing, crafting a stylish yet durable haven for gatherings under the sky.",
      price: 1600,
      category: "sofa_sets",
    },
    {
      id: "sofa5",
      name: "Ollie Modern Patio Sofa & Ottoman Set",
      image: "/images/sofa_sets/sofa5/main.webp",
      subImages: [
        "/images/sofa_sets/sofa5/sub1.webp",
        "/images/sofa_sets/sofa5/sub2.webp",
        "/images/sofa_sets/sofa5/sub3.jpg",
        "/images/sofa_sets/sofa5/sub4.webp",
        "/images/sofa_sets/sofa5/sub5.webp",
        "/images/sofa_sets/sofa5/sub6.webp",
      ],
      description:
        "A sleek, four-seater outdoor sofa accompanied by a matching table and versatile ottoman, this set pairs striking black with soft cream for an ultra-modern look—ideal for evenings of comfort and conversation on balconies or patios.",
      price: 2100,
      category: "sofa_sets",
    },
    {
      id: "sofa6",
      name: "Hamper Urban Black Sofa Lounging Set",
      image: "/images/sofa_sets/sofa6/main.jpg",
      subImages: [
        "/images/sofa_sets/sofa6/sub1.jpg",
        "/images/sofa_sets/sofa6/sub2.jpg",
        "/images/sofa_sets/sofa6/sub3.jpg",
        "/images/sofa_sets/sofa6/sub4.jpg",
        "/images/sofa_sets/sofa6/sub5.jpg",
        "/images/sofa_sets/sofa6/sub6.jpg",
        "/images/sofa_sets/sofa6/sub7.jpg",
      ],
      description:
        "Unwind outdoors with this contemporary set, featuring a two-seater, two single armchairs, and a sturdy center table. The bold black finish and minimalist lines offer timeless elegance for any exterior space.",
      price: 1300,
      category: "sofa_sets",
    },
    {
      id: "sofa7",
      name: "Blog Dual-Tone Social Sofa Collection",
      image: "/images/sofa_sets/sofa7/main.webp",
      subImages: [
        "/images/sofa_sets/sofa7/sub1.webp",
        "/images/sofa_sets/sofa7/sub2.webp",
        "/images/sofa_sets/sofa7/sub3.webp",
      ],
      description:
        "Enjoy blissful seating with a chic two-seater, matching singles, and a centerpiece table. Styled in crisp black and beige, this collection’s relaxed silhouettes and weatherproof build promise enduring beauty and comfort for outdoor living.",
      price: 1800,
      category: "sofa_sets",
    },
    {
      id: "sofa8",
      name: "Crocetta Off-White Balcony Sofa Ensemble",
      image: "/images/sofa_sets/sofa8/main.webp",
      subImages: [
        "/images/sofa_sets/sofa8/sub1.webp",
        "/images/sofa_sets/sofa8/sub2.webp",
        "/images/sofa_sets/sofa8/sub3.webp",
        "/images/sofa_sets/sofa8/sub4.webp",
        "/images/sofa_sets/sofa8/sub5.webp",
        "/images/sofa_sets/sofa8/sub6.webp",
        "/images/sofa_sets/sofa8/sub7.webp",
        "/images/sofa_sets/sofa8/sub8.webp",
        "/images/sofa_sets/sofa8/sub9.webp",
        "/images/sofa_sets/sofa8/sub10.webp",
      ],
      description:
        "Create a light, inviting nook with this three-seater, two single chairs, and a spacious center table. Its off-white finish and graceful curves provide an airy, elegant focal point for any courtyard or veranda.",
      price: 1450,
      category: "sofa_sets",
    },
    {
      id: "sofa9",
      name: "Frias Ropeweave Outdoor Sofa Set",
      image: "/images/sofa_sets/sofa9/main.webp",
      subImages: [
        "/images/sofa_sets/sofa9/sub1.webp",
        "/images/sofa_sets/sofa9/sub2.webp",
        "/images/sofa_sets/sofa9/sub3.webp",
      ],
      description:
        "This set pairs a roomy two-seater with two plush singles and a low-profile center table. Braided rope design and durable materials make it a standout choice for relaxed, contemporary garden lounging.",
      price: 1100,
      category: "sofa_sets",
    },
    {
      id: "sofa10",
      name: "Adara Green & White Patio Lounge",
      image: "/images/sofa_sets/sofa10/main.webp",
      subImages: [
        "/images/sofa_sets/sofa10/sub1.webp",
        "/images/sofa_sets/sofa10/sub2.webp",
        "/images/sofa_sets/sofa10/sub3.webp",
        "/images/sofa_sets/sofa10/sub4.webp",
        "/images/sofa_sets/sofa10/sub5.webp",
      ],
      description:
        "Showcasing a fresh palette of green and white, this set includes a comfortable duo-seater, twin singles, and a centerpiece table. Its sturdy frame and weather-friendly finish bring cheerful style and flexible seating to your outdoor oasis.",
      price: 1400,
      category: "sofa_sets",
    },
  ],
  dining_sets: [
    {
      id: "dining1",
      name: "Hernando Braided Blue & Black Dining Ensemble",
      image: "/images/dining_sets/dining1/main.jpg",
      subImages: [
        "/images/dining_sets/dining1/sub1.jpg",
        "/images/dining_sets/dining1/sub2.jpg",
        "/images/dining_sets/dining1/sub3.jpg",
        "/images/dining_sets/dining1/sub4.jpg",
        "/images/dining_sets/dining1/sub5.jpg",
        "/images/dining_sets/dining1/sub6.jpg",
        "/images/dining_sets/dining1/sub7.jpg",
        "/images/dining_sets/dining1/sub8.jpg",
        "/images/dining_sets/dining1/sub9.jpg",
        "/images/dining_sets/dining1/sub10.jpg",
      ],
      description:
        "Elevate your outdoor gatherings with this stylish dining set featuring four ergonomically-crafted chairs and a sleek table. The distinctive blue and black color scheme paired with braided rope detailing offers both visual appeal and outstanding durability, perfect for vibrant garden lunches or relaxed patio dinners.",
      price: 1400,
      category: "dining_sets",
    },
    {
      id: "dining2",
      name: "Modero Six-Chair Patio Conversation Set",
      image: "/images/dining_sets/dining2/main.webp",
      subImages: [
        "/images/dining_sets/dining2/sub1.webp",
        "/images/dining_sets/dining2/sub2.webp",
        "/images/dining_sets/dining2/sub3.webp",
        "/images/dining_sets/dining2/sub4.webp",
        "/images/dining_sets/dining2/sub5.webp",
      ],
      description:
        "Host effortlessly with this inviting tan and white outdoor set, presenting six comfortable chairs and a contemporary table. Designed for spacious patios, the Modero set brings bright, welcoming style and resilient construction for daily alfresco entertainment.",
      price: 1300,
      category: "dining_sets",
    },
    {
      id: "dining3",
      name: "Alux Urban Tan & Black Patio Set",
      image: "/images/dining_sets/dining3/main.webp",
      subImages: [
        "/images/dining_sets/dining3/sub1.webp",
        "/images/dining_sets/dining3/sub2.webp",
      ],
      description:
        "Bring harmony to your outdoors with four stylish chairs and a matching table in a chic tan and black palette. Crafted for metropolitan flair and robust weather resistance, this set is ideal for trendy balconies, rooftop gardens, or sunny patios.",
      price: 1600,
      category: "dining_sets",
    },
    {
      id: "dining4",
      name: "Swoosh Scarlet Patio Dining Set",
      image: "/images/dining_sets/dining4/main.jpg",
      subImages: [
        "/images/dining_sets/dining4/sub1.jpg",
        "/images/dining_sets/dining4/sub2.jpg",
        "/images/dining_sets/dining4/sub3.jpg",
      ],
      description:
        "Add a splash of color to your gathering space with this light red patio set, featuring four modern chairs and a bold centerpiece table. The Swoosh collection radiates cheerful energy and comfort—perfect for casual brunches and sunset meals.",
      price: 1150,
      category: "dining_sets",
    },
    {
      id: "dining5",
      name: "Solve Espresso Rope Bistro Ensemble",
      image: "/images/dining_sets/dining5/main.webp",
      subImages: [
        "/images/dining_sets/dining5/sub1.webp",
        "/images/dining_sets/dining5/sub2.webp",
        "/images/dining_sets/dining5/sub3.webp",
        "/images/dining_sets/dining5/sub4.webp",
        "/images/dining_sets/dining5/sub5.webp",
        "/images/dining_sets/dining5/sub6.webp",
        "/images/dining_sets/dining5/sub7.webp",
      ],
      description:
        "Enjoy relaxed evenings with four plush chairs and a sturdy table accented in deep brown. The braided rope design delivers a cozy, tactile feel while ensuring long-term resilience for indoor-outdoor versatility.",
      price: 1700,
      category: "dining_sets",
    },
    {
      id: "dining6",
      name: "Germano Crisp White Outdoor Dining Suite",
      image: "/images/dining_sets/dining6/main.webp",
      subImages: [
        "/images/dining_sets/dining6/sub1.webp",
        "/images/dining_sets/dining6/sub2.webp",
        "/images/dining_sets/dining6/sub3.webp",
        "/images/dining_sets/dining6/sub4.webp",
      ],
      description:
        "Refined dining meets the fresh outdoors with this six-chair white set built for celebratory feasts and lively gatherings. Its minimalist lines and spacious tabletop blend function and understated style for a welcoming, timeless retreat.",
      price: 1500,
      category: "dining_sets",
    },
    {
      id: "dining7",
      name: "Ferdinando Walnut Patio Gathering Set",
      image: "/images/dining_sets/dining7/main.webp",
      subImages: [
        "/images/dining_sets/dining7/sub1.webp",
        "/images/dining_sets/dining7/sub2.webp",
      ],
      description:
        "Warm brown tones and ergonomic comfort come together in this classic ensemble featuring four cushioned chairs and a versatile dining table. Perfect for morning coffees or festive dinners, the Ferdinando set infuses nature-inspired elegance into any outdoor space.",
      price: 1350,
      category: "dining_sets",
    },
    {
      id: "dining8",
      name: "Marotta Silver Eight-Seater Patio Set",
      image: "/images/dining_sets/dining8/main.webp",
      subImages: [
        "/images/dining_sets/dining8/sub1.webp",
        "/images/dining_sets/dining8/sub2.webp",
      ],
      description:
        "Designed for entertaining on a grand scale, this spacious silver-toned patio set includes eight sleek chairs and a large dining table. Its modern metallic finish and generous seating make it a focal point for parties and family weekends outdoors.",
      price: 1800,
      category: "dining_sets",
    },
    {
      id: "dining9",
      name: "Luktro Braided Rope Garden Bistro Set",
      image: "/images/dining_sets/dining9/main.jpg",
      subImages: [
        "/images/dining_sets/dining9/sub1.jpg",
        "/images/dining_sets/dining9/sub2.jpg",
        "/images/dining_sets/dining9/sub3.jpg",
      ],
      description:
        "Unwind in style with this contemporary garden dining set comprised of four woven rope chairs and a practical table. Engineered for comfort and crafted for durability, the Luktro set invites cozy meals and casual chats amidst greenery.",
      price: 1450,
      category: "dining_sets",
    },
    {
      id: "dining10",
      name: "Moze Alfresco Eight-Seat Dining Suite",
      image: "/images/dining_sets/dining10/main.webp",
      subImages: [
        "/images/dining_sets/dining10/sub1.webp",
        "/images/dining_sets/dining10/sub2.webp",
        "/images/dining_sets/dining10/sub3.webp",
      ],
      description:
        "Transform open-air gatherings with this elegant beige dining suite featuring eight generously-sized chairs and a robust table. Designed for outdoor versatility and lasting sophistication, the Moze set ensures every celebration is memorable and effortless.",
      price: 950,
      category: "dining_sets",
    },
  ],
  bar_sets: [
    {
      id: "bar1",
      name: "Beatriz Ropeweave Balcony Bar Duo",
      image: "/images/bar_sets/bar1/main.jpg",
      subImages: [
        "/images/bar_sets/bar1/sub1.jpg",
        "/images/bar_sets/bar1/sub2.jpg",
        "/images/bar_sets/bar1/sub3.jpg",
      ],
      description:
        "Add a touch of contemporary charm to your outdoor nook with this braided rope bar set, featuring two high-comfort seats and a compact bar table. Perfect for sharing morning coffee or sunset cocktails in cozy garden corners.",
      price: 800,
      category: "bar_sets",
    },
    {
      id: "bar2",
      name: "Forst Four-Seat Patio Bar Set (White)",
      image: "/images/bar_sets/bar2/main.webp",
      subImages: [
        "/images/bar_sets/bar2/sub1.webp",
        "/images/bar_sets/bar2/sub2.webp",
        "/images/bar_sets/bar2/sub3.webp",
      ],
      description:
        "Brighten up your terrace with this crisp white bar table and quartet of stools. Its fresh color, generous seating, and elevated design create the ideal spot for lively outdoor gatherings or serene solo moments.",
      price: 1100,
      category: "bar_sets",
    },
    {
      id: "bar3",
      name: "Lomeo Espresso Terrace Bar Ensemble",
      image: "/images/bar_sets/bar3/main.webp",
      subImages: [
        "/images/bar_sets/bar3/sub1.webp",
        "/images/bar_sets/bar3/sub2.webp",
      ],
      description:
        "Embrace rich sophistication outdoors with this dark brown set—four distinctive chairs and a matching bar-height table. Designed for durability and comfort, it’s perfect for evening entertainment or relaxed brunches al fresco.",
      price: 900,
      category: "bar_sets",
    },
    {
      id: "bar4",
      name: "Erminio Slate Urban Bar Set",
      image: "/images/bar_sets/bar4/main.jpg",
      subImages: [
        "/images/bar_sets/bar4/sub1.jpg",
        "/images/bar_sets/bar4/sub2.jpg",
      ],
      description:
        "Strike a cool modern note on your patio with sleek grey tones. This set brings together a sturdy bar table and four stylish stools, offering a contemporary retreat for drinks and conversation under open skies.",
      price: 450,
      category: "bar_sets",
    },
    {
      id: "bar5",
      name: "Chino Silver Skyline Bar Collection",
      image: "/images/bar_sets/bar5/main.jpg",
      subImages: [
        "/images/bar_sets/bar5/sub1.webp",
        "/images/bar_sets/bar5/sub2.webp",
      ],
      description:
        "Refresh your outdoor experience with this gleaming silver bar set, presenting four seats and a minimalist table. Ideal for rooftop decks or airy garden spaces, it elevates every happy hour to a new level.",
      price: 700,
      category: "bar_sets",
    },
    {
      id: "bar6",
      name: "Chairio Patio Compact Bar Duo",
      image: "/images/bar_sets/bar6/main.webp",
      subImages: [
        "/images/bar_sets/bar6/sub1.webp",
        "/images/bar_sets/bar6/sub2.webp",
        "/images/bar_sets/bar6/sub3.webp",
      ],
      description:
        "Savor intimate outdoor moments with this petite patio bar set—two ergonomic chairs and a smart, space-saving tabletop. Designed for small balconies and sun-drenched corners, it’s your go-to for casual drinks.",
      price: 1200,
      category: "bar_sets",
    },
    {
      id: "bar7",
      name: "Ercole Classic Brown Bistro Set",
      image: "/images/bar_sets/bar7/main.webp",
      subImages: ["/images/bar_sets/bar7/sub1.webp"],
      description:
        "Add classic charm to your garden or porch with this compact bar set in rich brown. Featuring two comfortable seats and a sturdy table, it’s tailored for morning chats or sunset gatherings with a friend.",
      price: 850,
      category: "bar_sets",
    },
    {
      id: "bar8",
      name: "Massimo Urban Bar Stool Set (Dark Brown)",
      image: "/images/bar_sets/bar8/main.webp",
      subImages: ["/images/bar_sets/bar8/sub1.webp"],
      description:
        "Transform tight spaces with this sleek dark brown bar set, including two modern stools and a matching table. Minimalist lines and plush seating make it perfect for stylish cocktails in any setting.",
      price: 1400,
      category: "bar_sets",
    },
    {
      id: "bar9",
      name: "Roque Braided Midnight Patio Bar",
      image: "/images/bar_sets/bar9/main.jpg",
      subImages: [
        "/images/bar_sets/bar9/sub1.jpg",
        "/images/bar_sets/bar9/sub1.jpg",
      ],
      description:
        "Bold and inviting, this black rope-woven bar set offers four seats and a sturdy table—ideal for lively outdoor entertainment. The braided texture and deep color create a dramatic yet welcoming garden focal point.",
      price: 1250,
      category: "bar_sets",
    },
    {
      id: "bar10",
      name: "Elsie Modern Black Patio Bar Set",
      image: "/images/bar_sets/bar10/main.webp",
      subImages: ["/images/bar_sets/bar10/sub1.webp"],
      description:
        "Elevate your balcony with the sophistication of this modern black duo: two supportive chairs and a sleek, durable bar table, perfect for unwinding outdoors whatever the hour.",
      price: 900,
      category: "bar_sets",
    },
  ],
  loungers: [
    {
      id: "lounger1",
      name: "Drift Duo Poolside Lounger Set",
      image: "/images/loungers/lounger1/main.webp",
      subImages: [
        "/images/loungers/lounger1/sub1.webp",
        "/images/loungers/lounger1/sub2.webp",
        "/images/loungers/lounger1/sub3.webp",
        "/images/loungers/lounger1/sub4.webp",
      ],
      description:
        "Soak up the sun with this elegant pair of brown loungers, designed for lasting comfort and style beside your pool. Their contemporary silhouette and plush surfaces make them ideal for relaxation, whether you're reading, napping, or socializing outdoors.",
      price: 900,
      category: "loungers",
    },
    {
      id: "lounger2",
      name: "Justy Solo Classic Pool Lounger",
      image: "/images/loungers/lounger2/main.webp",
      subImages: [
        "/images/loungers/lounger2/sub1.webp",
        "/images/loungers/lounger2/sub2.webp",
        "/images/loungers/lounger2/sub3.webp",
      ],
      description:
        "Enjoy solo retreat with this dark brown, ergonomically contoured lounger, crafted for optimum comfort and durability. Its weather-resistant build and deep finish add a touch of sophistication to any pool deck or garden space.",
      price: 1100,
      category: "loungers",
    },
    {
      id: "lounger3",
      name: "Syon Sleek Black Sun Lounger",
      image: "/images/loungers/lounger3/main.webp",
      subImages: [
        "/images/loungers/lounger3/sub1.webp",
        "/images/loungers/lounger3/sub2.webp",
        "/images/loungers/lounger3/sub3.webp",
        "/images/loungers/lounger3/sub4.webp",
        "/images/loungers/lounger3/sub5.webp",
      ],
      description:
        "Effortlessly stylish, the Syon black pool lounger offers modern comfort and minimalist elegance. Its sturdy frame and subtle lines create a luxurious relaxation spot for sunbathing or unwinding by the water.",
      price: 1100,
      category: "loungers",
    },
    {
      id: "lounger4",
      name: "Popkin Silver Recline & Table Set",
      image: "/images/loungers/lounger4/main.webp",
      subImages: [
        "/images/loungers/lounger4/sub1.webp",
        "/images/loungers/lounger4/sub2.webp",
      ],
      description:
        "This silver lounger and coordinating side table deliver a polished look and convenient poolside functionality. Adjustable settings and a contemporary finish ensure relaxation is never out of reach, with essentials nearby for hours of comfortable lounging.",
      price: 1300,
      category: "loungers",
    },
    {
      id: "lounger5",
      name: "Adnet Ropeweave Grey Lounger Set",
      image: "/images/loungers/lounger5/main.jpg",
      subImages: [
        "/images/loungers/lounger5/sub1.jpg",
        "/images/loungers/lounger5/sub2.jpg",
      ],
      description:
        "Dressed in sophisticated grey with braided rope accents, this set of two loungers combines high style with all-weather resilience. Experience cozy, supportive seating and remarkable durability for poolside leisure season after season.",
      price: 1400,
      category: "loungers",
    },
    {
      id: "lounger6",
      name: "Hattie Two-Tone Sun Lounger Pair",
      image: "/images/loungers/lounger6/main.webp",
      subImages: [
        "/images/loungers/lounger6/sub1.webp",
        "/images/loungers/lounger6/sub2.webp",
      ],
      description:
        "Refresh your poolside with this pair of white and grey loungers, boasting a breezy color palette and ergonomic contours. Their modern design ensures comfort and visual appeal for sunny afternoons and social gatherings.",
      price: 1100,
      category: "loungers",
    },
    {
      id: "lounger7",
      name: "Evana Braided Grey Lounger & Table Set",
      image: "/images/loungers/lounger7/main.jpg",
      subImages: [
        "/images/loungers/lounger7/sub1.webp",
        "/images/loungers/lounger7/sub2.webp",
        "/images/loungers/lounger7/sub3.jpg",
        "/images/loungers/lounger7/sub4.jpg",
        "/images/loungers/lounger7/sub5.jpg",
      ],
      description:
        "Adorned with braided rope detailing and soft grey hue, this smart lounger features a versatile side table. Enjoy durable, premium seating that keeps sun protection and refreshments conveniently at hand.",
      price: 1400,
      category: "loungers",
    },
    {
      id: "lounger8",
      name: "Aver Poolside Duo Loungers (Brown)",
      image: "/images/loungers/lounger8/main.webp",
      subImages: [
        "/images/loungers/lounger8/sub1.webp",
        "/images/loungers/lounger8/sub2.webp",
        "/images/loungers/lounger8/sub3.webp",
        "/images/loungers/lounger8/sub4.webp",
        "/images/loungers/lounger8/sub5.webp",
      ],
      description:
        "Invite comfort and lasting style to the pool with this matching pair of brown loungers. Their robust structure and gentle contours provide all-day support for sunbathing or relaxing with friends and family.",
      price: 900,
      category: "loungers",
    },
    {
      id: "lounger9",
      name: "Beast Sturdy Pool Lounger (Brown)",
      image: "/images/loungers/lounger9/main.webp",
      subImages: [
        "/images/loungers/lounger9/sub1.webp",
        "/images/loungers/lounger9/sub2.webp",
        "/images/loungers/lounger9/sub3.webp",
      ],
      description:
        "Built for those who love a bold aesthetic and lasting comfort, the Beast lounger features a rugged brown finish and resilient frame. Ideal for poolside relaxation, it blends strength with a plush reclining experience.",
      price: 1350,
      category: "loungers",
    },
    {
      id: "lounger10",
      name: "Venus Elegant Dark Brown Lounger",
      image: "/images/loungers/lounger10/main.webp",
      subImages: [
        "/images/loungers/lounger10/sub1.webp",
        "/images/loungers/lounger10/sub2.webp",
        "/images/loungers/lounger10/sub3.webp",
        "/images/loungers/lounger10/sub4.webp",
        "/images/loungers/lounger10/sub5.webp",
      ],
      description:
        "Grace your outdoor haven with the Venus lounger, featuring deep brown upholstery and a refined silhouette. Crafted for both style and durability, it's a luxurious choice for hours spent soaking in the sun.",
      price: 1200,
      category: "loungers",
    },
  ],
  swings: [
  {
    id: "swing1",
    name: "Naaru Braided Dark Grey Hanging Swing",
    image: "/images/swings/swing1/main.webp",
    subImages: [
      "/images/swings/swing1/sub1.webp",
      "/images/swings/swing1/sub2.webp",
      "/images/swings/swing1/sub3.webp",
      "/images/swings/swing1/sub4.webp",
    ],
    description:
      "Relax in style with the Naaru single hanging swing, featuring a sturdy stand and woven braided rope in sleek dark grey. Perfect for balconies or garden corners, it offers a cozy retreat to sway gently while enjoying fresh air.",
    price: 450,
    category: "swings",
  },
  {
    id: "swing2",
    name: "Eurig Classic Grey Braided Swing Chair",
    image: "/images/swings/swing2/main.webp",
    subImages: [
      "/images/swings/swing2/sub1.webp",
      "/images/swings/swing2/sub2.webp",
      "/images/swings/swing2/sub3.webp",
      "/images/swings/swing2/sub4.webp",
    ],
    description:
      "Bring comfort and elegance to your outdoor nook with this single-seater hanging swing. The braided rope and powder-coated stand combine durability and charm, making it a perfect spot to unwind on your balcony or porch.",
    price: 420,
    category: "swings",
  },
  {
    id: "swing3",
    name: "Teirtu Spacious Triple Hanging Swing",
    image: "/images/swings/swing3/main.webp",
    subImages: [
      "/images/swings/swing3/sub1.webp",
      "/images/swings/swing3/sub2.webp",
    ],
    description:
      "This triple-seater hanging swing offers ample room for family or friends to relax together. Its sleek design fits perfectly into balconies or gardens, creating a serene and inviting space to enjoy outdoor moments.",
    price: 780,
    category: "swings",
  },
  {
    id: "swing4",
    name: "Ezio Cream Two-Seater Swing Set",
    image: "/images/swings/swing4/main.webp",
    subImages: [
      "/images/swings/swing4/sub1.webp",
      "/images/swings/swing4/sub2.webp",
    ],
    description:
      "Discover comfort and style with the Ezio double hanging swing in soft cream. Paired with a robust stand, it brings a warm and peaceful atmosphere to any outdoor area, ideal for shared leisure time.",
    price: 650,
    category: "swings",
  },
  {
    id: "swing5",
    name: "Lleu Braided Rope Grey Triple Swing",
    image: "/images/swings/swing5/main.jpg",
    subImages: [
      "/images/swings/swing5/sub1.jpg",
      "/images/swings/swing5/sub2.jpg",
    ],
    description:
      "Experience the outdoors with the Lleu three-seater swing wrapped in durable braided rope. Its elegant grey finish and sturdy stand provide the perfect blend of relaxation and sophistication for patios or gardens.",
    price: 730,
    category: "swings",
  },
  {
    id: "swing6",
    name: "Scutari Honey-Hued Two-Person Swing",
    image: "/images/swings/swing6/main.webp",
    subImages: [
      "/images/swings/swing6/sub1.webp",
    ],
    description:
      "Brighten your outdoor space with the honey-toned Scutari swing, featuring plush seating for two and a dependable stand. Its stylish finish and gentle sway make it a favorite for peaceful afternoons.",
    price: 670,
    category: "swings",
  },
  {
    id: "swing7",
    name: "Leone Sleek Black Hanging Chair",
    image: "/images/swings/swing7/main.webp",
    subImages: [
      "/images/swings/swing7/sub1.webp",
      "/images/swings/swing7/sub2.webp",
      "/images/swings/swing7/sub3.webp",
      "/images/swings/swing7/sub4.webp",
    ],
    description:
      "Add a modern touch with the Leone single hanging swing, designed without a stand for compact spaces. Its matte black finish and ergonomic design make it both a statement piece and a cozy solo retreat.",
    price: 480,
    category: "swings",
  },
  {
    id: "swing8",
    name: "Saga Cream Braided Rope Swing Chair",
    image: "/images/swings/swing8/main.webp",
    subImages: [
      "/images/swings/swing8/sub1.webp",
      "/images/swings/swing8/sub2.webp",
      "/images/swings/swing8/sub3.webp",
    ],
    description:
      "Enjoy leisurely moments in the Saga hanging chair with its braided rope weave and cream-colored frame. Supported by a sturdy stand, it invites tranquility in your balcony or garden nook.",
    price: 600,
    category: "swings",
  },
  {
    id: "swing9",
    name: "Vibe Dark Grey Spacious Swing Seat",
    image: "/images/swings/swing9/main.webp",
    subImages: [
      "/images/swings/swing9/sub1.webp",
    ],
    description:
      "The Vibe triple hanging swing boasts a sleek dark grey finish and a strong, minimalist frame. Flexible and stylish, it's perfect for gardens or patios where space and serenity are valued.",
    price: 720,
    category: "swings",
  },
  {
    id: "swing10",
    name: "Noxe Elegant Cream Rope Hanging Chair",
    image: "/images/swings/swing10/main.webp",
    subImages: [
      "/images/swings/swing10/sub1.webp",
      "/images/swings/swing10/sub2.webp",
    ],
    description:
      "This cream-hued single swinging chair combines braided rope craftsmanship with a refined aesthetic. Designed without a stand, it's perfect for hanging from sturdy beams in balconies or garden spaces to create a peaceful outdoor haven.",
    price: 520,
    category: "swings",
  },
],
};
