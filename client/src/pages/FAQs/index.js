import React, { useState } from 'react';
import FAQ from './FAQ';

function FAQs() {
    const [faqs, setfaqs] = useState([
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
        <div class="container">
            <h1 class="title">Frequently Asked Questions:</h1>
            <div class='faqs'>
                {faqs.map((faq, i)=> (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                ))}
            </div>
        </div>
    );
}

export default FAQs;
