import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";

import { selectLanguage, selectTheme } from "./store/ui/uiSelectors";
import { messages } from "./static/locales";
import themes from "./static/themes/themes";
import Results from "./pages/results";

function App() {
    const language = useSelector(selectLanguage);
    const theme = useSelector(selectTheme);
    const langMessages = useMemo(() => messages[language], [language]);

    return (
        <ThemeProvider theme={themes[theme]}>
            <IntlProvider locale={language} messages={langMessages}>
                <Results />
            </IntlProvider>
        </ThemeProvider>
    );
}

export default App;
