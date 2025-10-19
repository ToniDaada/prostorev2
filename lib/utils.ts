/* eslint-disable @typescript-eslint/no-explicit-any*/

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma object into a regular JS obkect
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

//Format number with decimal places
export function formatNumberwithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

//Format erros

export async function formatError(error: any) {
  if (error.name === "ZodError") {
    // Handle zod error

    const fieldErrors = error.issues.map(
      (issue: { message: any }) => issue.message
    );
    return fieldErrors.join("\n");
  } else if (
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    //Handle Prisma Error
    const field = error.meta?.target ? error.meta.target[0] : "Field";
    return `${field.charAt().toUpperCase()}${field.slice(1)} already exists`;
  } else
    return typeof error.message === "string"
      ? error.message
      : JSON.stringify(error.message);
}

//Round number to two decimal places
export function round2(value: number | string) {
  if (typeof value === "number") {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  } else if (typeof value === "string") {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
  } else {
    throw new Error("Value is not a number or string");
  }
}

const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 2,
});

export function formatCurrency(amount: number | string | null) {
  if (typeof amount === "number") {
    return CURRENCY_FORMATTER.format(amount);
  } else if (typeof amount === "string") {
    return CURRENCY_FORMATTER.format(Number(amount));
  } else {
    return NaN;
  }
}

//Shorten UUID
export function formatId(id: string) {
  return `..${id.substring(id.length - 6)}`;
}

// Format date and times
export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    month: "short", // abbreviated month name(e.g Oct)
    year: "numeric", // number year name (e.g 2025)
    day: "numeric", // numberic day of the month (e.g 25)
    hour: "numeric", //numeric hour (e.g '8)
    minute: "numeric", //numeric minute (e.g '30)
    hour12: true, //user 12-hour clock(true) or 24-horu clock(fasle)
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbrevaited weekday name (e.g., 'Mon')
    month: "short", // abbrevaited month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric dAT OF THE MINTH (e.g., '2025')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US",
    dateOptions
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    "en-US",
    timeOptions
  );
  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

// const testDate = new Date("2025-10-19T08:30:00Z");

// const formatted = formatDateTime(testDate);

// console.log(`FULL DATE TIME : ${formatted.dateTime}`);
// console.log(`FULL DATE ONLY : ${formatted.dateOnly}`);
// console.log(`FULL  TIME ONLY : ${formatted.timeOnly}`);
