const debug = require("debug")("monprojetdemo:schema");
const sequelize = require("./connection");
const {
  Class,
  EducationUnit,
  Student,
  Teacher,
  TeachingPeriod,
} = require("./schema");

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

  const mrsSonneville = await Teacher.create({
    firstName: "Véronique",
    lastName: "Sonneville",
  });
  const mrsDesmarets = await Teacher.create({
    firstName: "Karin",
    lastName: "Desmarets",
  });
  const mrRoland = await Teacher.create({
    firstName: "François",
    lastName: "Roland",
  });

  const psgbd = await EducationUnit.create({
    name: "Projet SGBD",
  });
  const projint = await EducationUnit.create({
    name: "Projet d'intégration de développement",
  });
  const projweb = await EducationUnit.create({
    name: "Projet de développement Web",
  });

  const psgbd_s1_2122 = await Class.create({
    shortName: "PSGBD_S1_2122",
    academicYear: "2021-2022",
  });
  const projweb2_s1_222 = await Class.create({
    shortName: "PROJWEB2_S1_2122",
    academicYear: "2021-2022",
  });
  const projint_s1_222 = await Class.create({
    shortName: "PROJINT_S1_2122",
    academicYear: "2021-2022",
  });

  const p20211129_am = await TeachingPeriod.create({
    date: "2021-11-29",
    beginning: "09:00",
    end: "12:30",
  });
  const p20211129_pm = await TeachingPeriod.create({
    date: "2021-11-29",
    beginning: "13:20",
    end: "16:50",
  });

  await psgbd_s1_2122.setTeacher(mrsSonneville);
  await projweb2_s1_222.setTeacher(mrRoland);
  await projint_s1_222.setTeacher(mrRoland);

  await psgbd_s1_2122.setEducationUnit(psgbd);
  await projweb2_s1_222.setEducationUnit(projweb);
  await projint_s1_222.setEducationUnit(projint);

  await projweb2_s1_222.addTeachingPeriod(p20211129_am);
  await projint_s1_222.addTeachingPeriod(p20211129_pm);

  await projweb2_s1_222.addStudents([nadege, michael, jonathan]);
  await projint_s1_222.addStudents([carole, hatim, thierno]);

  debug("Samples imported.");

  await sequelize.close();
})();
