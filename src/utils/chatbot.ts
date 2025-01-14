import { CDPs } from '../types';

const IRRELEVANT_RESPONSES = [
  "I can only help with questions related to Customer Data Platforms (CDPs). Please ask me about Segment, mParticle, Lytics, or Zeotap.",
  "That's outside my expertise. I'm focused on helping with CDP-related questions. How can I help you with Segment, mParticle, Lytics, or Zeotap?",
];

const isCDPRelated = (question: string): boolean => {
  const cdpTerms = [
    ...CDPs.map(cdp => cdp.name.toLowerCase()),
    'cdp',
    'customer data',
    'data platform',
    'integration',
    'segment',
    'audience',
    'profile',
    'source',
    'destination'
  ];
  
  return cdpTerms.some(term => question.toLowerCase().includes(term));
};

const getBasicResponse = (question: string): string => {
  // This is a simple implementation. In a real application, you would:
  // 1. Use a proper NLP library
  // 2. Implement document indexing and search
  // 3. Use vector embeddings for semantic search
  // 4. Possibly integrate with a language model API
  
  if (question.toLowerCase().includes('segment')) {
    if (question.toLowerCase().includes('source')) {
      return "To set up a new source in Segment:\n1. Go to Connections > Sources\n2. Click 'Add Source'\n3. Choose your source type\n4. Follow the configuration steps\n5. Save and enable the source\n\nFor detailed instructions, visit: " + CDPs[0].docsUrl;
    }
  } else if (question.toLowerCase().includes('mparticle')) {
    if (question.toLowerCase().includes('profile')) {
      return "To create a user profile in mParticle:\n1. Navigate to the User Profile section\n2. Click 'Create New Profile'\n3. Define user attributes\n4. Set identity mappings\n5. Save the profile\n\nFor detailed instructions, visit: " + CDPs[1].docsUrl;
    }
  }
  
  return "I understand you're asking about " + question + ". For the most accurate and up-to-date information, please check the official documentation:\n\n" +
    CDPs.map(cdp => `${cdp.name}: ${cdp.docsUrl}`).join('\n');
};

export const generateResponse = (question: string): string => {
  if (!isCDPRelated(question)) {
    return IRRELEVANT_RESPONSES[Math.floor(Math.random() * IRRELEVANT_RESPONSES.length)];
  }
  
  return getBasicResponse(question);
};