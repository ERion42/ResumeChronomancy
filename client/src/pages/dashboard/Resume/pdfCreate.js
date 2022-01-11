import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { getSavedEducations, getSavedExperiences, getSavedTechnicalSkills, getSavedLanguage, getSavedSoftSkill, getSavedInterest, getSavedUserInfo } from '../../../utils/localstorage';


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
    },
    section: { textAlign: 'center', margin: 20, padding: 20 }
});

const MyDocument = () => {

    const savedEducations = getSavedEducations()
    const savedExperiences = getSavedExperiences();
    const savedTechnicalSkills = getSavedTechnicalSkills();
    const savedLanguages = getSavedLanguage();
    const savedSoftSkills = getSavedSoftSkill();
    const savedInterest = getSavedInterest();
    const savedUserInfo = getSavedUserInfo();

    // console.log(savedEducations)
    console.log(savedExperiences)
    // console.log(savedTechnicalSkills);
    // console.log(savedLanguages)
    // console.log(savedSoftSkills)
    // console.log(savedInterest)
    // console.log(savedUserInfo)

    return (
        <Document>
            <Page size="A4" style={styles.page} wrap={false}>
                <View style={{ textAlign: 'center', margin: 30 }}>
                    <View><Text style={{ marginHorizontal: 200, fontSize: 16, fontWeight: 400 }}>{savedUserInfo.firstName} {savedUserInfo.lastName}</Text></View>
                    <View><Text style={{ marginHorizontal: 50, fontSize: 12, fontWeight: 300 }}>{savedUserInfo.address} | {savedUserInfo.phoneNumber} | {savedUserInfo.email} </Text></View>
                    <View><Text style={{ marginHorizontal: 25, fontSize: 12, fontWeight: 300 }}>Skills:</Text></View>
                    <View><Text style={{ marginHorizontal: 25, fontSize: 10 }}>Technical Skills: {savedTechnicalSkills.map((technicalSkill) => {
                        return (
                            <Text>{technicalSkill}, </Text>
                        )
                    })}</Text></View>
                    <View><Text style={{ marginHorizontal: 25, fontSize: 10 }}>Languages: {savedLanguages.map((language) => {
                        return (
                            <Text>{language}, </Text>
                        )
                    })}</Text></View>
                    <View><Text style={{ marginHorizontal: 25, fontSize: 10 }}>Soft Skills: {savedSoftSkills.map((softSkill) => {
                        return (
                            <Text>{softSkill}, </Text>
                        )
                    })}</Text></View>
                    <View><Text style={{ marginHorizontal: 25, fontSize: 10 }}>Interests: {savedInterest.map((interest) => {
                        return (
                            <Text>{interest}, </Text>
                        )
                    })}</Text></View>
                    <View><Text style={{ marginHorizontal: 25, marginVertical: 2, fontSize: 12, fontWeight: 300 }}>Relevant/Work Experiences:</Text></View>
                    {savedExperiences.map((experience) => {
                        return (
                            <View><Text style={{ marginHorizontal: 25, fontSize: 10 }}>{experience.position} at {experience.organization} {experience.startDate} to {experience.endDate}</Text>
                            <Text style={{ marginHorizontal: 25, fontSize: 10 }}>{experience.location}</Text>
                            <Text style={{ marginHorizontal: 25, fontSize: 10, justifyContent: 'space-evenly' }}>{experience.description}</Text></View>
                        )
                    })}
                    <View><Text style={{ marginHorizontal: 25, marginVertical: 2, fontSize: 12, fontWeight: 300 }}>Education:</Text></View>
                    {savedEducations.map((education) => {
                        return (
                            <View><Text style={{ marginHorizontal: 25, fontSize: 12 }}>{(education.degree != null) ? education.degree : education.certifications}: {education.major}   <Text style={{ alignContent: 'right'}}>{education.graduationDate}</Text></Text>
                            <Text style={{ marginHorizontal: 25, fontSize: 10 }}>{education.school}, {education.location}</Text></View>
                        )
                    })}
                </View>
            </Page>
        </Document>
    )
}


export default MyDocument;