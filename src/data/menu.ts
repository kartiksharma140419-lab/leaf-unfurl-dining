/**
 * Urban Leaf Café — full menu (~28 dishes).
 * Every description is written in the house voice: specific technique,
 * real sensory detail. Never generic. Never "delicious" or "tasty".
 */
export type Dish = {
  slug: string;
  name: string;
  price: number; // rupees
  spice: 1 | 2 | 3;
  description: string;
  chefsPick?: boolean;
  image?: string; // imported URL
};
export type Category = { id: string; title: string; blurb: string; dishes: Dish[] };

import paneer from "@/assets/dish-paneer.jpg";
import seekh from "@/assets/dish-seekh.jpg";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import dal from "@/assets/dish-dal.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import kulcha from "@/assets/dish-kulcha.jpg";
import chai from "@/assets/dish-chai.jpg";
import gulab from "@/assets/dish-gulab.jpg";

export const MENU: Category[] = [
  {
    id: "small-plates",
    title: "Small Plates",
    blurb: "How every good meal begins — smoke, spice, and a reason to slow down.",
    dishes: [
      {
        slug: "paneer-tikka", name: "Tandoori Paneer Tikka", price: 420, spice: 2, image: paneer, chefsPick: true,
        description:
          "Cottage cheese marinated overnight in hung curd, saffron, and roasted spices, then charred fast and hot until the edges catch flame. Smoky outside, cloud-soft inside.",
      },
      {
        slug: "seekh-kebab", name: "Seekh Kebab", price: 460, spice: 2, image: seekh,
        description:
          "Hand-minced lamb, worked with green chilli and toasted spice, molded onto skewers and grilled over open coals. No filler, no shortcuts — just smoke, fat, and fire.",
      },
      {
        slug: "galouti-kebab", name: "Lucknowi Galouti Kebab", price: 520, spice: 2,
        description:
          "Minced meat pounded to velvet with raw papaya and a house masala of thirty-odd spices, seared briefly on a griddle and served on a warm ulte-tawa paratha. Meant to melt before you chew.",
      },
      {
        slug: "chaat-trio", name: "Chaat Trio", price: 380, spice: 3,
        description:
          "Papdi, aloo tikki, and dahi bhalla — the three ways Delhi eats on the street, plated three ways, sweet-sour-hot tamarind and mint chutneys, pomegranate hail on top.",
      },
      {
        slug: "mushroom-shammi", name: "Mushroom Shammi", price: 440, spice: 1,
        description:
          "Slow-cooked mushrooms and yellow split peas, ground fine, shaped by hand and pan-seared in ghee until the crust cracks. Vegetarian, but nobody at the table will notice.",
      },
    ],
  },
  {
    id: "curries",
    title: "Slow-Simmered Curries",
    blurb: "Gravies that took a full day. Eat them like you have nowhere to be.",
    dishes: [
      {
        slug: "butter-chicken", name: "Murgh Makhani (Butter Chicken)", price: 620, spice: 1, image: butterChicken, chefsPick: true,
        description:
          "Charcoal-smoked chicken, simmered low for six hours in a butter-and-tomato gravy, finished with a whisper of kasuri methi and cream. This is the gravy that built a thousand cravings.",
      },
      {
        slug: "dal-makhani", name: "Dal Makhani", price: 380, spice: 1, image: dal, chefsPick: true,
        description:
          "Black lentils, slow-simmered for twenty-four hours over embers until they turn to silk. Butter-kissed, smoke-scented, and worth fighting your table for the last spoonful.",
      },
      {
        slug: "rogan-josh", name: "Kashmiri Rogan Josh", price: 680, spice: 2,
        description:
          "Lamb shoulder braised in a broth stained deep red by Kashmiri chilli and dried cockscomb flower, warmed with fennel and dry ginger the way it's done in the Valley — not a hot dish, a slow one.",
      },
      {
        slug: "laal-maas", name: "Rajasthani Laal Maas", price: 720, spice: 3,
        description:
          "Mutton on the bone, cooked in a fierce gravy of Mathania chillies, garlic, and mustard oil, finished with smoked cardamom. Order rice. Order more rice.",
      },
      {
        slug: "palak-paneer", name: "Palak Paneer", price: 460, spice: 1,
        description:
          "Spinach blanched, ice-shocked, and pureed the same day to keep it forest-green, folded with garlic-tempered ghee and our own smoke-touched paneer. Nothing brown-grey about it.",
      },
      {
        slug: "kadhai-paneer", name: "Kadhai Paneer", price: 480, spice: 2,
        description:
          "Paneer and peppers tossed hard in a coriander-heavy gravy over roaring flame, served in the iron karahi it was cooked in — still hissing when it hits the table.",
      },
      {
        slug: "chana-pindi", name: "Amritsari Chana Pindi", price: 340, spice: 2,
        description:
          "Chickpeas dark and glossy from a long simmer with tea leaves and dried pomegranate, finished with ginger julienne and green chilli. Sunday breakfast in Amritsar, any hour you like.",
      },
    ],
  },
  {
    id: "rice",
    title: "Rice & Biryani",
    blurb: "Basmati, saffron, and the theatre of a sealed pot.",
    dishes: [
      {
        slug: "dum-biryani", name: "Lucknowi Dum Biryani (serves two)", price: 680, spice: 2, image: biryani, chefsPick: true,
        description:
          "Basmati and marinated meat, layered by hand and sealed under dough to steam in its own perfume for forty-five minutes. We bring it to the table still sealed — the first crack of the crust is half the experience.",
      },
      {
        slug: "veg-pulao", name: "Kashmiri Veg Pulao", price: 420, spice: 1,
        description:
          "Long-grain rice cooked in whole-spice stock with slivered almonds, cashews, and jewel-bright pomegranate, sweet with a slow-fried onion base. Fragrant enough to fill a room.",
      },
      {
        slug: "jeera-rice", name: "Jeera Rice", price: 260, spice: 1,
        description:
          "Basmati tempered with cumin in ghee, cooked so the grains stand separate. Plain-looking, deeply seasoned — built to disappear under a good curry.",
      },
    ],
  },
  {
    id: "breads",
    title: "Bread Basket",
    blurb: "Pulled from the tandoor and torn by hand. Best eaten hot, best eaten now.",
    dishes: [
      {
        slug: "amritsari-kulcha", name: "Amritsari Kulcha", price: 180, spice: 1, image: kulcha,
        description:
          "Hand-stretched dough stuffed with spiced potato, blistered in the tandoor until the edges crackle. Torn, never cut — best eaten with your fingers, however fine the china.",
      },
      {
        slug: "garlic-naan", name: "Garlic Naan", price: 140, spice: 1,
        description:
          "Yeasted dough slapped onto the tandoor wall, brushed with garlic butter the second it comes off, showered with fresh coriander. Chewy at the edge, blistered on top.",
      },
      {
        slug: "laccha-paratha", name: "Laccha Paratha", price: 160, spice: 1,
        description:
          "Whole-wheat dough coiled ribbon-thin, pressed flat, tandoor-baked into a hundred flaky layers. Made to soak up gravy without turning to mush.",
      },
      {
        slug: "sheermal", name: "Sheermal", price: 180, spice: 1,
        description:
          "Slightly sweet saffron-milk flatbread from Old Lucknow, brushed with kewra and ghee. The bread the biryani asked for.",
      },
      {
        slug: "roomali", name: "Roomali Roti", price: 120, spice: 1,
        description:
          "Handkerchief-thin unleavened bread tossed hand-to-hand over an inverted iron dome. Folded onto the plate like linen.",
      },
    ],
  },
  {
    id: "chai",
    title: "Chai & Beverages",
    blurb: "What we drink between courses, and what we drink instead of dessert.",
    dishes: [
      {
        slug: "kesar-chai", name: "Kesar Elaichi Chai", price: 150, spice: 1, image: chai,
        description:
          "Slow-boiled with whole cardamom and a thread of Kashmiri saffron, poured tableside from height, the way it's meant to be — for the theatre, and for the froth.",
      },
      {
        slug: "masala-chai", name: "Masala Chai", price: 120, spice: 1,
        description:
          "Assam leaf boiled with ginger, black pepper, cinnamon, and clove until the kitchen smells like a monsoon afternoon. Milky, strong, and non-negotiably sweet.",
      },
      {
        slug: "mango-lassi", name: "Alphonso Mango Lassi", price: 220, spice: 1,
        description:
          "Ripe Alphonso pulp whipped into thick house yogurt with a saffron thread and crushed cardamom. Served in a chilled brass tumbler.",
      },
      {
        slug: "jaljeera", name: "Jaljeera Cooler", price: 160, spice: 2,
        description:
          "Roasted cumin, black salt, mint, and lime, shaken with iced sparkling water. Sharp, bracing — the palate cleanser the meal wants halfway through.",
      },
      {
        slug: "nimbu-pani", name: "Ginger Nimbu Pani", price: 140, spice: 1,
        description:
          "Fresh lime, muddled ginger, a pinch of black salt, a whisper of jaggery. The most honest thing on the menu.",
      },
    ],
  },
  {
    id: "sweet",
    title: "Sweet Endings",
    blurb: "The last course, and the reason the table takes a little longer to leave.",
    dishes: [
      {
        slug: "gulab-rabri", name: "Gulab Jamun with Saffron Rabri", price: 280, spice: 1, image: gulab, chefsPick: true,
        description:
          "Milk dumplings fried to a deep amber, soaked in cardamom syrup, and finished with rabri reduced for hours until it's barely pourable. Order it before you've finished your main — you'll thank us.",
      },
      {
        slug: "kulfi-falooda", name: "Kesar-Pista Kulfi Falooda", price: 260, spice: 1,
        description:
          "Slow-cooked saffron and pistachio kulfi, sliced onto a nest of rose-scented vermicelli and basil seeds, drowned in cold milk. Eat it fast, before it melts.",
      },
      {
        slug: "phirni", name: "Rose Phirni", price: 240, spice: 1,
        description:
          "Rice ground coarse, simmered low in whole milk with rose petals, set in shallow earthen bowls that pull it that little bit further. Cool, floral, quiet.",
      },
      {
        slug: "jalebi", name: "Hot Jalebi & Rabri", price: 220, spice: 1,
        description:
          "Fermented batter piped in golden spirals into ghee, syrup-dipped the second they crackle, served alongside a cold puddle of thickened milk. Temperature is the whole trick.",
      },
    ],
  },
];

export const HOMEPAGE_TEASER: Dish[] = [
  MENU[0].dishes[0], // paneer
  MENU[0].dishes[1], // seekh
  MENU[1].dishes[0], // butter chicken
  MENU[1].dishes[1], // dal
  MENU[2].dishes[0], // biryani
  MENU[3].dishes[0], // kulcha
  MENU[4].dishes[0], // chai
  MENU[5].dishes[0], // gulab
];
