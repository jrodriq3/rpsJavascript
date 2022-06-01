
class myHelper {
    static userChoice;
    static computerChoice;
    static winner; 
    /*
    static rockClicked() {
        this.userChoice = "rock";
        this.assignComputer();
        
    }
    static paperClicked() {
        this.userChoice = "paper";
        this.assignComputer();
        
    }
    static scissorsClicked() {
        this.userChoice = "scissors";
        this.assignComputer();
        
    }
    */
   static runGame() {
       if (document.getElementById('Rock').checked == true) {
           this.userChoice = "rock";
           document.getElementById("your-choice").innerHTML = " Rock";
       }
       else if (document.getElementById('Paper').checked == true) {
           this.userChoice = "paper";
           document.getElementById("your-choice").innerHTML = " Paper";
       }
       else if (document.getElementById('Scissors').checked == true) {
           this.userChoice = "scissors";
           document.getElementById("your-choice").innerHTML = " Scissors";

       }
       this.assignComputer();
   }
    static assignComputer() {
        this.computerChoice = Math.floor(Math.random() * 3) + 1;
        if (this.computerChoice == 1) {
            this.computerChoice = " Rock";
        }
        else if (this.computerChoice == 2) {
            this.computerChoice = " Paper";
        }
        else {
            this.computerChoice = " Scissors"
        }
        document.getElementById("computer-choice").innerHTML = this.computerChoice;
        this.calculateWinner();
        
    }
    static calculateWinner() {
        if (this.userChoice === "rock") {
            if (this.computerChoice == " Scissors") {
                this.winner = "player";
            }
            else if (this.computerChoice == " Paper") {
                this.winner = "computer";
            }
            else {
                this.winner = "draw";
            }
        }
        else if (this.userChoice === "paper") {
            if (this.computerChoice === " Rock") {
                this.winner = "player";
            }
            else if (this.computerChoice === " Scissors") {
                this.winner = "computer";
            }
            else {
                this.winner = "draw";
            }
        }
        else if (this.userChoice === "scissors") {
            if (this.computerChoice === " Paper") {
                this.winner = "player";
            }
            else if (this.computerChoice === " Rock") {
                this.winner = "computer";
            }
            else {
                this.winner = "draw";
            }
        }
        this.displayResults(this.winner);
        
        
    }
    static displayResults(winner) {
        if (winner == "computer") {
            document.getElementById("result").innerHTML = "Sorry the computer won.";
            return;
        }
        if (winner == "player") {
            document.getElementById("result").innerHTML = "Congratulations you won";
        }
        if (winner == "draw") {
            document.getElementById("result").innerHTML = "Draw! try again";
        }

    }
    
}
