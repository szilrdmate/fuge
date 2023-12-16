import React from "react"
import { useTranslation } from "react-i18next";

const Hero = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <>
            <div className="hero-wrapper">
                
            </div>

            <div className="grid-wrapper">
                <div className="nested-grid">
                    <div className="grid-item">
                        <h1>OUR STORY</h1>
                    </div>
                    <div className="grid-item">
                        <h1>MKB</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, est quas veniam consequatur iusto aspernatur hic amet minus repellat soluta minima facere </p>
                    </div>
                    <div className="grid-item">
                        <h1>MKB</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, est quas veniam consequatur iusto aspernatur hic amet minus repellat soluta minima facere </p>
                    </div>
                </div>
                <div className="nested-grid">
                    <div className="grid-item">
                        <h1>{t("home.body")}</h1>
                    </div>
                    <div className="grid-item">
                        <h1>MKB</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, est quas veniam consequatur iusto aspernatur hic amet minus repellat soluta minima facere </p>
                    </div>
                    <div className="grid-item">
                        <h1>MKB</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, est quas veniam consequatur iusto aspernatur hic amet minus repellat soluta minima facere </p>
                    </div>
                </div>
                <div className="nested-grid">
                    <div className="grid-item">
                        <h1>OUR TEAM</h1>
                    </div>
                    <div className="grid-item">
                        <h1>MKB</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, est quas veniam consequatur iusto aspernatur hic amet minus repellat soluta minima facere </p>
                    </div>
                    <div className="grid-item">
                        <h1>MKB</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, est quas veniam consequatur iusto aspernatur hic amet minus repellat soluta minima facere </p>
                    </div>
                </div>
            </div>

            <div id="social" className="social-wrapper">

            </div>
        </>
    )
}

export default Hero;