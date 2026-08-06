import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoChevronDown } from 'react-icons/io5'
import SectionWrapper from '../components/SectionWrapper'

const faqs = [
  {
    question: 'How does the QR menu work?',
    answer: 'Simply create your restaurant profile, add your menu items, and generate a QR code. When customers scan the QR code with their phone camera, your beautiful digital menu opens instantly in their browser — no app download needed.',
  },
  {
    question: 'Do customers need to download an app?',
    answer: 'No! That\'s the beauty of MenuKit. Your menu opens directly in the customer\'s web browser. No app store visits, no downloads, no sign-ups. Just scan and view — it works on any smartphone.',
  },
  {
    question: 'Can I update my menu anytime?',
    answer: 'Absolutely! You can update your menu items, prices, descriptions, images, and categories anytime from your dashboard. Changes are reflected instantly — your customers always see the latest version.',
  },
  {
    question: 'Can I upload food images?',
    answer: 'Yes! You can upload high-quality images for each menu item. Beautiful food photography significantly increases orders. We optimize images automatically for fast loading on all devices.',
  },
  {
    question: 'How much does it cost?',
    answer: 'MenuKit is currently completely free for early adopters! We wanted to eliminate the expensive fees other platforms charge, saving you 90% on menu-related costs.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Got{' '}
            <span className="gradient-text">Questions?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500"
          >
            Everything you need to know about MenuKit.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`faq-item ${openIndex === i ? 'active' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-display font-semibold text-slate-900 text-base pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <IoChevronDown className="text-primary text-lg" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
