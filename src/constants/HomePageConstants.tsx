
enum Step1 {
  STEP = 'Step 1',
  TITLE = 'Browse café’s around you',
  ICON = '/coffeeShop.jpg'
}

enum Step2 {
  STEP = 'Step 2',
  TITLE = 'Select your order and pay ahead',
  ICON = '/payAhead.jpg'
}

enum Step3 {
  STEP = 'Step 3',
  TITLE = 'Collect your coffee when it is ready and beat the line',
  ICON = 'payAhead.jpg'
}

export const HowItWorks = [ Step1, Step2, Step3 ];
