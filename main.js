var app = angular.module("bookStore", []);
app.controller("storemanager", function($scope) {

    $scope.title = "Book Store";

   $scope.bookstore = [
        {
            bookId: 1,
            bookName: "The Mental Models",
            authorName: "Peter Hollins",
        },
        {
            bookId: 2,
            bookName: "Atomic Habits",
            authorName: "James Clear",
        },
        {
            bookId: 3,
            bookName: "Deep Work",
            authorName: "Cal Newport",
        },
        {
            bookId: 4,
            bookName: "The Psychology of Money",
            authorName: "Morgan Housel",
        },
        {
            bookId: 5,
            bookName: "Clean Code",
            authorName: "Robert C. Martin",
        },
        {
            bookId: 6,
            bookName: "The Pragmatic Programmer",
            authorName: "Andrew Hunt",
        },
        {
            bookId: 7,
            bookName: "You Don't Know JS",
            authorName: "Kyle Simpson",
        },
        {
            bookId: 8,
            bookName: "Can't Hurt Me",
            authorName: "David Goggins",
        },
        {
            bookId: 9,
            bookName: "Show Your Work!",
            authorName: "Austin Kleon",
        },
        {
            bookId: 10,
            bookName: "The Alchemist",
            authorName: "Paulo Coelho",
        },
        {
            bookId: 11,
            bookName: "Zero to One",
            authorName: "Peter Thiel",
        },
        {
            bookId: 12,
            bookName: "Start with Why",
            authorName: "Simon Sinek",
        },
        {
            bookId: 13,
            bookName: "The Lean Startup",
            authorName: "Eric Ries",
        },
        {
            bookId: 14,
            bookName: "Refactoring",
            authorName: "Martin Fowler",
        },
        {
            bookId: 15,
            bookName: "Design Patterns",
            authorName: "Erich Gamma",
        },
        {
            bookId: 16,
            bookName: "Thinking, Fast and Slow",
            authorName: "Daniel Kahneman",
        },
        {
            bookId: 17,
            bookName: "Grit",
            authorName: "Angela Duckworth",
        },
        {
            bookId: 18,
            bookName: "Ego Is the Enemy",
            authorName: "Ryan Holiday",
        },
        {
            bookId: 19,
            bookName: "Dune",
            authorName: "Frank Herbert",
        },
        {
            bookId: 20,
            bookName: "To Kill a Mockingbird",
            authorName: "Harper Lee",
        }
    ];

    $scope.authors = [
        "Peter Hollins",
        "James Clear",
        "Cal Newport",
        "Morgan Housel",
        "Robert C. Martin",
        "Andrew Hunt",
        "Kyle Simpson",
        "David Goggins",
        "Austin Kleon",
        "Paulo Coelho",
        "Peter Thiel",
        "Simon Sinek",
        "Eric Ries",
        "Martin Fowler",
        "Erich Gamma",
        "Daniel Kahneman",
        "Angela Duckworth",
        "Ryan Holiday",
        "Frank Herbert",
        "Harper Lee"
    ];
    


});