const debug = require("debug")("monprojetdemo:schema");
const sequelize = require("./connection");
const Student = require("./student");

(async () => {
  debug("Recreating tables...");
  await sequelize.sync({ force: true });

  debug("Importing samples...");

  const thierno = await Student.create({
    firstName: "Thierno",
    lastName: "Barry",
  });
  const nadege = await Student.create({
    firstName: "Nadège",
    lastName: "Mukashema",
  });
  const michael = await Student.create({
    firstName: "Michael",
    lastName: "Abou-Zeid",
  });
  const jonathan = await Student.create({
    firstName: "Jonathan",
    lastName: "Degrave",
  });
  const hatim = await Student.create({
    firstName: "Hatim",
    lastName: "Naimi",
  });
  const carole = await Student.create({
    firstName: "Carole",
    lastName: "Guedem Noumbissie",
  });

  debug("Samples imported.");

  await sequelize.close();
})();
