-- Enable RLS and create policies for all content tables
-- This ensures only the admin user (admin@shwetasolar.in) can modify content
-- while allowing public read access

-- ============================================
-- SOCIAL MEDIA POSTS
-- ============================================

-- Enable RLS on social_media_posts
ALTER TABLE social_media_posts ENABLE ROW LEVEL SECURITY;

-- Public can read all social media posts
CREATE POLICY "Allow public read access to social media posts"
ON social_media_posts
FOR SELECT
TO public
USING (true);

-- Only admin can insert social media posts
CREATE POLICY "Only admin can insert social media posts"
ON social_media_posts
FOR INSERT
TO authenticated
WITH CHECK (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can update social media posts
CREATE POLICY "Only admin can update social media posts"
ON social_media_posts
FOR UPDATE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
)
WITH CHECK (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can delete social media posts
CREATE POLICY "Only admin can delete social media posts"
ON social_media_posts
FOR DELETE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- ============================================
-- SOLAR BLOGS
-- ============================================

-- Only admin can insert blogs
CREATE POLICY "Only admin can insert blogs"
ON solar_blogs
FOR INSERT
TO authenticated
WITH CHECK (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can update blogs
CREATE POLICY "Only admin can update blogs"
ON solar_blogs
FOR UPDATE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
)
WITH CHECK (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can delete blogs
CREATE POLICY "Only admin can delete blogs"
ON solar_blogs
FOR DELETE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- ============================================
-- SOLAR NEWS
-- ============================================

-- Only admin can insert news
CREATE POLICY "Only admin can insert news"
ON solar_news
FOR INSERT
TO authenticated
WITH CHECK (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can update news
CREATE POLICY "Only admin can update news"
ON solar_news
FOR UPDATE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
)
WITH CHECK (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can delete news
CREATE POLICY "Only admin can delete news"
ON solar_news
FOR DELETE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- ============================================
-- SOLAR GALLERY
-- ============================================

-- Only admin can insert gallery albums
CREATE POLICY "Only admin can insert gallery albums"
ON solar_gallery
FOR INSERT
TO authenticated
WITH CHECK (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can update gallery albums
CREATE POLICY "Only admin can update gallery albums"
ON solar_gallery
FOR UPDATE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
)
WITH CHECK (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can delete gallery albums
CREATE POLICY "Only admin can delete gallery albums"
ON solar_gallery
FOR DELETE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- ============================================
-- NIRMAAN INQUIRIES
-- ============================================

-- Enable RLS on nirmaan_inquiries
ALTER TABLE nirmaan_inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can submit inquiries
CREATE POLICY "Anyone can submit nirmaan inquiries"
ON nirmaan_inquiries
FOR INSERT
TO public
WITH CHECK (true);

-- Only admin can view inquiries
CREATE POLICY "Only admin can view nirmaan inquiries"
ON nirmaan_inquiries
FOR SELECT
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can update inquiries
CREATE POLICY "Only admin can update nirmaan inquiries"
ON nirmaan_inquiries
FOR UPDATE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
)
WITH CHECK (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);

-- Only admin can delete inquiries
CREATE POLICY "Only admin can delete nirmaan inquiries"
ON nirmaan_inquiries
FOR DELETE
TO authenticated
USING (
  auth.jwt() ->> 'email' = 'admin@shwetasolar.in'
);
