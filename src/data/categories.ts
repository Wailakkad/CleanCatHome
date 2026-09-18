import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'cat-odor-removal',
    slug: 'cat-odor-removal',
    name: 'Cat Odor Removal',
    h1Title: 'Cat Odor Removal & Neutralization',
    metaDescription: 'Practical and effective methods to safely neutralize cat urine smell, litter odors, and persistent pet scents from home surfaces.',
    intro: 'Living with cats does not mean enduring lingering smells. Discover proven, veterinarian-safe routines to locate odor sources, neutralize uric acid crystals, and restore fresh air to your living space.',
    longDescription:
      'Persistent cat odors are one of the most frustrating challenges feline guardians face, yet they are almost always solvable with the right biological approach. Cat urine and concentrated litter smells contain stubborn uric acid salts that standard household detergents cannot dissolve. In our comprehensive guides, we explain the science behind odor persistence, teach you how to detect hidden spots using ultraviolet blacklights, and guide you through safe enzymatic bio-treatments for carpets, hardwood, and upholstery. Rather than masking scents with overpowering synthetic perfumes that irritate feline airways, we focus on complete molecular neutralization so your home remains naturally welcoming, hygienic, and serene.',
    iconName: 'Wind',
    featuredSlug: 'how-to-get-rid-of-cat-urine-smell',
    relatedCategorySlugs: ['cat-litter-box', 'cleaning', 'cat-care'],
    featuredProblem: {
      title: 'Persistent Cat Urine Odor in Carpets or Furniture',
      description: 'Why standard cleaners fail to remove uric acid crystals and how enzymatic bio-treatments solve the problem permanently.',
      slug: 'how-to-get-rid-of-cat-urine-smell',
    },
    commonQuestions: [
      {
        question: 'Why does cat urine smell get worse on humid days?',
        answer: 'Cat urine contains insoluble uric acid crystals. When indoor humidity rises, moisture in the air reactivates these dormant salt crystals, causing them to release pungent sulfur compounds and ammonia odors even months after the initial accident.',
      },
      {
        question: 'Can I clean cat urine with household vinegar or baking soda?',
        answer: 'Vinegar and baking soda are excellent for breaking down urea and neutralizing surface pH, but they cannot break the chemical bonds of uric acid crystals. For permanent removal that stops cats from re-marking, an enzymatic bio-cleaner is necessary.',
      },
      {
        question: 'Is it safe to use bleach around cat urine?',
        answer: 'Never use chlorine bleach on cat urine. Urine contains ammonia compounds, and mixing bleach with ammonia produces dangerous chloramine gases that are toxic to both humans and felines.',
      },
    ],
  },
  {
    id: 'cat-litter-box',
    slug: 'cat-litter-box',
    name: 'Cat Litter Box',
    h1Title: 'Litter Box Care, Setup & Maintenance',
    metaDescription: 'Simple routines and smart setups for cleaner litter boxes, zero tracking, odor control, and happier cats.',
    intro: 'A clean litter box is the foundation of both a fresh home and feline wellness. Learn realistic scooping schedules, deep-cleaning steps, box placement rules, and tracking mitigation.',
    longDescription:
      'The cat litter box is the epicenter of household cleanliness for indoor pet parents. When managed poorly, it creates unpleasant ammonia vapors, unsightly tracking across wood floors, and stress for your cats. With an acute sense of smell fourteen times sharper than our own, cats require an environment that is scrupulously maintained. Our editorial guides demystify the ideal maintenance schedule: separating fast daily scooping rituals from periodic deep sanitization. We cover box dimension ergonomics, optimal litter depth, the immense benefits of non-porous stainless steel pans, and smart entryway mats that prevent scattered granules from traveling beyond the litter station.',
    iconName: 'Sparkles',
    featuredSlug: 'how-to-clean-cat-litter-box',
    relatedCategorySlugs: ['cat-odor-removal', 'cleaning', 'cat-home'],
    featuredProblem: {
      title: 'Why Does My House Smell Like Cat Litter?',
      description: 'The root causes of persistent litter odors, from dirty plastic pans to improper litter depth, and how to fix them in 15 minutes.',
      slug: 'why-does-my-house-smell-like-cat-litter',
    },
    commonQuestions: [
      {
        question: 'How often should I scoop and deep-clean the litter box?',
        answer: 'Scoop clumps once to twice daily. Perform a full reset—emptying all old substrate, scrubbing the basin with warm water and fragrance-free dish soap, and refilling with fresh litter—every 2 to 3 weeks for plastic pans, or every 3 to 4 weeks for stainless steel.',
      },
      {
        question: 'What is the best depth for cat litter?',
        answer: 'The optimal depth is 2.5 to 3 inches. Less than 2 inches allows urine to form sticky mud against the bottom of the pan, while deeper than 4 inches feels shifty and uncomfortable for your cat to balance on.',
      },
      {
        question: 'Why do cats kick litter all over the floor?',
        answer: 'Vigorous digging is an innate protective instinct to bury scents from predators. If tracking is severe, switch to a high-sided open box, avoid dusty fine clays, and position a double-layer honeycomb trapping mat right outside the entrance.',
      },
    ],
  },
  {
    id: 'cleaning',
    slug: 'cleaning',
    name: 'Cleaning',
    h1Title: 'Cat Cleaning Tips & Home Routines',
    metaDescription: 'Practical cleaning routines for cat owners, from cat hair and litter mess to keeping your furniture and floors fresh.',
    intro: 'Practical cleaning routines for cat owners, from stubborn hair removal and litter tracking to keeping your floors, rugs, and furniture spotless without using toxic chemicals.',
    longDescription:
      'Living alongside indoor cats does not mean you have to surrender your home to loose fur, paw dust, or cluttered supply corners. A genuinely clean cat home relies on small, low-friction habits that take minutes each day rather than exhausting weekend deep-cleans. In this section, we share vetted non-toxic cleaning solutions, specialized rubber squeegee tools for carpet de-furring, safe floor washing formulas that leave no toxic residues for grooming paws, and organized cleaning stations that keep every tool within arm’s reach.',
    iconName: 'Brush',
    featuredSlug: 'how-to-get-cat-hair-off-furniture',
    relatedCategorySlugs: ['cat-odor-removal', 'cat-grooming', 'cat-litter-box'],
    featuredProblem: {
      title: 'Stubborn Cat Hair Embedded in Sofas & Rugs',
      description: 'Why standard vacuuming leaves undercoat fibers behind and the specialized tools that lift pet hair in seconds.',
      slug: 'how-to-get-cat-hair-off-furniture',
    },
    commonQuestions: [
      {
        question: 'What floor cleaners are completely safe for cats?',
        answer: 'Cats walk on floors and subsequently lick their paws during grooming. Avoid cleaners containing pine oils, tea tree oil, bleach, or phenols. Instead, use warm water with a few drops of mild unscented dish soap or veterinary-approved non-toxic floor cleaners.',
      },
      {
        question: 'How can I stop litter tracking through my living room?',
        answer: 'Place a large double-layer honeycomb mat at the exit of the box, choose heavier low-tracking clay or plant-based pellets, and use a high-sided litter box that catches flings before they reach the floor.',
      },
      {
        question: 'What is the fastest way to get cat hair off fabric upholstery?',
        answer: 'Dampen a standard rubber dishwashing glove and swipe firmly across the fabric. The rubber creates static friction that instantly rolls embedded undercoat hair into neat, easily discardable strips.',
      },
    ],
  },
  {
    id: 'cat-home',
    slug: 'cat-home',
    name: 'Cat Home',
    h1Title: 'Cat-Friendly Home Design & Organization',
    metaDescription: 'Smart design ideas for cat owners: litter enclosure camouflage, vertical cat trees, neat toy storage, and calm pet spaces.',
    intro: 'Create an aesthetically pleasing Scandinavian-inspired living space that respects both your human design sensibilities and your cat’s instinctual territory requirements.',
    longDescription:
      'Designing a cat-friendly home does not require sacrificing clean lines, beautiful textiles, or minimalist aesthetics. By understanding feline environmental needs—especially the instinctual desire for vertical territory, vantage points over entryways, and discrete bathroom privacy—you can seamlessly integrate cat amenities into modern architecture. Our guides explore solid wood floating cat wall shelves, hidden litter credenzas with ventilation, washable linen furniture protectors, and tranquil rest zones that honor both species living under your roof.',
    iconName: 'Home',
    featuredSlug: 'cat-wall-ideas-for-small-spaces',
    relatedCategorySlugs: ['cat-room-ideas', 'cat-furniture', 'indoor-cat-enrichment'],
    featuredProblem: {
      title: 'Small Apartment Layouts with Cats',
      description: 'How to utilize vertical wall space and discreet furniture to give your cat territory without cluttering living areas.',
      slug: 'cat-wall-ideas-for-small-spaces',
    },
    commonQuestions: [
      {
        question: 'How do I hide a litter box without making it smell?',
        answer: 'Choose an enclosure with ample interior dimensions, good ventilation louvers, and an easy-to-clean wipeable interior. Never place food or water near an enclosed litter station, and ensure scooping takes seconds with accessible magnetic doors.',
      },
      {
        question: 'Are wall-mounted cat shelves safe for drywall?',
        answer: 'Yes, provided you mount brackets directly into wall studs using heavy-duty wood screws. For hollow drywall between studs, use heavy-duty toggle bolts rated for at least 50 lbs to account for the dynamic impact of a leaping cat.',
      },
      {
        question: 'What fabrics resist cat scratching best?',
        answer: 'Tight microfibers, velvet, and commercial-grade Crypton fabrics resist claw penetration because they have no loose woven loops for claws to snag. Avoid tweed, linen, and chenille on high-traffic pet furniture.',
      },
    ],
  },
  {
    id: 'cat-care',
    slug: 'cat-care',
    name: 'Cat Care',
    h1Title: 'Everyday Indoor Cat Care & Wellness',
    metaDescription: 'Practical daily routines, feeding stations, hydration setups, and comfort tips for happy and healthy indoor cats.',
    intro: 'Everyday indoor cat care tailored for modern living. Explore stress-free routines, water fountain upkeep, senior cat comfort, and essential home safety precautions.',
    longDescription:
      'A harmonious home starts with calm, physically thriving cats. Indoor felines rely entirely on their caregivers for environmental enrichment, proper hydration, and safe behavioral outlets. Our care guides provide actionable checklists for both first-time adopters and seasoned cat guardians: from quiet ceramic fountain maintenance to prevent kidney strain, to recognizing early signs of stress-induced litter aversion. Everything we publish is designed with non-invasive, feline-positive handling principles in mind.',
    iconName: 'Heart',
    featuredSlug: 'first-time-cat-owner-checklist',
    relatedCategorySlugs: ['cat-grooming', 'indoor-cat-enrichment', 'cat-litter-box'],
    featuredProblem: {
      title: 'Setting Up a New Cat for Household Success',
      description: 'Essential arrival checklists, room-by-room safety audits, and calm routines that prevent common beginner mishaps.',
      slug: 'first-time-cat-owner-checklist',
    },
    commonQuestions: [
      {
        question: 'Why won’t my cat drink water from their bowl?',
        answer: 'In the wild, cats avoid standing water near food sources because of potential contamination. Separate water bowls from food dishes by at least three feet, or switch to a circulating ceramic water fountain.',
      },
      {
        question: 'How do I know if my cat is stressed by household changes?',
        answer: 'Signs of feline stress include changes in litter box habits, over-grooming, hiding, decreased appetite, or unexpected vocalization. Provide calm vertical safe spots and consistent daily feeding routines.',
      },
      {
        question: 'When should inappropriate urination prompt a vet visit?',
        answer: 'Immediately. Up to 60% of cats urinating outside the litter box suffer from underlying medical causes like urinary tract infections, idiopathic cystitis, or painful bladder stones. Always rule out medical causes before assuming behavioral issues.',
      },
    ],
  },
  {
    id: 'cat-grooming',
    slug: 'cat-grooming',
    name: 'Cat Grooming',
    h1Title: 'Cat Grooming, Deshedding & Coat Care',
    metaDescription: 'Effective deshedding tools, brushing routines, nail trimming techniques, and realistic ways to minimize cat hair on upholstery.',
    intro: 'Keep shedding under control before it coats your sofa. Gentle brushing rituals, undercoat de-shedding guides, and humane grooming practices that minimize loose fur at the source.',
    longDescription:
      'Grooming is your first and most powerful line of defense against stray fur tumbling across your rugs. When cats groom themselves, they ingest dead undercoat fur, leading to digestive hairballs and shedding across every soft surface in your home. Our grooming guides break down low-stress deshedding tools—from slicker brushes to stainless steel undercoat combs—and show you how to establish enjoyable 3-minute daily sessions that strengthen your bond while dramatically reducing airborne dander.',
    iconName: 'Scissors',
    featuredSlug: 'how-to-reduce-cat-shedding',
    relatedCategorySlugs: ['cleaning', 'cat-care', 'cat-home'],
    featuredProblem: {
      title: 'Managing Seasonal Undercoat Shedding at the Source',
      description: 'The right combination of slicker brushes and conditioning routines that trap fur before it covers your home.',
      slug: 'how-to-reduce-cat-shedding',
    },
    commonQuestions: [
      {
        question: 'How often should I brush a short-haired cat?',
        answer: 'Brushing 2 to 3 times weekly with a gentle slicker brush or rubber massage glove removes loose hairs before they are shed or ingested as hairballs.',
      },
      {
        question: 'Can I bathe my indoor cat to reduce dander?',
        answer: 'Most healthy cats groom themselves effectively and rarely require water baths, which can cause intense stress. Regular brushing and damp microfiber wipes are much gentler and equally effective for minimizing dander.',
      },
      {
        question: 'Why does my cat shed so much in spring and autumn?',
        answer: 'Cats experience seasonal photoperiod sheds as daylight hours shift. Daily 5-minute brushing sessions during these transitional months prevent mats and keep floor fur under control.',
      },
    ],
  },
  {
    id: 'indoor-cat-enrichment',
    slug: 'indoor-cat-enrichment',
    name: 'Indoor Cat Enrichment',
    h1Title: 'Indoor Cat Enrichment & Mental Stimulation',
    metaDescription: 'Prevent boredom and behavioral issues with sensory enrichment, puzzle feeders, window perches, and hunting play routines.',
    intro: 'Active indoor cats are calmer, healthier, and less prone to destructive scratching or stress spraying. Explore mental stimulation, hunting simulations, and sensory enrichment routines.',
    longDescription:
      'An understimulated indoor cat often manifests boredom through destructive scratching, 3 AM hyperactive sprints, or anxious territorial spraying. Enrichment is not about buying dozens of noisy plastic toys; it is about replicating natural feline instinctual behaviors: the predatory sequence of stalking, chasing, catching, biting, and eating. Learn how to craft mentally engaging puzzle feeders, arrange sun-soaked bird-watching perches, and run 10-minute wand play sessions that leave your cat completely content and restful.',
    iconName: 'Sun',
    featuredSlug: 'indoor-cat-enrichment-ideas',
    relatedCategorySlugs: ['cat-home', 'cat-room-ideas', 'cat-care'],
    featuredProblem: {
      title: 'Preventing Indoor Cat Boredom & Destructive Scratching',
      description: 'Simple hunting simulations, puzzle feeders, and window vantage points that keep apartment cats mentally sharp and peaceful.',
      slug: 'indoor-cat-enrichment-ideas',
    },
    commonQuestions: [
      {
        question: 'How much playtime does an adult indoor cat need daily?',
        answer: 'Two dedicated 10-to-15 minute interactive play sessions daily with a feather wand or kicker toy satisfy predatory instincts and prevent nighttime restlessness.',
      },
      {
        question: 'What are puzzle feeders and why do cats need them?',
        answer: 'Puzzle feeders require cats to use their paws or brains to retrieve kibble or treats. They slow down fast eaters, prevent boredom, and simulate wild foraging behaviors.',
      },
      {
        question: 'How can I make a window safe and enriching for my cat?',
        answer: 'Install a sturdy suction-cup or sill-mounted padded perch, ensure window screens are reinforced, and hang a bird or hummingbird feeder outside the glass to create dynamic visual stimulation.',
      },
    ],
  },
  {
    id: 'cat-room-ideas',
    slug: 'cat-room-ideas',
    name: 'Cat Room Ideas',
    h1Title: 'Cat Room Ideas & Dedicated Pet Zones',
    metaDescription: 'Inspirational layouts for spare rooms, closet conversions, and stylish cozy cat sanctuaries in small apartments.',
    intro: 'Whether you have a spare bedroom or an underutilized alcove, discover functional layouts that provide safe vertical retreats, concealed litter stations, and cozy resting zones.',
    longDescription:
      'Whether you are repurposing an entire guest room or simply organizing a stylish alcove under a staircase, dedicated cat zones offer tremendous psychological comfort to sensitive felines. In this category, we feature floor plans and aesthetic room tours that demonstrate how to coordinate scratching posts, vertical highways, discreet feeding corners, and quiet sleep nests in harmony with modern interior decoration.',
    iconName: 'Layout',
    featuredSlug: 'small-cat-room-ideas-for-apartments',
    relatedCategorySlugs: ['cat-furniture', 'cat-home', 'indoor-cat-enrichment'],
    featuredProblem: {
      title: 'Designing a Dedicated Cat Corner in a Studio or 1-Bedroom',
      description: 'Maximizing small square footage with modular wall systems, hidden litter storage, and elevated resting nooks.',
      slug: 'small-cat-room-ideas-for-apartments',
    },
    commonQuestions: [
      {
        question: 'Can I turn a small closet into a cat sanctuary?',
        answer: 'Yes! Removing the lower closet door or installing a decorative pet arch allows you to place a quiet litter station on the floor with vertical climbing shelves mounted on the walls above.',
      },
      {
        question: 'Should cat food and litter be in the same room?',
        answer: 'If using a single cat room, keep the feeding station as far away from the litter box as possible—ideally on an elevated shelf where the cat feels secure and separated from bathroom scents.',
      },
      {
        question: 'What lighting works best in a dedicated cat space?',
        answer: 'Warm, natural daylight is ideal. For interior closets or windowless rooms, use soft warm LED strip lighting on a gentle timer to simulate a regular diurnal cycle.',
      },
    ],
  },
  {
    id: 'cat-furniture',
    slug: 'cat-furniture',
    name: 'Cat Furniture',
    h1Title: 'Modern & Aesthetic Cat Furniture',
    metaDescription: 'Minimalist cat trees, floating wall shelves, discreet litter box credenzas, and chic scratchers that blend with interior decor.',
    intro: 'Say goodbye to garish carpeted towers. Discover minimalist solid wood perches, boucle hideaways, and concealed litter credenzas that elevate your home decor.',
    longDescription:
      'For decades, cat furniture was synonymous with neon-beige carpet tubes and flimsy sisal ropes that unraveled within months. Today, a new era of pet design blends Scandinavian minimalism, natural birch plywood, washable cotton cushions, and architectural wall systems. Our curation highlights durable, beautiful pieces that satisfy your cat’s primal need to climb, scratch, and survey their kingdom while complementing your living room aesthetics.',
    iconName: 'Armchair',
    featuredSlug: 'modern-cat-furniture-ideas',
    relatedCategorySlugs: ['cat-home', 'cat-room-ideas', 'cleaning'],
    featuredProblem: {
      title: 'Replacing Ugly Carpet Towers with Aesthetic Modern Pieces',
      description: 'Solid oak wall perches, linen hideaways, and discreet litter credenzas that blend with upscale living spaces.',
      slug: 'modern-cat-furniture-ideas',
    },
    commonQuestions: [
      {
        question: 'Why do cats prefer tall cat trees?',
        answer: 'Cats are both predators and prey in nature. High perches give them a secure tactical vantage point to observe their territory without fear of being ambushed by dogs, children, or sudden movements.',
      },
      {
        question: 'How can I prevent my cat from scratching my sofa instead of their scratcher?',
        answer: 'Place a tall, ultra-stable sisal or wood scratcher right next to the sofa arm they target. Cats scratch when waking up to stretch their spines, so stability and height are essential.',
      },
      {
        question: 'What makes modern cat furniture easier to clean?',
        answer: 'Quality modern pieces use removable, machine-washable cushion covers and smooth sealed wood surfaces that can be wiped clean with a damp cloth, eliminating trapped fur and dander.',
      },
    ],
  },
];
