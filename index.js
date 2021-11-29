const pdfkit = require("pdfkit");
const fs = require("fs");

const pdfdocument = new pdfkit

pdfdocument.pipe(fs.createWriteStream("output.pdf"))

  pdfdocument.text("Leather is great for sneaking around because it's made of hide.")
  .fontSize(25)

  pdfdocument.addPage()
  .text("In my career as a lumberjack I cut down exactly 52,487 trees. I know because I kept a log.")
  .fontSize(50)

pdfdocument.end()