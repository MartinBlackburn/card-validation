ValidateCardNumber = function(inputID, delay) 
{   
    //variables
    var checkDelay = (typeof delay != "number") ? 1000 : delay;
    var timer;
    var input = document.getElementById(inputID);
    
    input.onkeyup = function(e)
    {       
        clearTimeout(timer);
        
        timer = setTimeout(isValid, checkDelay);
    };
    
    
    //is card number valid
    function isValid()  
    {   
        //get entered card number
        var cardNumber = input.value;
        
        //strip all non-numeric characters
        cardNumber = cardNumber.replace(/[^\d]/g, '');
        
        //check card number passes validation and add / remove 'valid' class     
        if(checkLuhn(cardNumber) && checkDigits(cardNumber))
        {
            input.className += "valid";
        } else {
            input.className = input.className.replace(/(?:^|\s)valid(?!\S)/g , '');
        }
    } 
    
    
    function checkLuhn(cardNumber)
    {
        var sum = 0;
        var numdigits = cardNumber.length;
        var parity = numdigits % 2;
        
        for(var i=0; i < numdigits; i++)
        {
            var digit = parseInt(cardNumber.charAt(i));
            
            if(i % 2 == parity) {
                digit *= 2;
            }
            
            if(digit > 9) {
                digit -= 9;
            }
            
            sum += digit;
        }
        
        return (sum % 10) == 0;
    }
    
    
    function checkDigits(cardNumber)
    {
        cardNumber = cardNumber.replace(/[^\d]/g, '');
        var length = cardNumber.length;        
        
        return (length > 9);
    }
};