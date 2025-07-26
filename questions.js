const questions = [
  // ==== General Knowledge ====
  { subject: "GK", question: "Which is the smallest continent?", options: ["Australia", "Europe", "Antarctica", "Asia"], answer: "Australia" },
  { subject: "GK", question: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Mahatma Gandhi", "Sarvepalli Radhakrishnan"], answer: "Dr. Rajendra Prasad" },
  { subject: "GK", question: "Which planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Venus", "Mercury"], answer: "Mars" },
  { subject: "GK", question: "Which is the national bird of India?", options: ["Peacock", "Parrot", "Sparrow", "Eagle"], answer: "Peacock" },
  { subject: "GK", question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "James Watt", "Einstein"], answer: "Alexander Graham Bell" },
  { subject: "GK", question: "In which year did India become independent?", options: ["1947", "1950", "1942", "1935"], answer: "1947" },
  { subject: "GK", question: "Which state is known as the 'Spice Garden of India'?", options: ["Kerala", "Goa", "Assam", "Punjab"], answer: "Kerala" },
  { subject: "GK", question: "What is the currency of Japan?", options: ["Yen", "Rupee", "Won", "Dollar"], answer: "Yen" },
  { subject: "GK", question: "Which gas is used for breathing underwater?", options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"], answer: "Oxygen" },
  { subject: "GK", question: "Taj Mahal is located in which city?", options: ["Agra", "Delhi", "Jaipur", "Varanasi"], answer: "Agra" },

  // ==== Mathematics ====
  { subject: "Maths", question: "What is the value of π (pi) approximately?", options: ["3.14", "3.41", "2.14", "1.41"], answer: "3.14" },
  { subject: "Maths", question: "What is 12% of 200?", options: ["24", "22", "20", "26"], answer: "24" },
  { subject: "Maths", question: "What is the square root of 144?", options: ["12", "14", "11", "13"], answer: "12" },
  { subject: "Maths", question: "If a = 5 and b = 3, what is (a + b)²?", options: ["64", "49", "36", "81"], answer: "64" },
  { subject: "Maths", question: "Simplify: 5 × (6 + 2)", options: ["40", "25", "30", "35"], answer: "40" },
  { subject: "Maths", question: "What is 100 divided by 4?", options: ["25", "20", "22", "24"], answer: "25" },
  { subject: "Maths", question: "What is the perimeter of a square with side 5 cm?", options: ["20 cm", "10 cm", "15 cm", "25 cm"], answer: "20 cm" },
  { subject: "Maths", question: "How many sides does a hexagon have?", options: ["6", "5", "7", "8"], answer: "6" },
  { subject: "Maths", question: "What is the LCM of 4 and 5?", options: ["20", "10", "15", "25"], answer: "20" },
  { subject: "Maths", question: "What is 8²?", options: ["64", "56", "72", "60"], answer: "64" },

  // ==== English ====
  { subject: "English", question: "Choose the correct synonym of 'Beautiful'.", options: ["Pretty", "Ugly", "Dirty", "Sad"], answer: "Pretty" },
  { subject: "English", question: "Select the antonym of 'Happy'.", options: ["Sad", "Glad", "Excited", "Joyful"], answer: "Sad" },
  { subject: "English", question: "Identify the noun in the sentence: 'The dog barked loudly.'", options: ["dog", "barked", "loudly", "the"], answer: "dog" },
  { subject: "English", question: "What is the past tense of 'go'?", options: ["went", "goes", "gone", "going"], answer: "went" },
  { subject: "English", question: "Choose the correct spelling:", options: ["Environment", "Enviroment", "Envirnment", "Enviorment"], answer: "Environment" },
  { subject: "English", question: "Which word is an adjective?", options: ["Tall", "Run", "Quickly", "Drive"], answer: "Tall" },
  { subject: "English", question: "What is a synonym of 'Fast'?", options: ["Quick", "Late", "Slow", "Hard"], answer: "Quick" },
  { subject: "English", question: "Find the plural of 'Child'.", options: ["Children", "Childs", "Childer", "Childes"], answer: "Children" },
  { subject: "English", question: "Identify the verb in 'He runs daily.'", options: ["runs", "He", "daily", "none"], answer: "runs" },
  { subject: "English", question: "Choose the correct article: ___ apple", options: ["An", "A", "The", "None"], answer: "An" },

  // ==== Science ====
  { subject: "Science", question: "Water boils at ___ degrees Celsius.", options: ["100", "90", "80", "120"], answer: "100" },
  { subject: "Science", question: "What is the human body's largest organ?", options: ["Skin", "Heart", "Liver", "Brain"], answer: "Skin" },
  { subject: "Science", question: "Which gas do plants absorb?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { subject: "Science", question: "What is the hardest substance?", options: ["Diamond", "Iron", "Gold", "Steel"], answer: "Diamond" },
  { subject: "Science", question: "What part of the plant conducts photosynthesis?", options: ["Leaf", "Root", "Stem", "Flower"], answer: "Leaf" },
  { subject: "Science", question: "What vitamin do we get from sunlight?", options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"], answer: "Vitamin D" },
  { subject: "Science", question: "Which planet is closest to the Sun?", options: ["Mercury", "Mars", "Venus", "Earth"], answer: "Mercury" },
  { subject: "Science", question: "How many bones are in the adult human body?", options: ["206", "201", "208", "210"], answer: "206" },
  { subject: "Science", question: "What is the chemical symbol for Iron?", options: ["Fe", "Ir", "In", "I"], answer: "Fe" },
  { subject: "Science", question: "What gas do humans exhale?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"], answer: "Carbon Dioxide" },

  // ==== Current Affairs (2025 as of July) ====
  { subject: "Current", question: "Who is the President of India in 2025?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Narendra Modi", "Venkaiah Naidu"], answer: "Droupadi Murmu" },
  { subject: "Current", question: "Which country hosted the G20 Summit 2023?", options: ["India", "USA", "Japan", "Brazil"], answer: "India" },
  { subject: "Current", question: "Which Indian city is declared as the Cleanest City in 2024?", options: ["Indore", "Bhopal", "Surat", "Mysuru"], answer: "Indore" },
  { subject: "Current", question: "Which is India’s new Parliament building inaugurated in?", options: ["2023", "2022", "2021", "2024"], answer: "2023" },
  { subject: "Current", question: "India's Chandrayaan-3 landed on?", options: ["Moon", "Mars", "Venus", "Jupiter"], answer: "Moon" },
  { subject: "Current", question: "Which Indian won the Oscar in 2023?", options: ["Naatu Naatu", "RRR Movie", "Modi", "Sundar Pichai"], answer: "Naatu Naatu" },
  { subject: "Current", question: "Who is the Chief Minister of Uttar Pradesh (2025)?", options: ["Yogi Adityanath", "Akhilesh Yadav", "Mayawati", "Raj Nath Singh"], answer: "Yogi Adityanath" },
  { subject: "Current", question: "Which Indian cricketer retired in 2024?", options: ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "Shikhar Dhawan"], answer: "Rohit Sharma" },
  { subject: "Current", question: "Who is the current CEO of Twitter (X) in 2025?", options: ["Linda Yaccarino", "Elon Musk", "Parag Agrawal", "Satya Nadella"], answer: "Linda Yaccarino" },
  { subject: "Current", question: "Which Indian city hosted IPL 2025 Final?", options: ["Ahmedabad", "Mumbai", "Kolkata", "Chennai"], answer: "Ahmedabad" }
];
