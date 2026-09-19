import fs from "fs";
import RSS from "rss";

// Code based on https://dev.to/promathieuthiry/creating-an-rss-feed-in-your-nextjs-project-20em

export default async function generateRssFeed(allPosts) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://nameofwebsite"
      : "http://localhost:3000/blog";

  const feedOptions = {
    title: "Swamp Paradise blog posts | RSS Feed",
    description: "Welcome to Swamp Paradise!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/pfp.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.map((post) => {
    console.log(post.date_posted)
    feed.item({
      title: "Untitled Post at: " + post.date_posted,
      description: post.main_content,
      url: `${site_url}`,
    //   url: `${site_url}/posts/${post.slug}`,
      date: post.date_posted,
      enclosure: {url:post.img, }
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
