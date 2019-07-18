const express = require("express");
const app = express();

const crawler = require("./crawler");

const PORT = process.env.PORT || 3000;

app.get("/:time", async (req, res) => {
  try {
    return res.json(await crawler(req.params.time));
  } catch (error) {
    // tratar o erro como preferir
    return res.json({
      err: "Insira um time valido, exemplo: flamengo, sao-paulo, gremio"
    });
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
