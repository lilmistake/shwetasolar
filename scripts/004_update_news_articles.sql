-- Clear existing news articles
DELETE FROM solar_news;

-- Add missing columns to solar_news table
ALTER TABLE solar_news 
ADD COLUMN IF NOT EXISTS external_url text,
ADD COLUMN IF NOT EXISTS excerpt text,
ADD COLUMN IF NOT EXISTS image text;

-- Add new news articles with concise content and external links

-- Article 1: Facility Unveiling (EPR Magazine - September 5, 2025)
INSERT INTO solar_news (
  id,
  title,
  content,
  excerpt,
  external_url,
  published_date,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'Shweta Solar Featured in EPR Magazine',
  'EPR Magazine covered our upcoming 1.2 GW solar module manufacturing facility launch in NCR. The article highlights our commitment to producing next-generation TOPCon modules with over 22% efficiency and our role in powering India''s renewable energy future.',
  'EPR Magazine covers Shweta Solar''s 1.2 GW manufacturing facility launch in NCR.',
  'https://www.eprmagazine.com/news/shweta-solar-to-introduce-solar-module-manufacturing-facility-in-ncr/',
  '2025-09-05 09:13:57+00',
  '2025-09-05 09:13:57+00',
  '2025-09-05 09:13:57+00'
);

-- Article 2: GST Change Coverage (PTI News - August 15, 2025)
INSERT INTO solar_news (
  id,
  title,
  content,
  excerpt,
  external_url,
  published_date,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'Shweta Solar Featured in PTI News',
  'PTI News featured Shweta Solar in their coverage of GST rate reductions for solar modules. The article discusses how this policy change will drive stronger demand and improve cost efficiency across the renewable energy sector.',
  'PTI News features Shweta Solar in coverage of GST rate reductions for solar modules.',
  'https://www.ptinews.com/press-release/implications-of-gst-cuts-unfold-as-industries-anticipate-stronger-demand-and-greater-cost-efficiency/2940795',
  '2025-08-15 10:00:00+00',
  '2025-08-15 10:00:00+00',
  '2025-08-15 10:00:00+00'
);
