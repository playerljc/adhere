export type NumberFormatterLocale = {
  thousandsSep: string;
  decimalSep: string;
};

export type NumberFormatterOptions = {
  /**
   * 是否以科学计数法显示超大数。
   * 未传时取全局默认值（见 setNumberFormatterUseScientificNotation）。
   * @default false
   */
  useScientificNotation?: boolean;
};

/** 全局默认：是否以科学计数法显示超大数 */
let numberFormatterUseScientificNotation = false;

export function setNumberFormatterUseScientificNotation(
  useScientificNotation: boolean,
): void {
  numberFormatterUseScientificNotation = useScientificNotation;
}

export function getNumberFormatterUseScientificNotation(): boolean {
  return numberFormatterUseScientificNotation;
}

function isScientificNotationString(str: string): boolean {
  return /e/i.test(str);
}

function expandScientificNotation(str: string): string {
  const match = String(str)
    .trim()
    .match(/^([+-]?)(\d+(?:\.\d+)?)[eE]([+-]?)(\d+)$/);

  if (!match) {
    return str;
  }

  const sign = match[1] || '';
  const numPart = match[2];
  const exp = (match[3] === '-' ? -1 : 1) * parseInt(match[4], 10);
  const [intPart, fracPart = ''] = numPart.split('.');
  const digits = intPart + fracPart;
  const decimalPos = intPart.length + exp;

  if (decimalPos <= 0) {
    return `${sign}0.${'0'.repeat(-decimalPos)}${digits}`;
  }

  if (decimalPos >= digits.length) {
    return `${sign}${digits}${'0'.repeat(decimalPos - digits.length)}`;
  }

  return `${sign}${digits.slice(0, decimalPos)}.${digits.slice(decimalPos)}`;
}

function addOneToIntegerString(intStr: string): string {
  let carry = 1;
  const digits = intStr.split('');

  for (let i = digits.length - 1; i >= 0 && carry; i--) {
    const sum = parseInt(digits[i], 10) + carry;
    digits[i] = String(sum % 10);
    carry = sum >= 10 ? 1 : 0;
  }

  if (carry) {
    digits.unshift('1');
  }

  return digits.join('');
}

function toFixedDecimalString(value: string, precision: number): string {
  const normalizedPrecision = precision < 0 ? 0 : precision;
  const negative = value.startsWith('-');
  const unsigned = negative ? value.slice(1) : value;
  let [intPart = '0', fracPart = ''] = unsigned.split('.');

  if (normalizedPrecision === 0) {
    if (fracPart && parseInt(fracPart[0] || '0', 10) >= 5) {
      intPart = addOneToIntegerString(intPart);
    }

    return (negative ? '-' : '') + intPart;
  }

  if (fracPart.length < normalizedPrecision) {
    return (
      (negative ? '-' : '') +
      intPart +
      '.' +
      fracPart.padEnd(normalizedPrecision, '0')
    );
  }

  if (fracPart.length === normalizedPrecision) {
    return (negative ? '-' : '') + intPart + '.' + fracPart;
  }

  const roundDigit = parseInt(fracPart[normalizedPrecision] || '0', 10);
  let roundedFrac = fracPart.slice(0, normalizedPrecision);

  if (roundDigit >= 5) {
    const fracDigits = roundedFrac.split('');
    let carry = 1;

    for (let i = fracDigits.length - 1; i >= 0 && carry; i--) {
      const sum = parseInt(fracDigits[i], 10) + carry;
      fracDigits[i] = String(sum % 10);
      carry = sum >= 10 ? 1 : 0;
    }

    if (carry) {
      intPart = addOneToIntegerString(intPart);
      roundedFrac = '0'.repeat(normalizedPrecision);
    } else {
      roundedFrac = fracDigits.join('');
    }
  }

  return (negative ? '-' : '') + intPart + '.' + roundedFrac;
}

function normalizeToDecimalString(value: string | number): string | null {
  if (!value && value !== 0) {
    return null;
  }

  let str = String(value).trim();

  if (!str) {
    return null;
  }

  if (isScientificNotationString(str)) {
    str = expandScientificNotation(str);
  }

  if (!/^-?\d*\.?\d+$/.test(str)) {
    const num = Number(value);

    if (isNaN(num) || !isFinite(num)) {
      return null;
    }

    str = String(num);

    if (isScientificNotationString(str)) {
      str = expandScientificNotation(str);
    }

    if (!/^-?\d*\.?\d+$/.test(str)) {
      return null;
    }
  }

  return str;
}

function formatLocaleNumberLegacy(
  value: string | number,
  precision: number | undefined,
  locale: NumberFormatterLocale,
): string {
  const num = Number(value);

  if (isNaN(num) || !isFinite(num)) {
    return '';
  }

  const str =
    precision === undefined ? num.toString() : num.toFixed(precision);
  const [integerPart, decimalPart = ''] = str.split('.');
  const formattedInteger = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    locale.thousandsSep,
  );

  if (!decimalPart) {
    return formattedInteger;
  }

  return `${formattedInteger}${locale.decimalSep}${decimalPart}`;
}

function formatLocaleNumberPlain(
  value: string | number,
  precision: number | undefined,
  locale: NumberFormatterLocale,
): string {
  const normalized = normalizeToDecimalString(value);

  if (!normalized) {
    return '';
  }

  const str =
    precision === undefined
      ? normalized
      : toFixedDecimalString(normalized, precision);
  const negative = str.startsWith('-');
  const unsigned = negative ? str.slice(1) : str;
  const dotIndex = unsigned.indexOf('.');
  const intPart = dotIndex === -1 ? unsigned : unsigned.slice(0, dotIndex);
  const fracPart = dotIndex === -1 ? '' : unsigned.slice(dotIndex + 1);
  const formattedInteger = intPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    locale.thousandsSep,
  );

  if (!fracPart) {
    return negative ? `-${formattedInteger}` : formattedInteger;
  }

  const result = `${formattedInteger}${locale.decimalSep}${fracPart}`;

  return negative ? `-${result}` : result;
}

export function formatLocaleNumber(
  value: string | number,
  precision: number | undefined,
  locale: NumberFormatterLocale,
  options?: NumberFormatterOptions,
): string {
  if (!value && value !== 0) {
    return '';
  }

  const useScientificNotation =
    options?.useScientificNotation ?? numberFormatterUseScientificNotation;

  if (useScientificNotation) {
    return formatLocaleNumberLegacy(value, precision, locale);
  }

  return formatLocaleNumberPlain(value, precision, locale);
}
