import { useEffect, useState } from "react";

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'dark' : 'light');
        root.classList.add(darkMode ? 'light' : 'dark');
    }, [darkMode]);

    return (
        <div className="flex items-center justify-center h-full">
            <label className="relative inline-block w-12 h-6 align-middle select-none mr-[22px]">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    className="absolute opacity-0 w-0 h-0"
                />
                <span className="slider block w-full h-full bg-gray-400 dark:bg-gray-700 rounded-full cursor-pointer"></span>
                <span
                    className={`dot absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${darkMode ? 'translate-x-6' : ''}`}
                ></span>
            </label>
        </div>
    );
}

export default ThemeToggle;
