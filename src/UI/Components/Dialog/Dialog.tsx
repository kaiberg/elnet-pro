'use client'
import React, {useRef} from "react";
import {createPortal} from "react-dom";
import styles from "./styles.module.css";
import {RemoveScroll} from "react-remove-scroll";
import ReactFocusLock from "react-focus-lock";
import {useHasMounted} from "@/CustomHooks/useHasMounted";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export type props = {
    show?: boolean,
    onClose: () => void
    children: React.ReactElement,
    overlayClasses?: string,
    contentClasses?: string
}

export default function Dialog(props: props) {
    const hasMounted = useHasMounted();
    const {show = true} = props;
    if (!show || !hasMounted) {
        return null;
    }

    return (
        <ShowDialog {...props} />
    )
}

function ShowDialog(props: props) {
    const overlayRef = useRef<HTMLDivElement>(null);

    React.useEffect(function () {
        if (!overlayRef.current) {
            throw new Error("OverlayRef is null");
        }
        return createAriaHider(overlayRef.current);

    }, [])

    return createPortal(
        <ReactFocusLock>
            <RemoveScroll>
                <div className={ConcatClasses(styles.overlay, props.overlayClasses)} ref={overlayRef}>
                    <DialogContent {...props} ref={overlayRef}/>
                </div>
            </RemoveScroll>
        </ReactFocusLock>, document.body
    )
}

const DialogContent = React.forwardRef<HTMLDivElement, props>(
    function DialogContent({children, contentClasses, onClose}: props, ref: React.ForwardedRef<HTMLDivElement>) {
        React.useEffect(() => {
            function closeOnEscape(event: KeyboardEvent) {
                if (event.key === "Escape") {
                    console.log("User pressed escape to close dialog");
                    event.stopPropagation();
                    onClose();
                }
            }

            function closeOnClickOutside(event: MouseEvent) {
                if (ref && 'current' in ref && ref.current === event.target) {
                    event.stopPropagation();
                    console.log("User clicked outside dialog");
                    onClose();
                }
            }

            document.addEventListener("keydown", closeOnEscape);
            document.addEventListener("click", closeOnClickOutside);

            return function () {
                document.removeEventListener("keydown", closeOnEscape);
                document.removeEventListener("click", closeOnClickOutside);
            }
        }, [ref, onClose]);

        return (
            <div className={ConcatClasses(styles.content, contentClasses)}>
                {children}
            </div>
        )
    }
);

function createAriaHider(dialogNode: HTMLElement) {
    let originalValues: any[] = [];
    let rootNodes: HTMLElement[] = [];
    let {ownerDocument} = dialogNode;
    console.log("set aria");

    Array.prototype.forEach.call(
        ownerDocument.querySelectorAll("body > *"),
        (node) => {
            const portalNode = dialogNode.parentNode?.parentNode?.parentNode;
            if (node === portalNode) {
                return;
            }
            let attr = node.getAttribute("aria-hidden");
            let alreadyHidden = attr !== null && attr !== "false";
            if (alreadyHidden) {
                return;
            }
            originalValues.push(attr);
            rootNodes.push(node);
            node.setAttribute("aria-hidden", "true");
        }
    );

    return () => {
        console.log("cleanup aria");
        rootNodes.forEach((node, index) => {
            let originalValue = originalValues[index];
            if (originalValue === null) {
                node.removeAttribute("aria-hidden");
            } else {
                node.setAttribute("aria-hidden", originalValue);
            }
        });
    };
}