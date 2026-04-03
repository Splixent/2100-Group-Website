export interface NewsArticle {
  id: number;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    category: 'Product Update',
    title: 'Version 2.0: Now It\'s Impossible to Remove the Case',
    date: 'March 28, 2026',
    excerpt: 'Our engineers have replaced Phillips screws with Torx T2. Removal now requires a tool most people don\'t own and a level of patience most people don\'t have.',
    readTime: '3 min',
  },
  {
    id: 2,
    category: 'Research',
    title: 'Study Shows 94% of Users Stopped Scrolling (After Third Shock)',
    date: 'March 15, 2026',
    excerpt: 'An independent study we funded and reviewed ourselves confirms: ZipIt works. The remaining 6% have developed an immunity we find both impressive and concerning.',
    readTime: '5 min',
  },
  {
    id: 3,
    category: 'Feature',
    title: 'Introducing "Couples Mode": Shock Your Partner\'s Phone Too',
    date: 'February 28, 2026',
    excerpt: 'Because accountability is a team sport. Sync two ZipIt cases via Bluetooth and take turns ruining each other\'s doom-scrolling sessions.',
    readTime: '4 min',
  },
  {
    id: 4,
    category: 'Partnership',
    title: 'ZipIt x Therapy Apps: "We Break the Habit, They Fix the Trauma"',
    date: 'February 10, 2026',
    excerpt: 'We\'ve partnered with BetterHelp to offer a free session for every 100 shocks received. Most users qualify within the first week.',
    readTime: '3 min',
  },
  {
    id: 5,
    category: 'Community',
    title: 'User Sets World Record: 847 Days Without Opening Twitter',
    date: 'January 22, 2026',
    excerpt: 'Local man credits ZipIt for his record-breaking streak. "I don\'t even know what\'s happening on there anymore," he says. "It\'s wonderful."',
    readTime: '2 min',
  },
  {
    id: 6,
    category: 'Legal',
    title: 'FAQ: No, You Cannot Sue Us for "Unexpected Personal Growth"',
    date: 'January 5, 2026',
    excerpt: 'Our legal team addresses the growing number of complaints from users who are "too productive now" and "running out of books to read." We are not liable for your betterment.',
    readTime: '4 min',
  },
];
