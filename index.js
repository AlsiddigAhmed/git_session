function sayHi(name) {
  return `hi ${name}`
}

function test() {
  const testSayHi = sayHi("elsiddig")

  if (typeof testSayHi === "string") {
    console.log("passed")
  } else {
    console.log("failed")
  }
}
