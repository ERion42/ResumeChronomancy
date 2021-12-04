import React from 'react'
import { QUERY_ME, QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import decode from 'jwt-decode';
import pdfkit from 'pdfkit';
import fs from 'fs'


// const writePdf = (props) => {
//     const { educations, experiences, technicalSkills, languages, softSkills, interests, userInfos } = props;
//     const doc = new PDFDocument;

//     doc.pipe(fs.createWriteStream('../../../../output.pdf'));
    
// }

// export default function GenerateResume (profile) {
//     const user = profile;
//     const pdfdocument = new pdfkit;
//     pdfdocument.pipe(fs.writeFileSync('output.pdf'))
//     pdfdocument.text(user).fontSize(10)
//     pdfdocument.end();

// }


