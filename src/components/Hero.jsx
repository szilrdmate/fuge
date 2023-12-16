import React from "react"
import { useTranslation } from "react-i18next";

const Hero = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <>
            <div className="hero-wrapper">
                <h1>{t("home.body")}</h1>
            </div>
            <div className="grid-wrapper">
                <div className="nested-grid">
                    <div className="grid-item">
                        <h1>OUR STORY</h1>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                </div>
                <div className="nested-grid">
                    <div className="grid-item">
                        <h1>OUR NEWS</h1>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                </div>
                <div className="nested-grid">
                    <div className="grid-item">
                        <h1>OUR TEAM</h1>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                </div>
            </div>
        </>
    )
}

export default Hero;