"use client";

import React, {useContext} from 'react'
import {ThemeContext} from "@/context/ThemeContext";

export const ThemeProvider = () => {

    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme}>
            ThemeProvider
        </div>
    )
}
