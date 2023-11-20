import React from "react";

export function useHasMounted() {
    const [hasMounted,SetHasMounted] = React.useState(false);

    React.useEffect(function () {
        SetHasMounted(true);
    },[])

    return hasMounted;
}