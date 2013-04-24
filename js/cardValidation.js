ValidateCardNumber = function(input, delay) 
{   
    //variables
    var checkDelay = (typeof delay != "number") ? 1000 : delay;
    var timer;
    
    input.on("keyup", function(event) 
    {       
        clearTimeout(timer);
        
        timer = setTimeout(isValid, checkDelay);
    });
    
    
    //is card number valid
    function isValid()  
    {   
        //get entered card number
        var cardNumber = input.val();
        
        //strip all non-numeric characters
        cardNumber = cardNumber.replace(/[^\d]/g, '');
        
        //check card number passes validation        
        if(checkLuhn(cardNumber) && checkDigits(cardNumber))
        {
            input.addClass("valid");
        } else {
            input.removeClass("valid");
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
        var length = cardNumber.length;
        
        return (length > 9);
    }
};