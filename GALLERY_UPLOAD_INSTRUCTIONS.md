# How to Add Images to the Gallery

## Overview
The gallery is organized by folders/events. Each gallery entry can contain multiple images from the same event or category.

## Database Structure
The `solar_gallery` table has the following structure:
- **id**: Unique identifier (auto-generated)
- **folder**: Category/event name (e.g., "Factory Opening", "Team Events", "Installations")
- **title**: Display title for the gallery entry
- **description**: Brief description of the event/category
- **event_date**: Date of the event
- **images**: JSON array of image objects with `url`, `alt`, and `caption`
- **created_at**: Timestamp (auto-generated)
- **updated_at**: Timestamp (auto-generated)

## Steps to Add Gallery Images

### Step 1: Organize Your Images
Group your images by event or category. For example:
- Factory Opening Ceremony
- Team Building Events
- Solar Installation Projects
- Awards and Recognition
- Community Outreach

### Step 2: Upload Images
You can share your images with me in two ways:

**Option A: Share image files directly**
- Upload images in the chat
- I'll add them to the codebase and database

**Option B: Provide image URLs**
- If images are already hosted online, share the URLs
- I'll add them to the database

### Step 3: Provide Details
For each folder/event, provide:
1. **Folder name**: e.g., "factory-opening-2025"
2. **Title**: e.g., "Factory Opening Ceremony"
3. **Description**: e.g., "Grand opening of our 1.2 GW manufacturing facility in NCR"
4. **Event date**: e.g., "January 15, 2025"
5. **Image captions**: Brief description for each image

### Step 4: I'll Create the SQL Script
Once you provide the images and details, I'll create a SQL script like this:

\`\`\`sql
INSERT INTO solar_gallery (
  id,
  folder,
  title,
  description,
  event_date,
  images,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'factory-opening-2025',
  'Factory Opening Ceremony',
  'Grand opening of our 1.2 GW manufacturing facility in NCR',
  '2025-01-15',
  '[
    {"url": "/images/gallery/factory-opening/image1.jpg", "alt": "Factory exterior", "caption": "State-of-the-art manufacturing facility"},
    {"url": "/images/gallery/factory-opening/image2.jpg", "alt": "Ribbon cutting", "caption": "Directors inaugurating the facility"}
  ]'::jsonb,
  NOW(),
  NOW()
);
\`\`\`

## Example Format

When sharing images, use this format:

\`\`\`
Folder: factory-opening-2025
Title: Factory Opening Ceremony
Description: Grand opening of our 1.2 GW manufacturing facility in NCR
Event Date: January 15, 2025

Images:
1. [Image file or URL] - Caption: "State-of-the-art manufacturing facility"
2. [Image file or URL] - Caption: "Directors inaugurating the facility"
3. [Image file or URL] - Caption: "Automated production line"
\`\`\`

## Ready to Add Images?

Share your images and details in the format above, and I'll handle the rest!
