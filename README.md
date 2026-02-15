# ASL-Translator

<p>This website is dedicated to advocating for inclusivity, with a special focus on the Deaf community.<br> 
It provides practical guidance on respectful etiquette when communicating with Deaf persons, helping visitors build awareness and confidence in everyday interactions. <p>The site also features an interactive function that teaches users how to introduce themselves using American Sign Language (ASL), an introductory ASL dictionary with images of common words and phrases, and a simple game designed to practice and reinforce sign recognition. Together, these resources create an engaging, educational space that promotes communication without barriers and fosters a more inclusive society.</p>

---
---
### Author's Information
#### Author's Name: Sharon Moegi
#### Contact Info: (Email) sharamoegi@gmail.com

## Setup Instructions:
- Clone the repository:<br>
(``` bash
            git clone https://github.com/shara-arch/Sign-Language-Translator.git )
- Open the terminal command line then navigate to the root the of the application.<br>
    `cd Sign-Language-Translator`
- Open `index.html` on your preferred browser.


### Behaviour-Driven Development (BDD)

#### 1a. Display a Form on the Introduction Page
- **Input:** User’s name  
- **Output:** Displays the user’s name using ASL signs in a personalized card

#### 1b. Error Handling
- **Condition:** Name input is empty or null  
- **Output:** Display an error message prompting the user to enter a valid name

---

#### 2a. ASL Game
- **Feature:** Interactive card-based game with ASL signs  
- **Behavior:**
  - Displays cards with different ASL signs  
  - Provides multiple choice buttons for possible answers  
  - User selects at least one option  
  - System marks the answer as **Correct ✅** or **Wrong ❌**  
  - If wrong, the correct answer is displayed immediately  

---

### Example BDD Scenario (ASL Game)

  Scenario: Selecting the correct answer
    Given an ASL sign card is displayed
    And multiple choice options are shown
    When I select the correct option
    Then the system should display "✅ Correct!"
    And my score should increase

  Scenario: Selecting the wrong answer
    Given an ASL sign card is displayed
    And multiple choice options are shown
    When I select an incorrect option
    Then the system should display "❌ Wrong"
    And reveal the correct answer


