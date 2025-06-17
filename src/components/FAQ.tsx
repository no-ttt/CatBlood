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
    question: "我的愛貓捐血安全嗎？",
    answer: "是的，對於符合我們資格標準的健康貓咪來說，捐血是安全的。這個過程類似於人類捐血，由執業獸醫師執行。貓咪會接受輕度鎮靜，確保在快速過程中保持舒適和穩定。"
  },
  {
    id: 2,
    question: "我的愛貓多久可以捐血一次？",
    answer: "貓咪可以安全地每8-10週捐血一次。我們建議每年不超過4-5次捐血，以確保您愛貓的持續健康和福祉。我們的系統會追蹤捐血記錄以防止過度捐血。"
  },
  {
    id: 3,
    question: "我的愛貓需要鎮靜嗎？",
    answer: "是的，大多數貓咪在捐血時需要輕度鎮靜。這確保過程無壓力且安全。鎮靜效果會快速消退，大多數貓咪在捐血後幾小時內就會恢復正常。"
  },
  {
    id: 4,
    question: "一次捐血會採集多少血液？",
    answer: "我們每次採集約50-60毫升的血液，這對體重至少4.5公斤的健康貓咪來說是安全的量。這個量不到貓咪總血量的10%，會快速補充。"
  },
  {
    id: 5,
    question: "捐血前需要為我的愛貓做什麼準備？",
    answer: "是的，我們建議在預約前正常餵食您的愛貓，但在預定捐血時間前3小時停止餵食。水應該隨時可用。您的愛貓應該接種最新疫苗並進行寄生蟲預防。"
  },
  {
    id: 6,
    question: "我愛貓的血液捐出後會怎麼處理？",
    answer: "採集後，血液會在我們的實驗室中處理，可能會分離成成分（紅血球、血漿等）或保持全血狀態。會進行血型檢測、疾病檢測、標記，並適當儲存，直到其他貓咪在緊急情況下需要使用。"
  },
  {
    id: 7,
    question: "整個捐血過程需要多長時間？",
    answer: "整個就診通常需要約1-2小時，包括報到、捐血前檢查、捐血本身（只需15-20分鐘）和短暫的恢復期。我們建議第一次就診預留額外時間。"
  },
  {
    id: 8,
    question: "捐血後有什麼副作用嗎？",
    answer: "大多數貓咪在捐血後幾乎沒有副作用。有些貓咪可能在24小時內稍微疲倦或活動力較低。我們建議在捐血後的當天讓您的愛貓待在室內並保持安靜。極少數情況下，貓咪可能在採集部位出現輕微瘀血。"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">常見問題</h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            獲得關於貓咪捐血常見問題的答案。如果您在這裡找不到您的問題，
            歡迎直接聯絡我們。
          </p>
        </div>

        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="搜尋問題..."
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
              <p className="text-gray-700 dark:text-gray-300">找不到符合您搜尋的問題。</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;