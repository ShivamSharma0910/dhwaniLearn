import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-lead',
  templateUrl: './show-lead.component.html',
  styleUrls: ['./show-lead.component.css']
})
export class ShowLeadComponent implements OnInit {
  name:any;
  useInput:any
  constructor() { }

      ngOnInit() {
        this.useInput = "12321";
        this.name ="shivam"
        var sirname = "viveksingh";
        const useSpread = [...sirname];       //['v', 'i', 'v', 'e', 'k', 's', 'i', 'n', 'g', 'h']
        const arryFrom = Array.from(sirname); // ['v', 'i', 'v', 'e', 'k', 's', 'i', 'n', 'g', 'h']
        const usingObjectAssign = Object.assign([], sirname);
        console.log(useSpread.reverse());
          this.checkPalindrome(this.useInput);
      
  }

  checkPalindrome(userinput:any){
    console.log(userinput);
    const userLength = userinput.length;
     for(let i= 0 ; i<userLength / 2 ; i++){
       if(userinput[i] !== userinput[userLength - 1 - i] ){
         return console.log("numver is not palindrome");
       }
       return console.log("its palindrome");
     }
  }

}
