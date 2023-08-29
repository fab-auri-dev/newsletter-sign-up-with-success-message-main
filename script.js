const newsletterFrom = document.getElementById( 'newsletterFrom' );
const emailInputField = document.getElementById( 'emailInputField' );
const submitInput = document.getElementById( 'submitInput' );
const errorEmailLabel = document.getElementById( 'errorEmailLabel' );


function isEmail( emailAdress ){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return ( emailAdress.match( regex ) ) ? true : false;
};

function preventSubmit( e ) {
    e.preventDefault();
};

function userSubscribed() {
    if ( ! isEmail( emailInputField.value ) ) {
        emailInputField.value = '';
        errorEmailLabel.style.display = 'block';
        emailInputField.classList.add( 'error-email-input' );

        return;
    };

    let userEmail = { 'userEmail': emailInputField.value };
    sessionStorage.setItem( 'userEmail', JSON.stringify( userEmail ) );

    let position = window.location.href;
    let splitted = position.split( '/' );
    let spliced = splitted.splice( splitted.length - 1 );
    
    window.location.href = splitted.join( '/' ) + '/thanks.html';
};

newsletterFrom.addEventListener( 'submit', preventSubmit );
submitInput.addEventListener( 'click', userSubscribed );   