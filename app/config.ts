// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://frames-gamma.vercel.app/';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0xE90Eee57653633E7558838b98F543079649c9C2F';
