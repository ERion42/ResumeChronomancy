// const pdfkit = require("pdfkit");
// const blobStream = require('blob-stream');
// const fs = require("fs");

// const pdfdocument = new pdfkit

// pdfdocument.pipe(fs.createWriteStream("output.pdf"))

//   pdfdocument.text("Leather is great for sneaking around because it's made of hide.")
//   .fontSize(25)

//   pdfdocument.addPage()
//   .text("In my career as a lumberjack I cut down exactly 52,487 trees. I know because I kept a log.")
//   .fontSize(50)

// pdfdocument.end()

// // create a document and pipe to a blob

// const stream = doc.pipe(blobStream());

// let text = 'James Strande';
// let address = '65 Grand Ave. Cedar Knolls, NJ 07927'
// let number = '(201)-274-3728'
// let email = 'strandejr@gmail.com'
// let line2 = address + ' | ' + number + ' | ' + email;
// let line3 = 'Skills:__________________________________________________________________'
// let techSkills = 'MERN Stack, Agile Workflow, MVC, OOP, Third-Party API, PWA, HTML5, CSS3, JavaScript ES6, JQuery, Bootstrap, Node.js, MySQL, Sequelize, MongoDB, Mongoose, Express, ApolloServer, Handelbars.js, GraphQL, React, Redux, Stripe, JWT, Git, GitHub, Bash, Office (Word, Excel, Powerpoint), Adobe Acrobat DC, Sorian EMR, Centricity EMR, Mobile First-Responsive Development'
// let languages = 'HTML, CSS, Javascript, SQL, NoSQL, JQuery, Python, Ruby'
// // draw some text
// doc.fontSize(16).text(text, 250, 40);
// doc.fontSize(10).text(line2, 150);
// doc.fontSize(12).text(line3, 75, 75)
// doc.fontSize(10).text('Technical Skills:', 75, 95)
// doc
//   .text(techSkills, 150, 95, { align: 'justify'})
//   .font('Times-Roman', 10);
// doc.fontSize(10).text('Languages:', 94)
// doc.text(languages, 150, 154, { align: 'justify' }).font('Times-Roman', 10)
// // end and display the document in the iframe to the right
// doc.end();
// stream.on('finish', function() {
//   const url = stream.toBlobURL('application/pdf');
//   iframe.src = url;
  
// });