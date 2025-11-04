-- Clear existing gallery albums
DELETE FROM solar_gallery;

-- Create social media posts table
CREATE TABLE IF NOT EXISTS social_media_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform VARCHAR(50) NOT NULL, -- 'linkedin', 'twitter', 'facebook', 'instagram', 'all'
  post_type VARCHAR(50) NOT NULL, -- 'image', 'video', 'article', 'announcement'
  title TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  post_url TEXT, -- Link to original post
  published_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_social_posts_published ON social_media_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_social_posts_platform ON social_media_posts(platform);

-- Add some example posts (you can delete these and add your real posts)
INSERT INTO social_media_posts (platform, post_type, title, content, image_url, post_url, published_at) VALUES
(
  'all',
  'announcement',
  'Shweta Solar Launches 1.2 GW TOPCON Manufacturing Facility',
  'We are thrilled to announce the launch of our state-of-the-art 1.2 GW TOPCON solar module manufacturing facility in NCR. This milestone marks a significant step in India''s renewable energy journey.',
  '/placeholder.svg?height=600&width=800',
  'https://linkedin.com/company/shweta-solar',
  '2025-01-15 10:00:00'
),
(
  'all',
  'article',
  'Understanding GST Changes in Solar Industry',
  'Recent GST cuts are set to transform the solar industry landscape. Learn how these changes will impact solar adoption and make renewable energy more accessible across India.',
  '/placeholder.svg?height=600&width=800',
  'https://linkedin.com/company/shweta-solar',
  '2025-01-10 14:30:00'
);
