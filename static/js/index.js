// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  var Datos;
  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
    useSSL: false,
    userName: "patriciabonilla1995@gmail.com",
    password: "1726646654",
    onSuccess:onConnect,
    onFailure:doFail
  }
  
  // connect the client
  client.connect(options);
    
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("COnectado...");
    client.subscribe("patriciabonilla1995@gmail.com/test");
  
  }


  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    
    console.log(message.payloadString);
    Datos=(message.payloadString).split(("-"));
    MisDAtos(Datos)
  }

  function MisDAtos(texto){
    var uno=document.getElementById("LED_1");
    var dos=document.getElementById("LED_2");
    var tres=document.getElementById("Historial");
    uno.innerHTML=" Se encuentra "+texto[0];
    dos.innerHTML="Se encuentra "+texto[1];
  }
  
  function MostarClave(){

    clave="Prueba123"
    var acs = document.getElementById("pass").value;
    if(acs==clave){
      console.log("access");
      mensaje("0")
    }
    
    
  }

function mensaje(text){
  message = new Paho.MQTT.Message(text);
  message.destinationName = "patriciabonilla1995@gmail.com/test1";
  client.send(message);
}

