export interface ForumPost {
  id: number;
  username: string;
  avatar: string;
  timestamp: string;
  title: string;
  body: string;
  likes: number;
  replies: number;
  verified: boolean;
}

export const forumPosts: ForumPost[] = [
  {
    id: 1,
    username: 'reformed_scroller',
    avatar: '⚡',
    timestamp: '3 hours ago',
    title: 'Day 7: I haven\'t opened TikTok once',
    body: 'The medium setting was enough. My screen time went from 9 hours to 2. I actually went outside yesterday. The sun is real.',
    likes: 342,
    replies: 47,
    verified: true,
  },
  {
    id: 2,
    username: 'shock_therapy_survivor',
    avatar: '🔧',
    timestamp: '5 hours ago',
    title: 'PSA: Don\'t try to remove the case with a butter knife',
    body: 'Tried it. Broke the knife. Case didn\'t even flinch. Now I have no butter knife AND no TikTok. This product is too powerful.',
    likes: 891,
    replies: 132,
    verified: false,
  },
  {
    id: 3,
    username: 'digital_detox_dan',
    avatar: '🧘',
    timestamp: '1 day ago',
    title: 'Week 3 update: My attention span is back',
    body: 'I finished a whole movie without checking my phone. A WHOLE MOVIE. I cried during the credits. Partly because the movie was good. Partly because the 8V setting hit when I instinctively reached for Twitter.',
    likes: 567,
    replies: 89,
    verified: true,
  },
  {
    id: 4,
    username: 'no_more_reels',
    avatar: '💪',
    timestamp: '1 day ago',
    title: 'My boss thinks I got promoted because of "improved focus"',
    body: 'Nah bro my phone literally shocks me when I try to slack off during meetings. But hey, the raise was nice.',
    likes: 1203,
    replies: 201,
    verified: true,
  },
  {
    id: 5,
    username: 'case_crusader',
    avatar: '🛡️',
    timestamp: '2 days ago',
    title: 'Dropped it off a balcony. It survived. The balcony didn\'t.',
    body: 'Testing the durability claims. The phone is fine. The case is fine. There\'s a crack in the concrete. This thing is built different.',
    likes: 2341,
    replies: 312,
    verified: false,
  },
  {
    id: 6,
    username: 'midnight_warrior',
    avatar: '🌙',
    timestamp: '3 days ago',
    title: 'The 2am urge to check ex\'s stories is GONE',
    body: 'Locked Instagram at midnight setting. First night I reached for it, got the zap, and just... went to sleep. Like a normal person. I forgot that was an option.',
    likes: 789,
    replies: 94,
    verified: true,
  },
  {
    id: 7,
    username: 'tool_time_tom',
    avatar: '🔍',
    timestamp: '4 days ago',
    title: 'Tried to take the case off at 3am. Gave up at screw #6.',
    body: 'The 18-screw system is no joke. By the time I got halfway through, I forgot why I even wanted my phone. Went back to sleep. ZipIt wins again.',
    likes: 456,
    replies: 67,
    verified: false,
  },
  {
    id: 8,
    username: 'voltag3_queen',
    avatar: '👑',
    timestamp: '5 days ago',
    title: 'Ranked all shock levels from "gentle nudge" to "rethink your life"',
    body: 'Level 1-3: cute tingle. Level 4-6: OK you have my attention. Level 7-9: I\'m putting the phone down. Level 10-12: I have achieved enlightenment and fear.',
    likes: 3102,
    replies: 445,
    verified: true,
  },
];
