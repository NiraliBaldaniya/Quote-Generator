let quotes = [
        "The only way to do great work is to love what you do. \n- Steve Jobs",
        "Success is not final, failure is not fatal, It is the courage  to continue that counts. \n- Winston Churchill",
        "Believe you can and you're halfway there.\n - Theodore Roosevelt",
        "Your time is limited, so don't waste it living  \nsomeone else's life. \n- Steve Jobs",
        "The best way to predict the future is to invent it. \n- Alan Kay",
         "Do what you can, with what you have, where you are. \n- Theodore Roosevelt",
        "Strive not to be a success, but rather to be of value. \n- Albert Einstein",
        "I have not failed. I've just found 10,000 ways that won't work. \n - Thomas Edison",
        "Whether you think you can or think you can't, you're right. \n- Henry Ford",
        "All that glitters is not gold.	 \n- William Shakespeare",
        "It is important to be pushed... You have to find that strength within you.\n - Kiran Bedi",
        "Don't watch the clock; do what it does. Keep going. \n- Sam Levenson",
        "Great things never come from comfort zones. \n- Unknown",
        "Dream it. Wish it. Do it. \n- Unknown",
        "Excellence is a continuous process and not an accident. \n- A.P.J. Abdul Kalam",
        "Hard work never killed anyone. It is the only way to reach your goals. \n- Mary Kom",
        "Don't stop chasing your dreams, because dreams do come true.\n - Sachin Tendulkar",
        "The only thing we have to fear is fear itself. \n- Franklin Roosevelt",
        "We're all in the same storm, we're not in the same boat. \n - Leena Nair",
        "You cannot shake hands with a clenched fist. \n- Indira Gandhi"
    ];
    let images = [
        "images/stevejobs.jpg",
        "images/WinstonChurchill.jpg",
        "images/TheodoreRoosevelt.jpg",
        "images/stevejobs.jpg",
        "images/AlanKay.jpg",
        "images/TheodoreRoosevelt.jpg",
        "images/AlbertEinstein.jpg",
        "images/ThomasEdison.jpg",
        "images/HenryFord.jpg",
        "images/WilliamShakespeare.jpg",
        "images/KiranBedi.jpg",
        "images/SamLevenson.jpg",
        "images/Unknown.jpg",
        "images/Unknown.jpg",
        "images/apjAbdulKalam.jpg",
        "images/marykom.jpg",
        "images/SachinTendulkar.jpg",
        "images/FranklinRoosevelt.jpg",
        "images/LeenaNair.jpg",
        "images/IndiraGandhi.jpg"
  ];
    let currentQuoteIndex = 0;
    function nextquote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        document.getElementById("clicknextquote").innerText = quotes[currentQuoteIndex];
        document.getElementById("quote-img").src = images[currentQuoteIndex]; 
    }
    function previousquote() {
        currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
        document.getElementById("clicknextquote").innerText = quotes[currentQuoteIndex];
        document.getElementById("quote-img").src = images[currentQuoteIndex]; 
    }
    function copyQuote() {
        const quoteText = quotes[currentQuoteIndex];
        navigator.clipboard.writeText(quoteText).then(() => {
            alert("Quote copied to clipboard!");
        }).catch(err => {
            alert("Failed to copy quote: ", err);
        });
    }