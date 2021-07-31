const express = require("express");
const app = express();
require("./services/passport");

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("running on :", PORT);
});
