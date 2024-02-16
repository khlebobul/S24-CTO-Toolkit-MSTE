document.addEventListener('DOMContentLoaded', function () {

    // Get the elements
    var colorButton = document.getElementById('colorButton');
    var toggleSwitch = document.getElementById('toggleSwitch');

    // Add event handler for the button
    colorButton.addEventListener('click', function () {
        // Change background color
        document.body.style.backgroundColor = getRandomColor();
    });

    // Add an event handler for the switch
    toggleSwitch.addEventListener('change', function () {
        // Выводим состояние переключателя в консоль
        console.log('The switch is in position: ' + (toggleSwitch.checked ? 'On' : 'Off'));
    });

    // Function for random color generation
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
