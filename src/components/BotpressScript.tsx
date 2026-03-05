"use client";

import { useEffect } from "react";

/**
 * BotpressScript — Client Component
 * Handles the 30-second OR 30% scroll delay before calling .init()
 */
export function BotpressScript() {
    useEffect(() => {
        let initialized = false;
        let timeoutId: NodeJS.Timeout;

        const injectBotpressConfig = () => {
            if (initialized) return;
            initialized = true;

            const script = document.createElement("script");
            script.src = "https://files.bpcontent.cloud/2026/01/27/19/20260127193141-EUS4744Z.js";
            script.async = true;
            document.body.appendChild(script);

            console.log("LUSH: Botpress v3.6 Sovereign Config Injected (Delayed)");

            // Cleanup listeners once loaded
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };

        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const maxScroll = scrollHeight - clientHeight;

            if (maxScroll > 0) {
                const scrollPercent = (window.scrollY / maxScroll) * 100;
                if (scrollPercent >= 30) {
                    injectBotpressConfig();
                }
            }
        };

        // Hybrid Approach: 20 seconds delay OR 30% scroll
        timeoutId = setTimeout(injectBotpressConfig, 20000);
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup on unmount (though layout component rarely unmounts)
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return null; // Component renders no physical HTML
}

