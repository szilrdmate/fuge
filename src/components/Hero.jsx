import React from "react"
import { useTranslation } from "react-i18next";

const Hero = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <div className="hero-wrapper">
            <h1>{t("home.body")}</h1>
        </div>
    )
}

export default Hero;