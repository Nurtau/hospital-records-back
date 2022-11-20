require("dotenv").config();
const express = require("express");
const cors = require("cors");

const usersRouter = require("./routes/usersRouter");
const diseaseTypesRouter = require("./routes/diseaseTypesRouter");
const countriesRouter = require("./routes/countriesRouter");
const diseasesRouter = require("./routes/diseasesRouter");
const publicServantsRouter = require("./routes/publicServantsRouter");
const discoversRouter = require("./routes/discoversRouter");
const doctorsRouter = require("./routes/doctorsRouter");
const specializationsRouter = require("./routes/specializationsRouter");
const recordsRouter = require("./routes/recordsRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use(usersRouter);
app.use(diseaseTypesRouter);
app.use(countriesRouter);
app.use(diseasesRouter);
app.use(publicServantsRouter);
app.use(discoversRouter);
app.use(doctorsRouter);
app.use(specializationsRouter);
app.use(recordsRouter);

app.use((err, req, res) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(process.env.PORT || 4000);
