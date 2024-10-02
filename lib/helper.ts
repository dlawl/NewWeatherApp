// lib/helper.ts
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function mergeNames(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
