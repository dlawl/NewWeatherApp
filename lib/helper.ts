// lib/helper.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function mergeNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
