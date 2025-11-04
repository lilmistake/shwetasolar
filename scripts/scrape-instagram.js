const fs = require("fs")
const path = require("path")

// Instagram username to scrape
const INSTAGRAM_USERNAME = "shwetasolar"
const DATA_FILE = path.join(process.cwd(), "data", "social-posts.json")

/**
 * Scrapes Instagram posts from the Shweta Solar account
 * Falls back to existing data if scraping fails
 */
async function scrapeInstagramPosts() {
  console.log("[Instagram Scraper] Starting Instagram scrape for @" + INSTAGRAM_USERNAME)

  try {
    // Read existing data as backup
    let existingData = { posts: [], lastUpdated: null }
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, "utf-8")
      existingData = JSON.parse(fileContent)
      console.log("[Instagram Scraper] Loaded existing data with", existingData.posts.length, "posts")
    }

    // Attempt to fetch Instagram data
    // Note: Instagram's public API is limited. This uses a simple approach.
    // For production, consider using Instagram Basic Display API or a third-party service
    const url = `https://www.instagram.com/${INSTAGRAM_USERNAME}/?__a=1&__d=dis`

    console.log("[Instagram Scraper] Fetching data from Instagram...")
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`Instagram API returned status ${response.status}`)
    }

    const data = await response.json()

    // Extract posts from Instagram response
    // Note: Instagram's response structure may change
    const posts = []
    const edges = data?.graphql?.user?.edge_owner_to_timeline_media?.edges || []

    for (let i = 0; i < Math.min(edges.length, 12); i++) {
      const node = edges[i].node
      posts.push({
        id: node.id,
        platform: "instagram",
        image: node.display_url,
        caption: node.edge_media_to_caption?.edges[0]?.node?.text || "",
        date: new Date(node.taken_at_timestamp * 1000).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        postUrl: `https://www.instagram.com/p/${node.shortcode}`,
      })
    }

    if (posts.length === 0) {
      throw new Error("No posts found in Instagram response")
    }

    // Save scraped data
    const newData = {
      posts,
      lastUpdated: new Date().toISOString(),
    }

    // Ensure data directory exists
    const dataDir = path.dirname(DATA_FILE)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2))
    console.log("[Instagram Scraper] ✓ Successfully scraped", posts.length, "posts")
    console.log("[Instagram Scraper] ✓ Data saved to", DATA_FILE)

    return true
  } catch (error) {
    console.error("[Instagram Scraper] ✗ Error scraping Instagram:", error.message)
    console.log("[Instagram Scraper] ℹ Keeping existing data file unchanged")

    // Don't modify the file if scraping fails
    // The existing data will be used
    return false
  }
}

// Run the scraper
scrapeInstagramPosts()
  .then((success) => {
    if (success) {
      console.log("[Instagram Scraper] ✓ Scraping completed successfully")
      process.exit(0)
    } else {
      console.log("[Instagram Scraper] ⚠ Scraping failed, using existing data")
      process.exit(0) // Exit with success to not break the build
    }
  })
  .catch((error) => {
    console.error("[Instagram Scraper] ✗ Fatal error:", error)
    process.exit(0) // Exit with success to not break the build
  })
