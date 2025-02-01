import FAQ from "../model/faq.schema.js";
import translateText from "../utils/translator.js";

// create faq
export const createFaq = async (req, res) => {
    try {
        const { question, answer } = req.body;

        const faq = new FAQ({
            question: {
                default: question,
                translations: {
                    bn: await translateText(question, "bn"),
                    hi: await translateText(question, "hi"),
                },
            },
            answer: {
                default: answer,
                translations: {
                    bn: await translateText(answer, "bn"),
                    hi: await translateText(answer, "hi"),
                }
            }
        });

        await faq.save();

        res.status(201).json({
            message: "FAQ created successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Failed to create FAQ"
        });
    }
};

// get faqs
export const getFaqs = async (req, res) => {
    try {
        const { lang } = req.query;
        
        const response = await FAQ.find({});
        let requiredLangResponse= [];

        if (lang) {
            requiredLangResponse = response.map((faq) => {
                return {  
                    question: faq.question.translations[lang],
                    answer: faq.answer.translations[lang],
                };
            });
        }

        const data = response.map((faq) => {
            return { 
                question: faq.question.default,
                answer: faq.answer.default,
            };
        });

        res.status(200).json({
            data: data,
            translatedData: requiredLangResponse
        });
    } catch (err) {
        res.status(500).json({ 
            error: "Server error" 
        });
    }
};
