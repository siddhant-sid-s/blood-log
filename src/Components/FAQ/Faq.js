import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
    const faqData = [
        {
            question: 'Who can donate blood?',
            answer: 'Generally, individuals who are in good health, weigh at least 45 Kgs, age between 17 and 65, and haemoglobin should be above 12.5 g% can donate blood.',
        },
        {
            question: 'Why should I donate blood ?',
            answer: 'By Blood donation you greatly contribute towards a healthier, happier society by making available safe blood. Any one may need blood at any time may be ourselves or our near  ones. You also benefit in other ways by donating blood as it reduces the chances of ischemic heart diseases',
        },
        {
            question: 'How often can I donate Blood ?',
            answer: 'After every three –four months you can donate blood.',
        },
        {
            question: 'Is there anything special I need to do before donating ?',
            answer: 'Eat at your regular mealtimes and drink plenty of fluid before you donate blood. Have a snack at least four hours before you donate, but do not eat too much right before the donation.Avoid taking aspirin or aspirin-like anti-inflammatory medication in the 72 hours prior to your donation, because aspirin inhibits the function of blood platelets.',
        },
        {
            question: 'How much blood is taken ?',
            answer: 'For a whole blood donation, approximately 0.5 L of blood is collected. For donations of other blood products, such as platelet or plasma, the amount collected depends on your height, weight and platelet count.',
        },
        {
            question: 'What should we eat post donation ?',
            answer: 'Before you leave the blood donor clinic after your blood donation, have some tea, coffee or a soft drink to help replace the blood volume (approximately 450 ml) which has been reduced as a result of your donation.',
        },
        {
            question: 'What we should avoid after donating blood ?',
            answer: "Don't smoke for next 30 minutes and also avoid climbing stairs for next 30 minutes. Avoid consuming alcohol until you have eaten something. ",
        },
        {
            question: 'Is it possible to get HIV/AIDS from donating blood ?',
            answer: 'No. You cannot get AIDS or any other infectious disease by giving blood. The materials used for your blood donation, including the needle, blood collection bag, tubes and finger prick needle are new, sterile and disposable. These are used only once for your blood donation and then destroyed after use.',
        },
        {
            question: 'How long will it take my body to replenish the donated blood ?',
            answer: 'Your body replaces the blood volume (plasma) within 24 hours. Red blood cells are replaced by the bone marrow into the circulatory system within about three to four weeks, while the lost iron is replaced over approximately six to eight weeks.',
        },
        {
            question: 'Can I donate blood if I have a tattoo or piercing?',
            answer: 'In many places, having a recent tattoo or piercing might temporarily defer blood donation. The deferral period varies by location but is often around 3 to 12 months.',
        },

        // Add more FAQ items as needed
    ];

    const [expandedItems, setExpandedItems] = useState([]);

    const toggleItem = (index) => {
        setExpandedItems((prevExpandedItems) =>
            prevExpandedItems.includes(index)
                ? prevExpandedItems.filter((item) => item !== index)
                : [...prevExpandedItems, index]
        );
    };

    return (
        <div className="faq-container" style={{ backgroundColor: '#f0f0f0' }}>
            <h1>Frequently Asked Questions</h1>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleItem(index)}>
                        {item.question}
                        <span className="faq-sign">{expandedItems.includes(index) ? '-' : '+'}</span>
                    </div>
                    {expandedItems.includes(index) && <div className="faq-answer">{item.answer}</div>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;