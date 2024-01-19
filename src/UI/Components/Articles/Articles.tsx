'use server'

import {cookies} from "next/headers";
import React, {cache} from "react"
import globalStyles from "@/app/styles.module.css";
import styles from './styles.module.css';
import {
    DISPLAY_LARGE,
    DISPLAY_MEDIUM,
    DISPLAY_SMALL,
    HEADLINE_LARGE,
    HEADLINE_MEDIUM, HEADLINE_SMALL,
    TITLE_LARGE
} from "@/UI/Tokens/Typography";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export type Article = {
    title?: string
    content: React.ReactNode
}

export type ArticlesProps = {
    pageTitle?: string
    articles: Article[]
}

function Articles({pageTitle, articles}: ArticlesProps) {
    const ArticleTitle = pageTitle ? 'h2' : 'h1'

    return (
        <div className={ConcatClasses(globalStyles.maxwidth_wrapper, styles.container)}>
            {pageTitle && <h1 className={ConcatClasses(DISPLAY_SMALL, styles.title)}>
                {pageTitle}
            </h1>}
            {articles.map(({title, content}, index) => (
                <div key={index} className={styles.article}>
                    {title && <ArticleTitle className={ConcatClasses(styles.articleTitle, HEADLINE_MEDIUM)}>{title}</ArticleTitle>}
                    {content}
                </div>
            )
            )}
        </div>
    )
}

export default Articles;