let text_in = prompt("Text: ");

let text_arr = text_in.split(":");
let text = "";
for (let i = 1; i < text_arr.length; i++) {
    text += text_arr[i];
    if (i != text_arr.length - 1) {
        text += ":";
    }
}

console.log(text);
