// Timestamps are a great way to calculate the time between two dates

const now = new Date()
const before = new Date("1 January 2022 00:00")
// console.log (now.getTime())
// console.log(before.getTime())

const diff = now.getTime() - before.getTime()

const minutes = Math.round(diff / 1000 / 60)
const hours = Math.round(minutes / 60)
const days = Math.round(hours / 24)
console.log(`It has been ${days} days since ${before}`)

// Converting timestamps into dates

const timestamp = 1675938474990
console.log(new Date(timestamp))