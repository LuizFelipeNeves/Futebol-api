const rp = require("request-promise");

const baseRequest = async uri =>
  await rp({
    uri,
    headers: {
      Connection: "keep-alive",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36"
    }
  });

const getTime = async time => {
  const re = /("result": {"events": \[(.*)+\]\})/;
  const html = await baseRequest(
    `https://www.terra.com.br/esportes/equipes/${time}/lista-de-jogos`
  );
  return JSON.parse(`{${html.match(re)[0]}}`);
};

module.exports = getTime;
