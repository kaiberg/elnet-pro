import React from "react";

export function useDevelopment(callback: any) {
    if(process.env.NODE_ENV !== 'production') {
        return callback;
    }

    return;
}