export const debounce = (callback: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>

    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...args), delay)
    }
}

export const formatTitle = (title: string) => title.split("_").join(" ")