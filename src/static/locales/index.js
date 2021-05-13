import flatten from "flat";

import messages_en from "./en.json";

const supportedLanguages = [
    {
        name: "english",
        key: "en",
    },
];

const messages = {
    en: flatten(messages_en),
};

export { messages, supportedLanguages };
