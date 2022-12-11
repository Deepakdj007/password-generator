import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = "";
  passwordLength = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  inputEntered = false;
  isPassWordGenerated = false;

  onCheckLetters(){
    this.useLetters = !this.useLetters;

  }
  onCheckNumbers(){
    this.useNumbers = !this.useNumbers;

  }
  onCheckSymbols(){
    this.useSymbols = !this.useSymbols;

  }
  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$#%^&*()';

    let validChars = '';

    if(this.useLetters){
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0;i<this.passwordLength;i++){
      const index = Math.floor(Math.random() *validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
    if(this.password != ''){
      this.isPassWordGenerated = true;
    }
    else{
      this.isPassWordGenerated = false;
    }
  } 
  onInput(value:string){

    this.passwordLength = parseInt(value);
    this.inputEntered = true;
  }
}
