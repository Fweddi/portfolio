import React from "react";
import { Navigation, Header, Biography, Projects } from "./components/index";
import { infoObject, changeInfo } from "./utils/index";

const App = () => {
    const [info, setInfo] = React.useState(infoObject);

    React.useEffect(() => {
        const redactedTimeout = window.setTimeout(changeInfo, 17000);
        return () => window.clearTimeout(redactedTimeout);
    }, [])

    return (
        <div>
        <Navigation/>
        <Header info={info}/>
        <Biography/>
        <Projects/>
        </div>
    );
}

export default App;