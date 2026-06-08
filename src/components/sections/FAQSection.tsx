import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Timeline cho một dự án thường kéo dài bao lâu?",
    answer: "Tùy thuộc vào quy mô và độ phức tạp của dự án. Với gói Weekly Partnership, bạn sẽ nhận được kết quả cốt lõi trong vòng 7 ngày. Đối với các Custom Project, timeline sẽ được xác định chi tiết trong bản kế hoạch dự án sau cuộc gọi tư vấn đầu tiên."
  },
  {
    question: "Bạn có hỗ trợ chỉnh sửa sau khi bàn giao không?",
    answer: "Có. Mọi dự án đều đi kèm với giai đoạn bảo hành và hỗ trợ tinh chỉnh để đảm bảo sản phẩm hoạt động hoàn hảo trong môi trường thực tế."
  },
  {
    question: "Quy trình làm việc (Workflow) của bạn diễn ra như thế nào?",
    answer: "Quy trình tiêu chuẩn bao gồm 4 bước: 1. Khám phá (Discovery) - Hiểu rõ bài toán. 2. Lập kế hoạch (Strategy) - Đề xuất giải pháp. 3. Thực thi (Execution) - Code và Design. 4. Bàn giao & Tối ưu (Delivery & Optimization)."
  },
  {
    question: "Hình thức thanh toán như thế nào?",
    answer: "Đối với Custom Project, thanh toán được chia làm 2 đợt: 50% trước khi bắt đầu dự án và 50% sau khi hoàn tất nghiệm thu. Các gói định kỳ (Weekly/Monthly) yêu cầu thanh toán toàn bộ trước mỗi chu kỳ."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 md:py-32 bg-black border-t border-white/5 content-defer">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">Câu Hỏi Thường Gặp</h2>
          <p className="text-white/60 text-lg">
            Mọi thắc mắc của bạn về quy trình hợp tác và dịch vụ.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 transition-colors hover:bg-white/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-white/50 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
