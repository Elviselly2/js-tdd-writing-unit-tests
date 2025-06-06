// Your code here
export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      points += /[aeiou]/i.test(char) ? 1 : 2; // 1 point for vowels, 2 points for everything else
    }
    return points;
  }
  