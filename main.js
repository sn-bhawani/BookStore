var app = angular.module("kindle", []);

app.config(function($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "about.html"
        })
        .when("/books", {
            templateUrl: "books.html",
            controller: "storemanager" // Binds your existing controller to the books page
        })
        .when("/contacts", {
            templateUrl: "contacts.html"
        })
        .otherwise({
            redirectTo: "/books" // Default redirect if the URL doesn't match
        });
});

app.controller("storemanager", function($scope) {

    $scope.title = "Book Store";

   $scope.bookstore = [
        {
            id: 1,
            name: "The Mental Models",
            author: "Peter Hollins",
            price: 300,
            url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzhaQrqkUk_dYQICi1cWi31aTj5qRRlHgPB9qVjl76huvJVF2_YamzbeB8hj97zUTlyQNE7KYVnF54bv04GA8mFxKCLcZb"
        },
        {
            id: 2,
            name: "Atomic Habits",
            author: "James Clear",
            price: 280,
            url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJFUMfdTSwAJxvL5x8bGaGrKi7NDZdC2rcoruqo48DYsz1j9LmOpSFRd8ET58lSs4664PMF2fUAs9KvRYZk0l9baXk16QUrUswTeuRt7dgBtErXnTQsycWJ7vGcJ-rLt7h1ZH7efaT&usqp=CAc"
            
        },
        {
            id: 3,
            name: "Deep Work",
            author: "Cal Newport",
            price: 450,
            url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYIkvv2tdqPZ51ETXXG3o4_xr6s_XkzZ-JNHEpSPHSO_33M-v3AjMIqtmBRFuIGQHPSkRLJbFNnCMhiLyqsocHnqWOG0er81IFHfvs5Q5HWpK8TVWzp-Vetg"
        },
        {
            id: 4,
            name: "The Psychology of Money",
            author: "Morgan Housel",
            price: 450,
            url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqSbzG0ZSo-kRkvLct3KsvrD1iyDlRxpRDcxPO5oO5-6O-5G39ABli97GHBv-BYdyDygXNYob9H3xLUO0oOyr-p4rJyr_N4rG_TBqXOF4"

        },
        {
            id: 5,
            name: "Clean Code",
            author: "Robert C. Martin",
            price: 380,
            url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIWKAu32ANomNaPF52vJ35GOsLO1DogOjV0OLRt8cR42JE4xw8kEC7SVT1ZOBGvB9hGdnVajakQZLccHqmk_XtZV_nt-D9zy7S6vylib38k1wBcp7rvt966A"
        },
        {
            id: 6,
            name: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            price: 1000,
            url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_hH8We57dd286hnqQFHJY2l2K6kqHosdCGk_IxM4kLFmSNfrSEAfLY-IMeGkmkgqRbMPvFgQtvFmDIuQjGbsm79pZPMzgFM8GxAPqH0VSKahtGBgpVP0k"
        },
        {
            id: 7,
            name: "The Mental Models",
            author: "Peter Hollins",
            price: 300,
            url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzhaQrqkUk_dYQICi1cWi31aTj5qRRlHgPB9qVjl76huvJVF2_YamzbeB8hj97zUTlyQNE7KYVnF54bv04GA8mFxKCLcZb"
        },
        {
            id: 8,
            name: "Atomic Habits",
            author: "James Clear",
            price: 280,
            url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJFUMfdTSwAJxvL5x8bGaGrKi7NDZdC2rcoruqo48DYsz1j9LmOpSFRd8ET58lSs4664PMF2fUAs9KvRYZk0l9baXk16QUrUswTeuRt7dgBtErXnTQsycWJ7vGcJ-rLt7h1ZH7efaT&usqp=CAc"
            
        },
        {
            id: 9,
            name: "Deep Work",
            author: "Cal Newport",
            price: 450,
            url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYIkvv2tdqPZ51ETXXG3o4_xr6s_XkzZ-JNHEpSPHSO_33M-v3AjMIqtmBRFuIGQHPSkRLJbFNnCMhiLyqsocHnqWOG0er81IFHfvs5Q5HWpK8TVWzp-Vetg"
        },
        {
            id: 10,
            name: "The Psychology of Money",
            author: "Morgan Housel",
            price: 450,
            url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqSbzG0ZSo-kRkvLct3KsvrD1iyDlRxpRDcxPO5oO5-6O-5G39ABli97GHBv-BYdyDygXNYob9H3xLUO0oOyr-p4rJyr_N4rG_TBqXOF4"

        },
        {
            id: 11,
            name: "Clean Code",
            author: "Robert C. Martin",
            price: 380,
            url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIWKAu32ANomNaPF52vJ35GOsLO1DogOjV0OLRt8cR42JE4xw8kEC7SVT1ZOBGvB9hGdnVajakQZLccHqmk_XtZV_nt-D9zy7S6vylib38k1wBcp7rvt966A"
        },
        {
            id: 6,
            name: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            name: "Good Vibe,Good Life",
            author: "Vex King",
            price: 1000,
            url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_hH8We57dd286hnqQFHJY2l2K6kqHosdCGk_IxM4kLFmSNfrSEAfLY-IMeGkmkgqRbMPvFgQtvFmDIuQjGbsm79pZPMzgFM8GxAPqH0VSKahtGBgpVP0k"
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
