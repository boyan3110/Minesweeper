# Minesweeper

A retro Minesweeper game developed as a school project using HTML, CSS, and vanilla JavaScript.



## Features

- **Three difficulty levels:** Easy, Medium, and Hard, each with a different board size and number of mines.
- **Random mine placement:** Mines are placed randomly across the board.
- **Interactive game board:** Reveal cells using the left mouse button and place or remove flags using the right mouse button.
- **Adjacent mine counter:** Revealed cells display the number of mines in neighbouring positions.
- **Automatic cell revealing:** Empty cells trigger the recursive revealing of neighbouring cells.
- **Timer:** Tracks the time spent playing.
- **Rules page:** Provides gameplay instructions and visual examples of basic Minesweeper patterns.

## Visual Design

The game uses a retro arcade-inspired aesthetic, featuring:

- Pixel-style typography using the Press Start 2P font.
- A black background with white text and borders.
- Blue-grey game cells.
- Animated title elements that slide into view.
- Menu buttons with slide-in and hover animations.
- Animated rule descriptions and visual examples.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Project Structure

```text
Minesweeper/
├── game/
│   ├── titlepage.html
│   ├── titlepage.css
│   ├── gamepage.html
│   ├── gamepage.css
│   ├── rules.html
│   ├── rules.css
│   ├── minesweeper.js
│   ├── example-1.png
│   ├── example-2.png
│   ├── example-3.png
│   ├── example-4.png
│   ├── example-5.png
│   ├── example-6.png
│   ├── example-7.png
│   └── example-8.png
└── README.md
```

## How to Run

1. Clone or download this repository.
2. Open the `game` folder.
3. Open `titlepage.html` in a web browser.
4. Select **Play Game** to start.
5. Choose a difficulty level and play.

No additional installation is required.

## Project Background

This project was developed as part of a school web development assignment for the course Computer Practicum II. It was a two part project developed throughout the whole semester, implementing the aesthethic elements using HTML and CSS first and then adding functionality with vanilla JavaScript. 
