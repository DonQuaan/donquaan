export default async function handler(req, res) {
  try {
    const pageId = 'NguyenTuOanhLifecoach';
    const accessToken = process.env.FB_ACCESS_TOKEN;

    if (!accessToken) {
      return res.status(500).json({ error: 'Missing FB_ACCESS_TOKEN environment variable' });
    }

    const response = await fetch(`https://graph.facebook.com/v19.0/${pageId}?fields=followers_count&access_token=${accessToken}`);
    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    // Cache cho Vercel Edge Network trong 1 giờ để tiết kiệm quota API
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json({ followers: data.followers_count });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch Facebook data' });
  }
}
