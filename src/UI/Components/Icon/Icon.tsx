import React from "react";
import * as Icons from "react-feather";

export type IconName = keyof typeof Icons;

export type props = {
    icon: IconName;
} & Icons.IconProps;

export default function Icon({ icon, ...props } : props) {
    const FeatherIcon = Icons[icon];

    return (
        <FeatherIcon strokeWidth={process.env.svgStroke} fill={'currentColor'} height={process.env.iconSize} width={process.env.iconSize} {...props} />
    )
}