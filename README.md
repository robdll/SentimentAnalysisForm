# Sentiment Analysis Tool

A simple web application for analyzing the sentiment (positive or negative) of user-input text using a pre-trained NLP model from Hugging Face.

## Features

- **Real-time Sentiment Analysis**: Classifies text as positive or negative.
- **Confidence Score**: Displays the model's confidence in its prediction.

## Demo

[Link to live demo](https://your-vercel-deployment-url.com)

## Getting Started

### Prerequisites

- Node.js (use the latest version for best compatibility)
- [Hugging Face API Key](https://huggingface.co/) for access to the pre-trained model

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/robdll/sentiment-analysis-tool.git
```

2. **Move to the project directory**:

```bash
cd sentiment-analysis-tool
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

- Create a .env.local file in the root directory.
- Add your Hugging Face API key:

```plaintext
  HUGGING_FACE_API_KEY=your_hugging_face_api_key
```

### Running the Project

Start the development server:
```bash
  npm run dev
```

Visit http://localhost:3000 in your browser to access the app.

### Deployment
This app can be deployed on [Vercel](https://vercel.com/):

- Push your code to a GitHub repository.
- Import the repository to Vercel.
- Add the HUGGING_FACE_API_KEY environment variable in Vercel's settings.

### Usage
1. Enter text into the input box.
2. Click "Analyze Sentiment" to view the sentiment and confidence score.

### Technologies Used
- Next.js: React framework for server-side rendering and API routes.
- Hugging Face Transformers: Pre-trained NLP models for sentiment analysis.
- Vercel: Deployment and hosting.

### License
This project is licensed under the MIT License. See the LICENSE file for details.