#Card validation

A card validation using jQuery.

This project was to help me learn regexs, while making something useful.

It is NOT designed to replace your usual card validation.

##Usage instructions

1. Add the jQuery Library:
```html
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
```

2. Add the JS:
```html
    <!-- Put this into the <head> -->
    <script src="js/cardValidation.js"></script>
```

3. Setup the card validation:
```html
    <!-- Put this right before the </body> closing tag -->
    <script>
        $(function() 
        {
            //validate card number, pass card number input and time delay before checking
            new ValidateCardNumber($(".cardNumber"), 1000);
        });
    </script>
```

Now when a user types in their card number it will give the input the class "valid" when a valid card number is entered.