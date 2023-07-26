/*
 * @lc app=leetcode id=93 lang=typescript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
function isValidIpPart(s: string): boolean {
  return (
    String(Number(s)).length === s.length && Number(s) >= 0 && Number(s) < 256
  );
}

function isTooLong(str: string, numbersLeft: number) {
  return numbersLeft * 3 < str.length;
}

function restoreIpAddress(str: string, numbersList: string[] = []): string[] {
  if (isTooLong(str, 4 - numbersList.length)) {
    return [];
  }

  for (let i = 0; i < str.length; i++) {}

  return numbersList;
}

function getAllValidNextIpParts(str: string): string[] {
  if (isTooLong(str, 1)) {
    return [];
  }

  const validIpParts: string[] = [];

  for (let i = 0; i < str.length; i++) {
    let offset = 0;

    for (let ipPart = str.substring(i, i + offset); isValidIpPart(ipPart);) {
      validIpParts.push(ipPart);
      ipPart = str.substring(i, i + (++offset));
    }
  }

  return validIpParts;
}

function restoreIpAddresses(str: string, numbersLeft = 4): string[] {
  const validIpNumbers: Array<[string, string, string, string]> = [];

  if (isTooLong(str, numbersLeft)) {
    return [];
  }

  const validFirstIpParts = getAllValidNextIpParts(str);
  validFirstIpParts.forEach(part => {
    for (let i = part.length; i < str.length; i++) {

    }
  });

  for (let i = 0; i < str.length; i++) {
    const validFirstIpParts = getAllValidNextIpParts(str.substring(i));
  }


  return validIpNumbers.map(ipNumbers => ipNumbers.join('.'));
}
// @lc code=end

console.log(restoreIpAddresses('25525511135'));
