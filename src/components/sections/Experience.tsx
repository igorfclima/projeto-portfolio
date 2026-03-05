"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Experience() {
    const { t, language } = useLanguage();

    return (
        <section id="experience" className="py-20 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Título da Seção */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-text-main tracking-wide mb-16 text-center md:text-left"
                >
                    {t.experience.title}
                </motion.h2>

                {/* Container Principal da Timeline */}
                <div className="relative">
                    {/* A Linha Vertical (Na esquerda no Mobile, no centro no Desktop) */}
                    <div className="absolute left-2.25 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {/* ---------------------------------------------------- */}
                        {/* EXPERIÊNCIA 1: Vale Base Metals (Lado Direito no PC) */}
                        {/* ---------------------------------------------------- */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            className="relative grid grid-cols-1 md:grid-cols-2"
                        >
                            {/* Bolinha Azul Centralizada na Linha */}
                            <div className="absolute left-2.25 md:left-1/2 top-2 md:top-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 md:-translate-y-1/2 ring-4 ring-background z-10" />

                            {/* Coluna 1: Espaço vazio na esquerda (Aparece só no PC) */}
                            <div className="hidden md:block" />

                            {/* Coluna 2: Conteúdo na direita */}
                            <div className="pl-12 flex flex-col items-start">
                                <span className="text-sm font-semibold text-muted mb-1">
                                    {language === "pt"
                                        ? "2025 - Atual"
                                        : "2025 - Present"}
                                </span>
                                <h3 className="text-xl font-bold text-text-main">
                                    {t.experience.job1Role}
                                </h3>
                                <span className="text-base text-muted mb-3">
                                    Vale Base Metals
                                </span>
                                <p className="text-sm text-muted leading-relaxed text-left max-w-sm">
                                    {t.experience.job1Desc}
                                </p>
                            </div>
                        </motion.div>

                        {/* ---------------------------------------------------- */}
                        {/* EXPERIÊNCIA 2: MicroUniverso (Lado Esquerdo no PC)   */}
                        {/* ---------------------------------------------------- */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative grid grid-cols-1 md:grid-cols-2"
                        >
                            {/* Bolinha Azul Centralizada na Linha */}
                            <div className="absolute left-2.25 md:left-1/2 top-2 md:top-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 md:-translate-y-1/2 ring-4 ring-background z-10" />

                            {/* Coluna 1: Conteúdo na esquerda */}
                            <div className="pl-12 md:pl-0 md:pr-12 flex flex-col items-start md:items-end">
                                <span className="text-sm font-semibold text-muted mb-1">
                                    2024 - 2025
                                </span>
                                <h3 className="text-xl font-bold text-text-main">
                                    {t.experience.job2Role}
                                </h3>
                                <span className="text-base text-muted mb-3">
                                    MicroUniverso
                                </span>
                                {/* O texto alinha à esquerda no celular, e à direita no PC */}
                                <p className="text-sm text-muted leading-relaxed text-left md:text-right max-w-sm">
                                    {t.experience.job2Desc}
                                </p>
                            </div>

                            {/* Coluna 2: Espaço vazio na direita (Aparece só no PC) */}
                            <div className="hidden md:block" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
