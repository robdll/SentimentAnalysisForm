import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    const apiKey = process.env.HUGGING_FACE_API_KEY;
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english',
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const label = response.data[0].label;
      res.status(200).json({ sentiment: label });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch sentiment' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
