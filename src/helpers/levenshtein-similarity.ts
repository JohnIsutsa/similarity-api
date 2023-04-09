function levenshteinDistance(str1: string, str2: string): number {
    const m = str1.length;
    const n = str2.length;
    const dp: number[][] = [];
    for (let i = 0; i <= m; i++) {
      dp.push([]);
      for (let j = 0; j <= n; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
          if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
            dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
          }
        }
      }
    }
    return dp[m][n];
  }
  
export function similarityScore(str1: string, str2: string): number {
    const distance = levenshteinDistance(str1, str2);
    const maxLength = Math.max(str1.length, str2.length);
    return 1 - distance / maxLength;
  }
  