import {useEffect, useState} from "react";

const fn = () => {
    const [online, networkStatus] = useState(navigator.onLine);

    useEffect(() => {
        if (window.addEventListener) {
            window.addEventListener("online", () => networkStatus(true), false);
            window.addEventListener("offline", () => networkStatus(false), false);
        } else {
            document.body.ononline = () => networkStatus(true);
            document.body.onoffline = () => networkStatus(false);
        }
    }, []);

    return online;
}
