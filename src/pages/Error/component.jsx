import React from "react";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import styles from './styles.module.scss'
import { ThemeProvider } from "../../contexts/Theme";

export const ErrorPage = () => {
  return (
    <ThemeProvider>
        <div className={styles.container}>
            <Header className={styles.header} />
            <h1>Page not found</h1>
            <Footer className={styles.footer} />
        </div>
    </ThemeProvider>
  );
};