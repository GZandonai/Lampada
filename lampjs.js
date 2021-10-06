const TurnOn = document.getElementById ( "TurnOn" );
const TurnOff = document.getElementById ( "TurnOff" );
const lamp = document.getElementById ( "lamp" );


function lampOn () {
    if (!isLampBroken () )
    lamp.src = "/img/lampligada.jpg";
}

function lampOff () {
    if (!isLampBroken () )
    lamp.src = "/img/lampdesligada.jpg";
}

function lampBroken () {
    lamp.src = "/img/lampquebrada.jpg";
}

function isLampBroken () {
    return lamp.src.indexOf ( "quebrada" ) > -1
}

TurnOn.addEventListener ( "click", lampOn );
TurnOff.addEventListener ( "click", lampOff );

lamp.addEventListener ( "mouseover", lampOn );
lamp.addEventListener ( "mouseleave", lampOff );
lamp.addEventListener ("dblclick", lampBroken );