import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatRate = (rate: string) => {
  const parsedRate = parseFloat(rate);
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 6,
    maximumFractionDigits: 6,
  }).format(parsedRate);
};
