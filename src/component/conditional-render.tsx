import React from 'react'

export default function ConditionalRender (props: IConditionalRenderProps) {
     
    return <>
        { props.condition ? props.children : props.renderOnFail }
    </>
}

interface IConditionalRenderProps {
    children: any
    condition : boolean | undefined | null
    renderOnFail?: any
}