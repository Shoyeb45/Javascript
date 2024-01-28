/* Create a H2 heading element with text - “Hello JavaScript” . Append “from Shoyeb Ansari” to this text using JS. */

let heading = document.querySelector("h2")

let toAddString = " from Shoyeb Ansari"
heading.innerText = heading.innerText.concat(toAddString)