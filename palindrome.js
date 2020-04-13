function checkPalindrom(palindrom)
{
  palindrom= palindrom.toLowerCase();
   // 
// 16.Write a function that tests whether a string is a palindrome.



   var flag = true;
   var j;
   j = (palindrom.length) -1 ;
   //console.log(j);
   var cnt = j / 2;
   //console.log(cnt);
    for( i = 0; i < cnt+1 ; i++,j-- )
    {
        // console.log("J is => "+j);
        // console.log(palindrom[i] + "<==>" + palindrom[j]);
        if( palindrom[i] != palindrom[j] )
        {
           flag = false;
           break; 
        }


    }
  if( flag ) {
  console.log('the word is palindrome.');
  }
  else {
console.log('the word is not palindrome.');
  }
}
checkPalindrom('Madam');