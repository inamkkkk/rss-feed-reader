# RSS Feed Reader API

A simple Node.js API that reads from an RSS feed and exposes the data as a JSON API.

## Features

*   Fetches and parses RSS feeds.
*   Exposes feed items as a JSON API.
*   Error handling and logging.

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    Create a `.env` file in the root directory and add the following variables:

    
    PORT=3000
    RSS_FEED_URL=https://www.example.com/rss
    

    Replace `https://www.example.com/rss` with the actual RSS feed URL.

## Usage

1.  Start the server:

    
    npm start
    

2.  Access the API:

    Open your browser or use a tool like `curl` to access the API endpoint:

    
    http://localhost:3000/api/feed
    

## API Endpoints

*   `/api/feed`:  Returns a JSON array of feed items.

## Project Structure


├── server.js        # Main entry point
├── routes
│   └── feed.js      # Feed routes
├── controllers
│   └── feedController.js # Feed controller
├── utils
│   └── rssParser.js  # RSS parsing utility
├── middlewares
│   └── errorHandler.js # Error handling middleware
├── .env             # Environment variables
└── README.md        # This file

