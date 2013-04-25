#Card validation

A card validation using javascript.

This project was to help me learn regexs, while making something useful.

It is NOT designed to replace your usual card validation.

##Usage instructions

1. Add the JS:
```html
    <!-- Put this right before the </body> closing tag -->
    <script src="js/cardValidation.js"></script>
```

2. Add an ID to the card number field:
```html
    <input id="cardNumber" type="text" name="cardNumber" />
```

3. Setup the card validation:
```html
    <!-- Put this right before the </body> closing tag -->
    <script>
       //validate card number, pass card number field ID and time delay before checking
       new ValidateCardNumber("cardNumber", 1000);
    </script>
```

Now when a user types in their card number it will give the input the class "valid" when a valid card number is entered.