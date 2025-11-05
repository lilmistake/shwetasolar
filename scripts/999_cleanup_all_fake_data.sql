-- Emergency cleanup script to remove all fake/placeholder data
-- This will delete ALL data from the following tables:
-- - solar_blogs (all blog posts)
-- - solar_news (all news articles)
-- - solar_gallery (all event albums)
-- - social_media_posts (all social media posts)

-- Delete all blog posts
DELETE FROM solar_blogs;

-- Delete all news articles
DELETE FROM solar_news;

-- Delete all gallery albums
DELETE FROM solar_gallery;

-- Delete all social media posts
DELETE FROM social_media_posts;

-- Verify deletions
SELECT 'Blogs remaining: ' || COUNT(*) FROM solar_blogs;
SELECT 'News remaining: ' || COUNT(*) FROM solar_news;
SELECT 'Gallery albums remaining: ' || COUNT(*) FROM solar_gallery;
SELECT 'Social media posts remaining: ' || COUNT(*) FROM social_media_posts;
