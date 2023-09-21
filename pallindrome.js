let c = 'malayalam'
let t = c.length

let x = ''

for (i = t - 1; i >= 0; i--) {
    s = c[i]
    x += c[i]
}

if (x == c) {
    console.log('yes')
} else {
    console.log("no")
}