# ASL-Translator

<p>This website is dedicated to advocating for inclusivity, with a special focus on the Deaf community.<br> 
It provides practical guidance on respectful etiquette when communicating with Deaf persons, helping visitors build awareness and confidence in everyday interactions. <p>The site also features an interactive function that teaches users how to introduce themselves using American Sign Language (ASL), an introductory ASL dictionary with images of common words and phrases, and a simple game designed to practice and reinforce sign recognition. Together, these resources create an engaging, educational space that promotes communication without barriers and fosters a more inclusive society.</p>


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

---

## Behaviour-Driven Development (BDD)

### 1a. ASL Translator
- **Input:** User’s name  
- **Output:** Displays the user’s name using ASL signs in a personalized card

#### 1b. Error Handling
- **Condition:** Name input is empty or null  
- **Output:** Display an error message prompting the user to enter a valid name

### 2. ASL Dictionary
- Displays a list of commonly used words and phrases, with their corresponding ASL Signs.


### 3. ASL Game
- **Feature:** Interactive card-based game with ASL signs  
- **Behavior:**
  - Displays cards with different ASL signs  
  - Provides multiple choice buttons for possible answers  
  - User selects at least one option  
  - System marks the answer as **Correct ✅** or **Wrong ❌**  
  - If wrong, the correct answer is displayed immediately  



#### Example BDD Scenario (ASL Game)

  Scenario:<br>
    Selecting the correct answer<br>
    Given an ASL sign card is displayed<br>
    And multiple choice options are shown<br>
    When I select the correct option<br>
    Then the system should display "✅ Correct!"<br>
    And my score should increase

  Scenario:<br> 
    Selecting the wrong answer
    Given an ASL sign card is displayed<br>
    And multiple choice options are shown<br>
    When I select an incorrect option<br>
    Then the system should display "❌ Wrong"<br>
    And reveal the correct answer

---

## Technologies Used
- HTML
- CSS
- JavaScript

---

## Link to Live Site
    https://shara-arch.githuub.io/Sign-Language-Translator/

---

## LICENSE

MIT License

Copyright (c) 2026 shara-arch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

