import React, { useState } from 'react';
import FAQ from './FAQ';

function FAQs() {
    const [faqs, setfaqs] = useState([
        {
            question: 'What does this app do?',
            answer: 'Great question! This app allows the user to input their data, then select what kind of data they want to add to their resume. Once the information is selected, it just takes the push of a button to generate a nicely formatted resume.',
            open: true,
        },
        {
            question: 'Who would want to use this?',
            answer: 'This app is great for people who might be applying to a number of different fields. Rather than creating and updating several different types of resumes, this acts as a repository of all your knowledge, skills, and experiences in one centralized location. Users will be able to create resumes tailored to a number of different fields on the fly, saving time and energy.',
            open: false,
        },
        {
            question: 'Will there be future updates?',
            answer: 'Yes. We have several ideas planned. When designing this app we designed it to be easy for us to add additional functionality to it. Stay tuned for more updates as we plan to implement and release them.',
            open: false,
        },
        {
            question: 'Is this a fully functioning app at the moment?',
            answer: 'No.',
            open: false,
        },
        // {
        //     question: '',
        //     answer: '',
        //     open: false,
        // },
        {
            question: 'How many programmers does it take to screw in a lightbulb?',
            answer: 'None. We don\'t address hardware issues.',
            open: false
        },
        {
            question: 'If April showers bring May flowers, what do May flowers bring?',
            answer: 'Pilgrims',
            open: false
        },
        {
            question: 'How do you follow Will Smith in the snow?',
            answer: 'You follow the fresh prints.',
            open: false
        },
        {
            question: 'How does the moon cut his hair?',
            answer: 'Eclipse it!',
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }
    return (
        <div style= {{
            position: 'absolute', top: '25%',  
        }}
            className="container">
            <h1 className="title">Frequently Asked Questions:</h1>
            <div className='faqs'>
                {faqs.map((faq, i)=> (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                ))}
            </div>
        </div>
    );
}

export default FAQs;
