// Typography configuration for LUX Healthcare
// Primary font: Plus Jakarta Sans (Headings: 600-700, Button text)
// Secondary font: Inter (Body: 400-500, Captions: 11-12dp, Inputs)

export const fonts = {
  // Primary Font - Plus Jakarta Sans
  headingBold: 'PlusJakartaSans_700Bold',
  headingSemiBold: 'PlusJakartaSans_600SemiBold',
  primaryMedium: 'PlusJakartaSans_500Medium',
  primaryRegular: 'PlusJakartaSans_400Regular',

  // Secondary Font - Inter
  bodyBold: 'Inter_700Bold',
  bodySemiBold: 'Inter_600SemiBold',
  bodyMedium: 'Inter_500Medium',
  bodyRegular: 'Inter_400Regular',

  // Font family names for reference
  primary: 'PlusJakartaSans_600SemiBold',
  secondary: 'Inter_400Regular',
};

export const typography = {
  // Headings (Plus Jakarta Sans, weight 600-700)
  h1: {
    fontFamily: fonts.headingBold,
    fontSize: 28,
  },
  h2: {
    fontFamily: fonts.headingBold,
    fontSize: 24,
  },
  h3: {
    fontFamily: fonts.headingSemiBold,
    fontSize: 20,
  },
  h4: {
    fontFamily: fonts.headingSemiBold,
    fontSize: 18,
  },
  h5: {
    fontFamily: fonts.headingSemiBold,
    fontSize: 16,
  },

  // Body text (Inter, weight 400-500, base size 14-16dp)
  bodyLarge: {
    fontFamily: fonts.bodyMedium,
    fontSize: 16,
  },
  body: {
    fontFamily: fonts.bodyRegular,
    fontSize: 15,
  },
  bodyMedium: {
    fontFamily: fonts.bodyMedium,
    fontSize: 15,
  },
  bodySmall: {
    fontFamily: fonts.bodyRegular,
    fontSize: 14,
  },
  bodySmallMedium: {
    fontFamily: fonts.bodyMedium,
    fontSize: 14,
  },

  // Captions (Inter, minimum caption size 11-12dp)
  caption: {
    fontFamily: fonts.bodyRegular,
    fontSize: 12,
  },
  captionMedium: {
    fontFamily: fonts.bodyMedium,
    fontSize: 12,
  },
  captionSmall: {
    fontFamily: fonts.bodyRegular,
    fontSize: 11,
  },

  // Buttons (Plus Jakarta Sans, weight 600-700)
  button: {
    fontFamily: fonts.headingSemiBold,
    fontSize: 16,
  },
  buttonLarge: {
    fontFamily: fonts.headingBold,
    fontSize: 18,
  },
};

export default typography;

