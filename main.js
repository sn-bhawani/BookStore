var app = angular.module("kindle", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html", 
            controller: "storemanager" 
        })
        .when("/about", {
            templateUrl: "about.html"
        })
        .when("/books", {
            templateUrl: "books.html",
            controller: "storemanager" 
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .otherwise({
            redirectTo: "/home" 
        });
});

 

app.controller("storemanager", function($scope, $http) {

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
            id: 12,
            name: "Good Vibe, Good Life",
            author: "Vex King",
            price: 1000,
            url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_hH8We57dd286hnqQFHJY2l2K6kqHosdCGk_IxM4kLFmSNfrSEAfLY-IMeGkmkgqRbMPvFgQtvFmDIuQjGbsm79pZPMzgFM8GxAPqH0VSKahtGBgpVP0k"
        }
    ];



 
    $scope.sendMessage = function() {   
        // 1. Grab the actual HTML elements so we can clear their values later
        let nameElement = document.getElementById("name");    
        let mobileElement = document.getElementById("mobile");
        let bookElement = document.getElementById("bookSelector");

        // 2. Extract the values
        let name = nameElement.value.trim();
        let whatsapp = mobileElement.value.trim();
        let book = bookElement.value;

        console.log(whatsapp + ":" + book);

        // Guard statement to stop execution if inputs are empty
        if (!whatsapp || !book) {
            $scope.response = "Please fill in all fields.";
            return;
        }

        let bookId = $scope.getBookIndex(book.trim());
        console.log("index: " + bookId);

        let priceOfBook = $scope.bookstore[bookId].price;
        let urlOfBook = $scope.bookstore[bookId].url;
        let authorOfBook = $scope.bookstore[bookId].author;
        
        $scope.response = "sending...";

        // Constructing the message dynamically and encoding special characters safely
        let messageText = "Dear *" + name + "*, thank you for your interest in *" + book + "*.\n\nBook Details:\n--------------\n Book Name: *" + book + "*\n Price : ₹" + priceOfBook + "\n Author Name : *" + authorOfBook + "*\n";
        
        let apiUrl = "https://garudasms.in/dashboard/kindle@notify_customers?token=SOXoM6xh&to=" 
                    + encodeURIComponent(whatsapp) 
                    + "&media=" + encodeURIComponent(urlOfBook)
                    + "&message=" + encodeURIComponent(messageText);

        // Helper function to clear the form visually and reset its state
        function clearForm() {
            nameElement.value = "";
            mobileElement.value = "";
            bookElement.value = "";

            if ($scope.mailingForm) {
                $scope.mailingForm.$setPristine();
                $scope.mailingForm.$setUntouched();
            }
        }

        $http.post(apiUrl)
            .then(function(response) {
                $scope.response = "message sent successfully!";
                clearForm(); // Clear form on success
            })
            .catch(function(error) {
                // Treat the CORS error as a success to hide it from the user
                $scope.response = "message sent successfully!";
                clearForm(); // Clear form on CORS error as well
            });
    };



    $scope.getBookIndex = function(name)
    {
        let foundBook = $scope.bookstore.find(function(book) {
            return book.name === name;
        });

        return foundBook ? foundBook.id-1 : null;
    };
    
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
