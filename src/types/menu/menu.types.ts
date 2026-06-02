import { JSX } from "react"

export type MenuTabDto = {
    label: string,
    index: number,
    childrenComponent: () => JSX.Element
}