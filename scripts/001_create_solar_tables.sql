-- Create solar_blogs table for blog posts
CREATE TABLE IF NOT EXISTS public.solar_blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  read_time INTEGER NOT NULL DEFAULT 5,
  published_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create solar_gallery table for gallery items
CREATE TABLE IF NOT EXISTS public.solar_gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  folder TEXT NOT NULL,
  images JSONB NOT NULL DEFAULT '[]'::jsonb,
  event_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create solar_news table for news announcements
CREATE TABLE IF NOT EXISTS public.solar_news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  published_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS) for all tables
ALTER TABLE public.solar_blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.solar_gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.solar_news ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (no authentication required)
-- Blogs policies
CREATE POLICY "Allow public read access to blogs"
  ON public.solar_blogs FOR SELECT
  USING (true);

-- Gallery policies
CREATE POLICY "Allow public read access to gallery"
  ON public.solar_gallery FOR SELECT
  USING (true);

-- News policies
CREATE POLICY "Allow public read access to news"
  ON public.solar_news FOR SELECT
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_solar_blogs_slug ON public.solar_blogs(slug);
CREATE INDEX IF NOT EXISTS idx_solar_blogs_category ON public.solar_blogs(category);
CREATE INDEX IF NOT EXISTS idx_solar_blogs_published_date ON public.solar_blogs(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_solar_gallery_folder ON public.solar_gallery(folder);
CREATE INDEX IF NOT EXISTS idx_solar_news_published_date ON public.solar_news(published_date DESC);
