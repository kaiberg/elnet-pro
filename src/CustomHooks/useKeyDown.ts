import React from "react";

export function useKeyDown(key: string, callback: (event: KeyboardEvent) => void) {
    React.useEffect(function () {
        function keyDownListener(event: KeyboardEvent) {
            if (event.key === key) {
                callback(event);
            }
        }

        window.addEventListener('keydown', keyDownListener);
        return function () {
            window.removeEventListener('keydown', keyDownListener);
        }
    }, [key, callback])
}