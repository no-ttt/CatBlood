import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
        <span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-red-600 dark:text-red-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-700 dark:text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const faqData = [
  {
    id: 1,
    question: "Is blood donation safe for my cat?",
    answer: "Yes, blood donation is safe for healthy cats that meet our eligibility criteria. The process is similar to human blood donation and is performed by licensed veterinarians. Cats are sedated lightly to ensure they remain comfortable and still during the quick procedure."
  },
  {
    id: 2,
    question: "How often can my cat donate blood?",
    answer: "Cats can safely donate blood every 8-10 weeks. We recommend no more than 4-5 donations per year to ensure your cat's continued health and well-being. Our system tracks donation history to prevent over-donation."
  },
  {
    id: 3,
    question: "Will my cat need to be sedated?",
    answer: "Yes, most cats require light sedation for blood donation. This ensures the process is stress-free and safe. The sedation wears off quickly, and most cats are back to normal within a few hours after donation."
  },
  {
    id: 4,
    question: "How much blood is taken during a donation?",
    answer: "We collect approximately 50-60ml of blood per donation, which is a safe amount for healthy cats weighing at least 10 pounds. This volume represents less than 10% of a cat's total blood volume and is quickly replenished."
  },
  {
    id: 5,
    question: "Do I need to prepare my cat before donation?",
    answer: "Yes, we recommend feeding your cat normally before the appointment but withholding food for 3 hours prior to the scheduled donation time. Water should be available at all times. Your cat should be current on vaccinations and parasite prevention."
  },
  {
    id: 6,
    question: "What happens to my cat's blood after donation?",
    answer: "After collection, the blood is processed in our laboratory where it may be separated into components (red blood cells, plasma, etc.) or kept as whole blood. It is typed, tested for diseases, labeled, and stored properly until needed by another cat in an emergency situation."
  },
  {
    id: 7,
    question: "How long does the donation process take?",
    answer: "The entire visit typically takes about 1-2 hours, including check-in, pre-donation examination, the donation itself (which takes only 15-20 minutes), and a short recovery period. We recommend allowing extra time for your first visit."
  },
  {
    id: 8,
    question: "Are there any side effects after donation?",
    answer: "Most cats experience minimal to no side effects after donation. Some cats may be slightly tired or less active for 24 hours. We recommend keeping your cat indoors and quiet for the remainder of the day following donation. Rarely, cats may experience mild bruising at the collection site."
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  
  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Get answers to common questions about feline blood donation. If you don't see your question here,
            feel free to contact us directly.
          </p>
        </div>

        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map(faq => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                toggleOpen={() => toggleFAQ(faq.id)}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-700 dark:text-gray-300">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;