# MClimate Front-End Assignment (Junior Developer)

This project was developed as part of a technical assessment for a Junior Front-End Developer position at **MClimate**. It demonstrates a variety of core front-end development skills, including:

- API integration  
- State management with Redux  
- Reusable, modular component architecture  

## Project Overview

Beyond the initial technical requirements, this project includes a full recreation of MClimate’s public website design, showcasing attention to UI/UX detail and brand consistency.

### Key Features

#### Project Setup

- Created a scalable and maintainable React.js project structure  
- Integrated Redux Toolkit for application-wide state management

#### API Integration (Login Flow)

- Connected to MClimate’s public API  
- Built a functional login form using provided credentials  
- Stored access and refresh tokens securely in the Redux store after successful authentication

#### Multi-Page Navigation

Implemented with React Router:

- **Buildings List Page**  
  Displays a list of clickable building components (based on hardcoded JSON for demo)

- **Building Details Page**  
  Shows detailed information for the selected building

- **Floor Details Page**  
  Displays data related to individual floors within a building

All pages utilize reusable UI components for modularity and clean code structure.

#### Design Implementation (Bonus Work)

- Recreated MClimate's official website design layout from scratch  
- Applied custom styling to match original UI/UX  
- Used original images and assets for visual consistency  
- Achieved pixel-perfect responsiveness across common screen sizes

## Getting Started

Follow the instructions below to set up and run the project locally.

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/MClimate.git
cd MClimate
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project 

```bash
npm run dev 
```