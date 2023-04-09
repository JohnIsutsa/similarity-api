import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    //twMerge a Tailwind CSS plugin that allows you to merge classes based on certain criteria. Specifically, it's used to combine classes that have the same responsive breakpoints, resulting in a smaller and more optimized CSS file.
    return twMerge(clsx(inputs))
}