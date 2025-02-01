import { translate } from '@vitalets/google-translate-api';

const translateText = async (txt, targetLang) => {
    
    try {
        const { text } = await translate(txt, { to: targetLang });

        return text;
    } catch (error) {
        console.error("Translation Error:", error);
        return txt;
    }
};



export default translateText;
