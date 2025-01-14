export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface CDP {
  name: string;
  docsUrl: string;
}

export const CDPs: CDP[] = [
  { name: 'Segment', docsUrl: 'https://segment.com/docs/?ref=nav' },
  { name: 'mParticle', docsUrl: 'https://docs.mparticle.com/' },
  { name: 'Lytics', docsUrl: 'https://docs.lytics.com/' },
  { name: 'Zeotap', docsUrl: 'https://docs.zeotap.com/home/en-us/' }
];