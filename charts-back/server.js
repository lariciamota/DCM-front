const http = require("http");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const mean = "Média"
const median = "Mediana"
const std_dev = "Desvio Padrão"
const mode = "Moda"
const variance = "Variância"

function sendClient(url, response, str){
  const httpReq = new XMLHttpRequest();
  httpReq.open("GET", url); 
  httpReq.send();

  httpReq.onreadystatechange=function(){
    if(this.readyState == 4 && this.status == 200) {
      var res = httpReq.responseText.split("\n", 5);
      response.write('data: {"title": "' + str+ '", "array": [' + res.toString() + ']}\n\n');
    }
  }
}

http
  .createServer((request, response) => {
    console.log("Requested url: " + request.url);

    if (request.url.toLowerCase() === "/events") {
      response.writeHead(200, {
        Connection: "keep-alive",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*"
      });


      setInterval(() => {
        const urlMean = "https://www.random.org/integers/?num=5&min=100&max=1000&col=1&base=10&format=plain&rnd=new"
        sendClient(urlMean, response, mean);
      }, 5000);

      setInterval(() => {
        const urlMedian = "https://www.random.org/integers/?num=10&min=100&max=1000&col=1&base=10&format=plain&rnd=new"
        
        sendClient(urlMedian, response, median);
      }, 5000);

      setInterval(() => {
        const urlStdDev = "https://www.random.org/integers/?num=5&min=200&max=800&col=1&base=10&format=plain&rnd=new"
        
        sendClient(urlStdDev, response, std_dev);
      }, 5000);

      setInterval(() => {
        const urlMode = "https://www.random.org/integers/?num=5&min=10&max=1000&col=1&base=10&format=plain&rnd=new"

        sendClient(urlMode, response, mode);
      }, 5000);

      setInterval(() => {
        const urlVariance = "https://www.random.org/integers/?num=5&min=1000&max=10000&col=1&base=10&format=plain&rnd=new"

        sendClient(urlVariance, response, variance);
      }, 5000);

    } else {
      response.writeHead(404);
      response.end();
    }
  })
  .listen(8081, () => {
    console.log("Server running at http://127.0.0.1:8081/");
  });