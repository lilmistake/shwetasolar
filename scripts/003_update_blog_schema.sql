-- Update blog schema to remove author and add key_takeaways
-- Remove author column and add key_takeaways column to solar_blogs table

-- Add key_takeaways column (nullable array of text)
ALTER TABLE solar_blogs 
ADD COLUMN IF NOT EXISTS key_takeaways TEXT[];

-- Update existing blog posts with sample key takeaways
UPDATE solar_blogs 
SET key_takeaways = ARRAY[
  'India is targeting 500 GW of renewable energy capacity by 2030',
  'TOPCon and HJT technologies offer 23-26% efficiency compared to 20-22% for PERC',
  'Government initiatives like PLI and PM-KUSUM are driving solar adoption',
  'Smart solar solutions with AI and IoT are becoming mainstream'
]
WHERE slug = 'future-of-solar-energy-india';

UPDATE solar_blogs 
SET key_takeaways = ARRAY[
  'TOPCon offers 1-3% higher efficiency than PERC technology',
  'Better temperature coefficient means superior performance in hot climates',
  'Despite 5-10% higher initial cost, TOPCon provides better long-term ROI',
  'TOPCon is rapidly becoming the new industry standard'
]
WHERE slug = 'topcon-vs-perc-technology';

UPDATE solar_blogs 
SET key_takeaways = ARRAY[
  'Shweta Solar operates on 100% renewable energy',
  '95% waste diversion from landfills achieved',
  'Water recycling systems recover 90% of water used',
  'Sustainability drives both environmental and business benefits'
]
WHERE slug = 'sustainability-manufacturing';

-- Optional: Remove author column if you want to clean up the schema
-- Uncomment the line below if you want to remove the author column entirely
-- ALTER TABLE solar_blogs DROP COLUMN IF EXISTS author;
