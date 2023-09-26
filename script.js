function buscar() {
  var city = document.getElementById("parametro1").value;
  inputDoUsuario(city);
}

const inputDoUsuario = async (city) => {
  try {
    const resultado = await fetch(
      `https://goweather.herokuapp.com/weather/${city}`
    );
    const corpo = await resultado.json();
    document.getElementById("temperature").innerHTML =
      "Temperatura: " + corpo.temperature;
    document.getElementById("wind").innerHTML = "Vento: " + corpo.wind;
    document.getElementById("description").innerHTML =
      "Descrição: " + corpo.description;
  } catch (error) {
    console.log("Erro:", error);
  }
};
