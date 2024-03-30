import React from 'react';
import {SparklesCore} from "@/components/Sparkles/SparkleCore/SparkleCore";
import s from "./Sparkles.module.scss";

const Sparkles = () => {
    return (
        <div
            className={s.sparkleWrapper}
        >
            <SparklesCore
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className={s.sparkle}
                particleColor="#FFD400FF"
            />
        </div>
    );
};

export default Sparkles;