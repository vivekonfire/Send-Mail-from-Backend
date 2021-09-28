const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/mail", require("./routes/mail"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port${PORT}`));
