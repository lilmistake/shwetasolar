# Instagram Scraper for Social Media Posts

This project automatically scrapes Instagram posts from @shwetasolar during the build process and displays them in the gallery.

## How It Works

1. **Build-Time Scraping**: Before each production build, the `scripts/scrape-instagram.js` script runs automatically
2. **Local Storage**: Scraped posts are stored in `data/social-posts.json`
3. **Error Handling**: If scraping fails, the existing data file remains unchanged
4. **Gallery Display**: The gallery page reads from the local JSON file instead of the database

## Files

- `scripts/scrape-instagram.js` - Instagram scraping script
- `data/social-posts.json` - Local storage for posts (committed to repo)
- `lib/social-posts.ts` - Utility functions to read local data
- `app/newsroom/gallery/page.tsx` - Gallery page (updated to use local data)

## Manual Updates

If automatic scraping fails or you want to manually update posts:

1. Edit `data/social-posts.json` directly
2. Follow the existing JSON structure:
\`\`\`json
{
  "posts": [
    {
      "id": "unique-id",
      "platform": "instagram",
      "image": "image-url",
      "caption": "post caption",
      "date": "Mon DD, YYYY",
      "postUrl": "https://www.instagram.com/p/POST_ID"
    }
  ],
  "lastUpdated": "ISO-8601-timestamp"
}
\`\`\`

## Instagram API Limitations

Instagram's public API has limitations and anti-scraping measures. The current implementation:
- Uses a simple HTTP request approach
- Falls back gracefully if scraping fails
- Preserves existing data on errors

For more reliable scraping, consider:
- Instagram Basic Display API (requires app setup)
- Third-party Instagram API services
- Manual updates to the JSON file

## Build Process

The scraping happens automatically via the `prebuild` script in `package.json`:
\`\`\`json
"prebuild": "node scripts/scrape-instagram.js"
\`\`\`

This runs before `npm run build` on every deployment.
