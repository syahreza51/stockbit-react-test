const words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

function isAnagram(str1, str2) {
  // Jika panjang tidak sama, pasti bukan anagram
  if (str1.length !== str2.length) return false;

  // Membuat objek penghitung karakter manual
  let charCount = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

function groupAnagrams(arr) {
  let result = [];
  let visited = []; // Untuk menandai kata yang sudah masuk ke dalam grup

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue; // Skip jika kata ini sudah diproses

    let currentGroup = [arr[i]];
    visited[i] = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (!visited[j] && isAnagram(arr[i], arr[j])) {
        currentGroup[currentGroup.length] = arr[j]; // Mengganti push
        visited[j] = true;
      }
    }

    result[result.length] = currentGroup; // Mengganti push
  }

  return result;
}

console.log(groupAnagrams(words));
