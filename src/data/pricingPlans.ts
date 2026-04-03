export interface PricingPlan {
  name: string;
  tagline: string;
  priceUSD: string;
  priceCAD: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Gentle Nudge',
    tagline: 'For the mildly addicted',
    priceUSD: '$49.99',
    priceCAD: '$68.99 CAD',
    features: [
      'ZipIt case (3V max)',
      '4 Phillips-head screws',
      'Basic companion app',
      'Lock up to 3 apps',
      'Wrist strap (black)',
    ],
    highlighted: false,
    cta: 'Start gentle',
  },
  {
    name: 'Full Commitment',
    tagline: 'Most popular. Most effective.',
    priceUSD: '$79.99',
    priceCAD: '$109.99 CAD',
    features: [
      'ZipIt case (12V max)',
      '18 Phillips-head screws',
      'Pro companion app',
      'Unlimited app locks',
      'Wrist strap (3 colors)',
      'Couples Mode',
      'Shock scheduling',
    ],
    highlighted: true,
    cta: 'Commit fully',
  },
  {
    name: 'No Mercy',
    tagline: 'For the truly desperate',
    priceUSD: '$129.99',
    priceCAD: '$178.99 CAD',
    features: [
      'Everything in Full Commitment',
      'ZipIt case (15V max)',
      'Reinforced titanium screws',
      'Tamper-detection alerts',
      'Emergency override (requires 2 people)',
      'Custom shock patterns',
      'Priority shame support',
    ],
    highlighted: false,
    cta: 'Accept your fate',
  },
];
