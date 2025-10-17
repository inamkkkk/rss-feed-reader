const Parser = require('rss-parser');

const parser = new Parser();

async function parseRssFeed(feedUrl) {
  try {
    const feed = await parser.parseURL(feedUrl);
    return feed.items.map(item => ({
      title: item.title,
      link: item.link,
      description: item.description,
      pubDate: item.pubDate,
      author: item.author
    }));
  } catch (error) {
    console.error('Error parsing RSS feed:', error);
    throw new Error('Failed to parse RSS feed');
  }
}

module.exports = parseRssFeed;
