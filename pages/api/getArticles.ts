// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next/types";

import Parser from "rss-parser";

const xmlUrl = "https://www.chand1012.dev/feed.xml";

const getArticles = async (req: NextApiRequest, res: NextApiResponse) => {
  const { max } = req.query;

  const maxNumber = max ? parseInt(max as string) : 20;

  const parser = new Parser();

  let feed = await parser.parseURL(xmlUrl);

  // only get the first 10 items of feed.items
  feed.items = feed.items.slice(0, maxNumber);

  return res.json(feed);
};

export default getArticles;
