const mostIconicQuotes = ["Eyy Go yaa", "hi CHAF", "ha ha your zipper was open", "let's smoke up", "pleazz", "so nice yaa", "watch modern family ya", "go listen to Take me to Church ya"]

export function generateRandomQuote() {
    let RandomNum = Math.floor(Math.random() * mostIconicQuotes.length)
    return mostIconicQuotes[RandomNum]
}

