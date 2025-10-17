const rssParser = require('../utils/rssParser');

exports.getFeed = async (req, res, next) => {
  try {
    const feedUrl = process.env.RSS_FEED_URL;
    const feed = await rssParser(feedUrl);
    res.json(feed);
  } catch (error) {
    next(error);
  }
};
