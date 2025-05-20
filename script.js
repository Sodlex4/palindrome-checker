const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

checkBtn.addEventListener("click", () => {
  const input = textInput.value.trim();

  if (input === "") {
    alert("Please input a value");
    return;
  }

  const palindromeCheck = isPalindrome(input);
  result.textContent = `${input} is ${palindromeCheck ? "" : "not "}a palindrome.`;
});
