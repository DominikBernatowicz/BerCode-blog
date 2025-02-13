
export type ColorType = 'amber' | 'yellow' | 'sky' | 'orange' | 'blue' | 'darkblue' | 'indigo' | 'fuchsia' | 'lime' | 'cyan' | 'violet'

export const findBgColor = (color: ColorType, withHoverGroup?: boolean, sufix = '' ) => {
    return color === 'amber' && (!!withHoverGroup ?  `bg-amber-500 group-hover:bg-amber-400` : `bg-amber-500${sufix}`) ||
        color === 'yellow' && (!!withHoverGroup ?  `bg-yellow-500 group-hover:bg-yellow-400` : `bg-yellow-500${sufix}`) ||
        color === 'sky' && (!!withHoverGroup ?  `bg-sky-500 group-hover:bg-sky-400` : `bg-sky-500${sufix}`) ||
        color === 'orange' && (!!withHoverGroup ?  `bg-orange-500 group-hover:bg-orange-400` : `bg-orange-500${sufix}`) ||
        color === 'blue' && (!!withHoverGroup ?  `bg-blue-500 group-hover:bg-blue-400` : `bg-blue-500${sufix}`) ||
        color === 'darkblue' && (!!withHoverGroup ?  `bg-blue-700 group-hover:bg-blue-600` : `bg-blue-700${sufix}`) ||
        color === 'indigo' && (!!withHoverGroup ?  `bg-indigo-500 group-hover:bg-indigo-400` : `bg-indigo-500${sufix}`) ||
        color === 'fuchsia' && (!!withHoverGroup ?  `bg-fuchsia-500 group-hover:bg-fuchsia-400` : `bg-fuchsia-500${sufix}`) ||
        color === 'lime' && (!!withHoverGroup ?  `bg-lime-500 group-hover:bg-lime-400` : `bg-lime-500${sufix}`) ||
        color === 'cyan' && (!!withHoverGroup ?  `bg-cyan-500 group-hover:bg-cyan-400` : `bg-cyan-500${sufix}`) ||
        color === 'violet' && (!!withHoverGroup ?  `bg-violet-500 group-hover:bg-violet-400` : `bg-violet-500${sufix}`) 
}

export const findTextColor = (color: ColorType, withHoverGroup?: boolean) => {
    return color === 'amber' && (!!withHoverGroup ?  `text-amber-500 group-hover:text-amber-400` : `text-amber-500`) ||
        color === 'yellow' && (!!withHoverGroup ?  `text-yellow-500 group-hover:text-yellow-400` : `text-yellow-500`) ||
        color === 'sky' && (!!withHoverGroup ?  `text-sky-500 group-hover:text-sky-400` : `text-sky-500`) ||
        color === 'orange' && (!!withHoverGroup ?  `text-orange-500 group-hover:text-orange-400` : `text-orange-500`) ||
        color === 'blue' && (!!withHoverGroup ?  `text-blue-500 group-hover:text-blue-400` : `text-blue-500`) ||
        color === 'darkblue' && (!!withHoverGroup ?  `text-blue-500 group-hover:text-blue-400` : `text-blue-600`) ||
        color === 'indigo' && (!!withHoverGroup ?  `text-indigo-500 group-hover:text-indigo-400` : `text-indigo-500`) ||
        color === 'fuchsia' && (!!withHoverGroup ?  `text-fuchsia-500 group-hover:text-fuchsia-400` : `text-fuchsia-500`) ||
        color === 'lime' && (!!withHoverGroup ?  `text-lime-500 group-hover:text-lime-400` : `text-lime-500`) ||
        color === 'cyan' && (!!withHoverGroup ?  `text-cyan-500 group-hover:text-cyan-400` : `text-cyan-500`) ||
        color === 'violet' && (!!withHoverGroup ?  `text-violet-500 group-hover:text-violet-400` : `text-violet-500`)
}