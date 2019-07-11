export const APP_NAME = 'Slack Clone';
console.log(process.env);
console.log(process.env.REACT_APP_NODE_PORT);
export const SERVER = `http://localhost:${process.env.REACT_APP_NODE_PORT}`;
export const GROUP_MESSAGE_DURATION = 5; // Group messages sent between 5 mins of time span

export const EMOJI_CODES = [
  '<3',
  '</3',
  '8)',
  'D:',
  ':|',
  ':o)',
  '=)',
  '=-)',
  ':D',
  ':-D',
  ';)',
  ';-)',
  ':>',
  ':->',
  ':o',
  ':-o',
  '>:(',
  '>:-(',
  ':)',
  '(:',
  ':-)',
  ':(',
  '):',
  ':-(',
  ':/',
  ':-/',
  ':"',
  ':P',
  ':-P',
  ':-b',
  ';p',
  ';-p',
  ';b',
  ';-b',
  ':*',
  ':-*',
];
