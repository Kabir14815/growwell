import React, { useState } from 'react'

const faqs = [
  {
    q: 'What classes does Growwell School offer?',
    a: 'Growwell School offers classes from Pre-Nursery (2 years) to Class 8 under the CBSE curriculum. We provide a seamless educational journey for your child from their earliest years through primary and middle school.'
  },
  {
    q: 'What is the admission process for Growwell School?',
    a: 'Our admission process is simple: fill out the inquiry form or contact us at +91 8360444258, schedule a campus visit, submit the required documents, and complete the fee payment. We welcome visits to help you and your child get acquainted with our environment.'
  },
  {
    q: 'What makes Growwell School different from other schools in Kharar?',
    a: 'Growwell stands out with our play-based learning approach, balanced focus on academics and activities, experienced teachers, safe and nurturing campus, and commitment to developing confident, creative, and curious minds. We believe in "Grow well. Shine bright."'
  },
  {
    q: 'Where is Growwell School located?',
    a: 'We are located near Bus Stand, Comrade Josh Road, Opp. Aar Kay Book Depot, Kharar, Mohali, India, Punjab region. Our location is easily accessible for families from Mohali, Kharar, and surrounding areas.'
  },
  {
    q: 'What are the school timings?',
    a: 'Growwell School operates Monday to Friday, 9 AM to 3 PM. We follow a structured yet flexible schedule that balances classroom learning, activities, and rest time for young learners.'
  },
  {
    q: 'Does Growwell School follow the CBSE curriculum?',
    a: 'Yes, Growwell School is a CBSE-affiliated school. Our curriculum is designed to build strong foundational concepts, critical thinking skills, and a lifelong love for learning while maintaining the standards of the Central Board of Secondary Education.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="w-full py-20 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <h2 id="faq-heading" className="section_heading relative text-2xl sm:text-3xl mb-4 font-medium text-center text-zinc-800">
          Frequently Asked Questions
        </h2>
        <p className="text-zinc-500 text-center max-w-2xl mx-auto mb-12 text-base">
          Common questions parents ask about Growwell School, admissions, and our approach to education.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-200 rounded-xl overflow-hidden bg-[#f8fafc]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-[#f0fdf4] transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-zinc-800 text-sm sm:text-base">{faq.q}</span>
                <span className="text-[#ff9900] text-xl shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 pt-0">
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
