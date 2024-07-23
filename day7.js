const book = {
  title: 'Physics',
  author: 'hashim noor',
  year: 2021,

  getDetail: function () {
    return `${this.title} by ${this.author}`
  },
  getYearDetail: function (newYear) {
    this.year = newYear
  }

}

console.log(book)
console.log(book.title)
console.log(book.author)

console.log(book.getDetail())
book.getYearDetail(2022)
console.log(book.year)

const library = {
  book: {
    name: 'DataBase Systems',
    books: {
      name: 'Operating Systems',
      author: 'frenkin jones',
      year: 2022,
    },
    getDetails: function () {
      return `${this.books.name} and year ${this.books.year}`
    }

  }
}
// console.log(library.book.books.name)

console.log(library.book.getDetails())


for (const property in book) {
  console.log(`${property} : ${book[property]}`)
}

const books = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
};

for (const key in books) {
  console.log(key)
  console.log(books[key])
}
console.log(Object.keys(books))
console.log(Object.values(books))

// function that takes parameter name and if name words are greater than add ... in the last of name
function shortName(name) {
  if (name.length > 10) {
    return name.substring(0, 10) + '...'
  }
}
console.log(shortName('hashim noor qureshi hashmi'))