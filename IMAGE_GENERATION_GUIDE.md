# Clean Cat Home — Professional Image Generation & Art Direction Guide

This guide establishes the editorial photography standards, folder hierarchies, naming conventions, exact prompts, dimensions, and layout rules for the **Clean Cat Home** blog.

---

## 1. Editorial Vision & Art Direction

Clean Cat Home combines the serene aesthetic of a **Scandinavian/Japandi interior design magazine** with the practical precision of a **feline wellness and home care authority**.

### Visual Pillars
- **Aesthetic**: Premium editorial lifestyle photography. Clean, uncluttered, light-filled spaces with natural textures (light oak, washed linen, speckled ceramics, brushed stainless steel, matte birch).
- **Lighting**: Diffuse morning or afternoon natural window light. Soft organic falloff, zero harsh flash, zero synthetic neon or radioactive saturation.
- **Color Palette**:
  - Cream & Warm Off-White (`#FAF7F2`, `#F4EFEA`)
  - Warm Oak & Natural Wood (`#E8DCCB`, `#8F6D48`)
  - Muted Sage Leaf (`#5A705E`, `#EBF1EC`)
  - Soft Terracotta Accent (`#B9593E`, `#FAF0EC`)
  - Deep Charcoal Charcoal (`#252422`)
- **Feline Subject**: Healthy, calm domestic cats (calm poses, grooming, sleeping in sunbeams, observing out windows, investigating natural toys). Natural feline anatomy, realistic fur coat texture, expressive relaxed eyes.
- **Camera Look**: Hasselblad or Sony 50mm f/2.8 lens feel, subtle shallow depth of field, natural filmic dynamic range.

### Universal Negative Prompt (Midjourney / Flux / DALL-E)
```text
no text, no typography, no watermarks, no logos, no illustrations, no cartoons, no 3D render artifacts, no distorted anatomy, no extra limbs, no deformed paws, no unrealistic cat eyes, no mutated faces, no oversaturated fluorescent tones, no excessive clutter, no dirty unhygienic messes, no feces, no gross bodily fluids, no harsh flash lighting, no horror aesthetics
```

---

## 2. Image Architecture & Specifications

Every blog article requires **1 Cover Image + 6 Supporting Editorial Images** + **1 Dedicated Pinterest Pin Asset**:

| Image Role | Dimensions | Aspect Ratio | Loading Strategy | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Image 1: Article Cover** | 1600 × 1000 px | 16:10 | `loading="eager"` + `fetchpriority="high"` | Hero editorial visual above fold |
| **Image 2: Problem / Context** | 1200 × 800 px | 3:2 | `loading="lazy"` | Visualizes root problem or context |
| **Image 3: Step 1 / First Solution** | 1200 × 800 px | 3:2 | `loading="lazy"` | Practical primary tool or technique |
| **Image 4: Step 2 / Second Solution** | 1200 × 800 px | 3:2 | `loading="lazy"` | Detailed execution / deep cleaning step |
| **Image 5: Step 3 / Practical Detail** | 1200 × 800 px | 3:2 | `loading="lazy"` | Tactical nuance (depth, filtration, hydration) |
| **Image 6: Prevention / Organization** | 1200 × 800 px | 3:2 | `loading="lazy"` | Long-term home setup & routines |
| **Image 7: Final Result / Takeaway** | 1200 × 800 px | 3:2 | `loading="lazy"` | Harmonious, fresh, serene final living space |
| **Pinterest Editorial Pin** | 1000 × 1500 px | 2:3 | `loading="lazy"` | Social sharing asset with top third copy space |

---

## 3. Directory & File Structure

All images are stored in `/public/images/`:

```
public/
  images/
    blog/
      cat-urine-smell/
        cover.webp
        problem.webp
        cleaning-carpet.webp
        upholstery.webp
        recurring-odor.webp
        prevention.webp
        final-result.webp
      litter-box-cleaning/
        cover.webp
        problem.webp
        scoop.webp
        wash.webp
        refill.webp
        odor-control.webp
        final-result.webp
      house-smell-litter/
        cover.webp
        problem.webp
        plastic-absorption.webp
        litter-depth.webp
        air-purifier.webp
        box-placement.webp
        final-result.webp
      stop-litter-smell/
        ...
      litter-tracking/
        ...
      cat-hair-furniture/
        ...
      cat-shedding/
        ...
      small-cat-room/
        ...
      cat-wall-small-spaces/
        ...
      modern-cat-furniture/
        ...
      indoor-cat-enrichment/
        ...
      first-time-cat-checklist/
        ...
    pins/
      how-to-get-rid-of-cat-urine-smell-pin-01.webp
      how-to-clean-cat-litter-box-pin-01.webp
      why-does-my-house-smell-like-cat-litter-pin-01.webp
      7-ways-to-stop-litter-box-smell-pin-01.webp
      how-to-stop-cat-litter-tracking-pin-01.webp
      how-to-get-cat-hair-off-furniture-pin-01.webp
      how-to-reduce-cat-shedding-pin-01.webp
      small-cat-room-ideas-for-apartments-pin-01.webp
      cat-wall-ideas-for-small-spaces-pin-01.webp
      modern-cat-furniture-ideas-pin-01.webp
      indoor-cat-enrichment-ideas-pin-01.webp
      first-time-cat-owner-checklist-pin-01.webp
```

---

## 4. Article-by-Article Prompts & Metadata

### 1. How to Get Rid of Cat Urine Smell
- **Folder**: `public/images/blog/cat-urine-smell/`
- **Cover (`cover.webp` - 1600x1000)**:
  - *Prompt*: Premium Scandinavian living room with a realistic domestic cat resting gracefully near a neutral low-pile wool carpet, subtle cleaning context, warm natural window light streaming from an airy side window, clean cream walls and light oak interior woodwork, sophisticated editorial pet lifestyle photography, realistic fabric textures.
  - *Alt*: Modern cat-friendly living room with a cat near a clean carpeted area
- **Image 2 (`problem.webp` - 1200x800)**:
  - *Section*: `why-it-is-difficult`
  - *Alt*: Cat-friendly living area where the source of a lingering odor is being located
  - *Caption*: Locating the exact boundary of dried urine is essential before treating.
- **Image 3 (`cleaning-carpet.webp` - 1200x800)**:
  - *Section*: `clean-carpet`
  - *Alt*: Cleaning a carpeted area after a cat urine accident
  - *Caption*: Blotting with microfibre cloths lifts urine before applying enzyme solutions.
- **Image 4 (`upholstery.webp` - 1200x800)**:
  - *Section*: `clean-upholstery`
  - *Alt*: Cleaning cat urine odor from a neutral fabric sofa
  - *Caption*: Enzyme solutions must soak deep into sofa cushion padding to reach dried salts.
- **Image 5 (`recurring-odor.webp` - 1200x800)**:
  - *Section*: `smell-keeps-coming-back`
  - *Alt*: Inspecting a carpet area where cat urine odor may be lingering
  - *Caption*: Using UV inspection lights helps identify old uric acid crystallizations.
- **Image 6 (`prevention.webp` - 1200x800)**:
  - *Section*: `prevent-future-odors`
  - *Alt*: Organized cat area designed for easier cleaning and odor prevention
  - *Caption*: Washable entryway mats and discrete litter furniture prevent odors from spreading.
- **Image 7 (`final-result.webp` - 1200x800)**:
  - *Section*: `simple-routine`
  - *Alt*: Clean fresh cat-friendly living room with an organized cat area
  - *Caption*: A fresh, odor-free sanctuary where cats and clean design coexist in harmony.

---

### 2. How to Clean a Cat Litter Box Properly
- **Folder**: `public/images/blog/litter-box-cleaning/`
- **Cover (`cover.webp` - 1600x1000)**:
  - *Prompt*: Premium editorial photograph of a beautifully organized litter box station in a modern Scandinavian home utility area, matte white open litter pan with clean fresh litter, light oak storage cabinet, natural window light, a healthy domestic cat observing nearby.
  - *Alt*: Clean organized cat litter box station in a modern home
- **Image 2 (`problem.webp` - 1200x800)**:
  - *Section*: `how-often-clean`
  - *Alt*: Cat litter box area showing why regular cleaning is important
  - *Caption*: Daily maintenance prevents bacteria buildup and litter box aversion.
- **Image 3 (`scoop.webp` - 1200x800)**:
  - *Section*: `step-1-scoop`
  - *Alt*: Using a scoop to clean a cat litter box
  - *Caption*: A sturdy metal scoop sifts clumps cleanly without breaking them into dust.
- **Image 4 (`wash.webp` - 1200x800)**:
  - *Section*: `step-3-wash`
  - *Alt*: Washing a cat litter box during a deep cleaning routine
  - *Caption*: Wash with hot water and fragrance-free soap rather than harsh scented chemicals.
- **Image 5 (`refill.webp` - 1200x800)**:
  - *Section*: `step-4-refill`
  - *Alt*: Refilling a clean cat litter box with fresh litter
  - *Caption*: Maintain an even 3-inch depth to allow natural digging without sticking.
- **Image 6 (`odor-control.webp` - 1200x800)**:
  - *Section*: `keep-area-cleaner`
  - *Alt*: Organized litter station designed to make odor control easier
  - *Caption*: Trapping mats and dedicated sealed waste pails keep surrounding air fresh.
- **Image 7 (`final-result.webp` - 1200x800)**:
  - *Section*: `weekly-routine`
  - *Alt*: Fresh clean litter box area integrated into a modern cat-friendly home
  - *Caption*: Consistent daily routines yield a completely odor-free, cat-approved setup.

---

### 3. Why Does My House Smell Like Cat Litter?
- **Folder**: `public/images/blog/house-smell-litter/`
- **Cover (`cover.webp` - 1600x1000)**: Airy open-concept modern apartment living space with natural ventilation, sheer linen curtains swaying slightly in window breeze, domestic cat lounging on an oak console.
- **Image 2 (`problem.webp` - 1200x800)**: Modern hallway alcove with a litter setup illustrating how poor room ventilation can trap odors.
- **Image 3 (`plastic-absorption.webp` - 1200x800)**: Detail shot of an empty litter box surface being inspected for microscopic claw gouges.
- **Image 4 (`litter-depth.webp` - 1200x800)**: Demonstration of precise 3-inch clumping litter depth in a modern minimalist pan.
- **Image 5 (`air-purifier.webp` - 1200x800)**: Sleek matte cylindrical HEPA air purifier operating quietly near a stylish cat corner.
- **Image 6 (`box-placement.webp` - 1200x800)**: Ideal litter box placement in an airy laundry alcove with natural air circulation.
- **Image 7 (`final-result.webp` - 1200x800)**: Crisp, inviting Scandinavian living room, sunlight pouring across hardwood floors.

---

### 4. 7 Ways to Stop Litter Box Smell in an Apartment
- **Folder**: `public/images/blog/stop-litter-smell/`
- **Cover (`cover.webp`)**: Compact stylish Scandinavian studio apartment featuring a discreet, elegant cat zone.
- **Supporting**:
  - `problem.webp`: Small apartment entryway illustrating compact air volume challenges.
  - `stainless-box.webp`: Sleek modern non-porous stainless steel litter box.
  - `sealed-disposal.webp`: Airtight odor-trapping waste disposal container.
  - `carbon-filters.webp`: Linen sachets of activated bamboo charcoal arranged discreetly.
  - `daily-scoop-routine.webp`: Minimalist shelf organizing scooper and bio-waste bags.
  - `final-result.webp`: Warm, sunlit apartment living room with peaceful cat on a wool rug.

---

### 5. How to Stop Cat Litter Tracking All Over the House
- **Folder**: `public/images/blog/litter-tracking/`
- **Cover (`cover.webp`)**: Pristine light oak hardwood floor leading to a chic cat station with an oversized woven honeycomb trapping mat.
- **Supporting**:
  - `problem.webp`: Detail of healthy cat paws stepping out of box onto flooring.
  - `trapping-mat.webp`: Dual-layer honeycomb litter trapping mat in warm grey.
  - `high-sided-box.webp`: Modern high-sided open litter pan preventing litter kick-out.
  - `litter-type.webp`: Comparison of heavy plant pellets vs. clingy fine clay dust.
  - `walkway-design.webp`: Two-step staggered carpeted exit ramp beside litter station.
  - `final-result.webp`: Gleaming hardwood floors completely free of grit.

---

### 6. How to Get Cat Hair Off Furniture
- **Folder**: `public/images/blog/cat-hair-furniture/`
- **Cover (`cover.webp`)**: Neutral oatmeal linen sectional sofa with domestic longhair cat resting on a washable textured throw.
- **Supporting**:
  - `problem.webp`: Macro texture of woven sofa fabric with fine cat hairs embedded.
  - `rubber-squeegee.webp`: Handheld natural rubber squeegee cleanly scraping pet fur line.
  - `damp-rubber-glove.webp`: Hand in textured natural rubber glove smoothing across chair armrest.
  - `pet-vacuum.webp`: Cordless vacuum with motorized upholstery mini-brush attachment.
  - `protective-throws.webp`: Waffle-weave neutral throw blanket draped over cat favorite corner.
  - `final-result.webp`: Immaculate, hair-free linen sofa in a bright modern living space.

---

### 7. How to Reduce Cat Shedding
- **Folder**: `public/images/blog/cat-shedding/`
- **Cover (`cover.webp`)**: Peaceful bonding grooming session with cat on a light oak bench in morning sunlight.
- **Supporting**:
  - `problem.webp`: Cat sitting in bright window light showing natural coat density.
  - `deshedding-tool.webp`: Ergonomic deshedding rake removing dead undercoat cleanly.
  - `hydration-nutrition.webp`: Ceramic cat fountain bubbling beside an omega-3 dietary bowl.
  - `grooming-glove.webp`: Silicone massage mitt stroking contented cat along its back.
  - `air-humidity.webp`: Sleek white cool-mist evaporative humidifier maintaining 45% humidity.
  - `final-result.webp`: Cat with a silky healthy coat curled atop crisp white bed linens.

---

### 8. Small Cat Room Ideas for Apartments
- **Folder**: `public/images/blog/small-cat-room/`
- **Cover (`cover.webp`)**: Small apartment nook transformed into a chic cat zone with light birch wall walkways and discreet cabinet.
- **Supporting**:
  - `problem.webp`: Compact urban apartment corner showing limited floor space.
  - `vertical-zoning.webp`: Minimalist birch wall shelves and floating bridges on cream wall.
  - `multi-functional-furniture.webp`: Side table with integrated lower felt cat pod.
  - `window-perch.webp`: Wooden floating window perch with soft sherpa cushion.
  - `hidden-litter-credenza.webp`: Scandinavian credenza with fluted oak doors and discreet entrance.
  - `final-result.webp`: Harmonious, stylish apartment living area with cat resting high up.

---

### 9. Cat Wall Ideas for Small Spaces
- **Folder**: `public/images/blog/cat-wall-small-spaces/`
- **Cover (`cover.webp`)**: Custom modular cat wall highway made of curved bentwood and linen.
- **Supporting**:
  - `problem.webp`: Minimalist wall with laser level and layout markings for studs.
  - `stepping-shelves.webp`: Hexagonal birch cat shelves with natural cork inlays.
  - `suspended-bridge.webp`: Flexible oak-slat cat suspension bridge across living room wall.
  - `wall-hammock.webp`: Heavyweight cream linen hammock suspended from oak brackets.
  - `integrated-scratching.webp`: Tall vertical natural sisal rope pillar mounted flush to wall.
  - `final-result.webp`: Complete vertical highway with cat surveying from apex.

---

### 10. Modern Cat Furniture Ideas
- **Folder**: `public/images/blog/modern-cat-furniture/`
- **Cover (`cover.webp`)**: Sculptural bentwood and bouclé cat tower in a sun-drenched Japandi living room.
- **Supporting**:
  - `problem.webp`: Contrast showing bulky synthetic carpet tower clashing with decor.
  - `bentwood-tower.webp`: Curved natural birch architectural cat climbing tower.
  - `concealed-litter.webp`: Mid-century walnut sideboard concealing litter pan.
  - `ceramic-fountain.webp`: Minimalist speckled stoneware pet water fountain.
  - `durable-scratchers.webp`: Solid oak geometric scratching block with replaceable sisal insert.
  - `final-result.webp`: Flawlessly coordinated room where cat gear looks like designer art.

---

### 11. Indoor Cat Enrichment Ideas
- **Folder**: `public/images/blog/indoor-cat-enrichment/`
- **Cover (`cover.webp`)**: Cat playing with natural wood and felt interactive puzzle toy on light wood floor.
- **Supporting**:
  - `problem.webp`: Cat gazing out window showing lack of mental stimulation.
  - `foraging-puzzles.webp`: Birch wood sliding foraging board with healthy treats.
  - `cat-grass-garden.webp`: Terracotta dish growing lush organic wheatgrass and catnip.
  - `wand-play-session.webp`: Cat leaping mid-air towards a natural feather teaser wand.
  - `tunnel-hideaway.webp`: Oatmeal colored structured linen play tunnel with peep holes.
  - `final-result.webp`: Content, deeply asleep cat curled on a cozy boucle cushion.

---

### 12. First-Time Cat Owner Checklist
- **Folder**: `public/images/blog/first-time-cat-checklist/`
- **Cover (`cover.webp`)**: Warm, inviting Scandinavian bedroom corner prepped as a welcoming cat basecamp.
- **Supporting**:
  - `problem.webp`: New cat cautiously observing from beneath an armchair.
  - `safe-basecamp.webp`: Clean layout showing separated zones for sleep, food, and litter.
  - `cat-carrier.webp`: Premium fabric cat carrier kept open with blanket as a cozy cave.
  - `cat-proofing.webp`: Desk area with cords hidden in an oak cable box and safe plants.
  - `scratching-station.webp`: Heavy-duty modern scratching post placed near a doorway.
  - `final-result.webp`: Confident, happy cat resting peacefully beside owner reading on sofa.

---

## 5. Workflow for External Generation & Deployment

1. **Generate**: Copy the prompt and negative prompt into Midjourney v6 / Flux.1 / DALL-E 3.
2. **Download & Resize**: Ensure the file matches either 1600x1000 (cover), 1200x800 (supporting), or 1000x1500 (pin).
3. **Format**: Convert to `.webp` with quality setting 85–90 for optimum balance between clarity and file weight (< 120 KB).
4. **Place**: Drop into `public/images/blog/[slug]/[filename].webp` or `public/images/pins/[slug]-pin-01.webp`.
5. **Verify**: Open the browser preview; the image system automatically detects and renders the asset instantly!
