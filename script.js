    function hamburg() {
        document.querySelector('.dropdown').style.transform = 'translateY(0)';
        document.querySelector('.hamburg').style.opacity = '0';
        document.querySelector('.hamburg').style.pointerEvents = 'none';
        document.querySelector('.cancel').style.opacity = '1';
        document.querySelector('.cancel').style.pointerEvents = 'auto';
    }

    function cancel() {
        document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
        document.querySelector('.hamburg').style.opacity = '1';
        document.querySelector('.hamburg').style.pointerEvents = 'auto';
        document.querySelector('.cancel').style.opacity = '0';
        document.querySelector('.cancel').style.pointerEvents = 'none';
    }