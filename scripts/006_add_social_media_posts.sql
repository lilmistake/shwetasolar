-- Add social media posts to the database
-- These posts are from Instagram and represent Shweta Solar's social media presence

INSERT INTO social_media_posts (
  title,
  content,
  image_url,
  post_url,
  platform,
  post_type, -- Added post_type column to fix NOT NULL constraint error
  published_at,
  created_at
) VALUES
-- October 2025 Posts
(
  'Turning green into the new standard',
  'India''s energy landscape is moving fast. Clean energy is the baseline — and growth follows naturally.

At Shweta Solar, we are committed to raising that baseline. Our mission is to make glass-to-glass TOPCon technology the benchmark for efficiency and reliability — turning green energy from a good choice into the smartest decision for EPCs and businesses.

This is what leadership looks like: setting higher expectations, delivering technology that lasts, and building momentum that moves the entire industry forward.

Legacy is built in sunlight.',
  '/images/social/green-traffic-light.jpg',
  'https://www.instagram.com/p/DP5wehUgaWY',
  'instagram',
  'image', -- Added post_type value
  '2025-10-17T00:00:00Z',
  NOW()
),
(
  'Wishing you a joyful Govardhan Puja',
  'On this sacred day of Govardhan Puja, we celebrate the strength that sustains us and the gratitude that keeps us grounded.

May your home be filled with light, your efforts with growth, and your journey with blessings.

Shweta Solar wishes you a prosperous Govardhan Puja.',
  '/images/social/govardhan-puja.jpg',
  'https://www.instagram.com/p/DQGHztkAVuM',
  'instagram',
  'image', -- Added post_type value
  '2025-10-23T00:00:00Z',
  NOW()
),
(
  'Wishing you a peaceful Gandhi Jayanti',
  'May this day remind us all to lead with courage, compassion, and responsibility — building a brighter and more sustainable future together.

Non-violence shows its power in action — so does solar, silently fueling change.',
  '/images/social/gandhi-jayanti.jpg',
  'https://www.instagram.com/p/DPTRHJlgeVc',
  'instagram',
  'image', -- Added post_type value
  '2025-10-02T00:00:00Z',
  NOW()
),
(
  'Wishing you a joyful Dussehra',
  'May the victory of light over darkness bring happiness, health, and prosperity to you and your loved ones — and may this season inspire new beginnings for us all.

This Dussehra, let light win over darkness with clean, powerful solar energy.',
  '/images/social/dussehra.jpg',
  'https://www.instagram.com/p/DPS6HKAAVOl',
  'instagram',
  'image', -- Added post_type value
  '2025-10-02T00:00:00Z',
  NOW()
),

-- September 2025 Posts
(
  'Efficiency defines tomorrow''s leaders',
  'Every EPC knows the pressure of a project. Margins are tight. Deadlines are fixed. Performance leaves no room for compromise. Even a single percentage point of efficiency can decide the outcome.

Glass-to-glass TOPCon technology is built for that pressure — delivering stronger performance, lasting durability, and returns that remain steady long after the project is complete.

Unlike conventional panels that use glass on one side and plastic on the other, glass-to-glass panels protect the solar cells with glass on both sides. And the TOPCon cells inside are more advanced than standard PERC cells: they convert more sunlight into electricity, lose less power in hot conditions, and keep their efficiency for longer years of operation.

The projects that lead tomorrow are the ones built on efficiency today.',
  '/images/social/topcon-technology.jpg',
  'https://www.instagram.com/p/DPIe-0sCH6F',
  'instagram',
  'image', -- Added post_type value
  '2025-09-28T00:00:00Z',
  NOW()
),
(
  '1.2 GW Power: Clean Future Built in India',
  'Every panel we create is part of something bigger — reducing emissions, protecting resources, and shaping an energy system that future generations can depend on. Sustainability is the standard we choose to build with today.

At 1.2 GW of capacity, the numbers tell their own story:

🌍 For nature → millions of tons of CO₂ avoided, cleaner air, and resources preserved.
🏙️ For communities → more stable power, local jobs, and a stronger foundation for growth.
📈 For businesses → reliable supply, better margins, and partnerships built to last.

Scale is about producing smart — it''s about creating a cleaner, stronger, more secure future.

The shift is already underway.',
  '/images/social/1-2gw-power.jpg',
  'https://www.instagram.com/p/DO7gIcuDPnG',
  'instagram',
  'image', -- Added post_type value
  '2025-09-23T00:00:00Z',
  NOW()
),
(
  'Happy Zero Emissions Day',
  'Let''s celebrate clean skies, fresh air, and every step toward a sustainable future.

Together, we can make every day a stride closer to a zero-emissions India.

Go solar, go emission-free — make every day Zero Emissions Day.',
  '/images/social/zero-emissions-day.jpg',
  'https://www.instagram.com/p/DO2eBmWgWaL',
  'instagram',
  'image', -- Added post_type value
  '2025-09-21T00:00:00Z',
  NOW()
),
(
  'Progress without values won''t last',
  'For us, trust is the outcome of decades spent honoring commitments, building relationships, and standing by our partners. That''s the tradition we carry forward into every project today.

In an industry where deadlines, margins, and reputations are always on the line, values are what keep promises strong and partnerships steady.

Partnerships built on trust shape stronger futures.',
  '/images/social/built-on-values.jpg',
  'https://www.instagram.com/p/DOxs6Oxgc9Y',
  'instagram',
  'image', -- Added post_type value
  '2025-09-19T00:00:00Z',
  NOW()
),
(
  'Happy Vishwakarma Puja',
  'Today is about honoring the creators, the innovators, the builders.

On Vishwakarma Puja, we celebrate the people whose skill and dedication keep India moving forward — from the smallest workshop to the biggest factory floor.

Here''s to the spirit of creation and the bright future it builds for us all.

Honor innovation this Vishwakarma Puja with solar energy driving a brighter tomorrow.',
  '/images/social/vishwakarma-puja.jpg',
  'https://www.instagram.com/p/DOsoLytExpb',
  'instagram',
  'image', -- Added post_type value
  '2025-09-17T00:00:00Z',
  NOW()
);
