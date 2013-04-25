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
        
        //check card number passes validation and add / remove 'valid'/ 'notValid' classes     
        if(checkLuhn(cardNumber) && checkDigits(cardNumber))
        {
            removeClass(input, "notValid");
            addClass(input, "valid");
        } else {
            removeClass(input, "valid");
            addClass(input, "notValid");
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
    
    //does the element have the class?
    function hasClass(element, className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className);
    }
    
    
    //add class to element if it doesnt already have it
    function addClass(element, className)
    {
        if (!hasClass(element, className)) {
            element.className += ' ' + className;
        }
    }
    
    
    //remove class if the element has it
    function removeClass(element, className)
    {
        if (hasClass(element, className))
        {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            element.className = element.className.replace(reg, ' ');
        }
    }
};