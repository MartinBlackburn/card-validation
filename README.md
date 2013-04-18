#Card validation

A card validation using jQuery.

This project was to help me learn regexs, while making something useful.

It is NOT designed to replace your usual card validation.

##Usage instructions

1. Add the jQuery Library:
```html
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
```

2. Add the JS and CSS. E.G:
```html
    <!-- Put these into the <head> -->
    <script src="js/cardValidation.js"></script>
    <link rel="stylesheet" href="css/cardValidation.css">
```

3. Add markup:
```html
```

4. Setup the card validation:
```html
    <!-- Put this right before the </body> closing tag -->
    <script>
        $(function() 
        {
            //check card details on each form
            $(".cardVaidationForm").each(function()
            {
                new CardValidation($(this));
            });
        });
    </script>
```