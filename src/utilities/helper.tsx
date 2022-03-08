const componentRepeater = (component: any, timesRepeated: number) => {
    let componentRepeated = [];
    for (let i = 0; i < timesRepeated; i++) {
        componentRepeated.push(component);
    }
    return componentRepeated;
};

export { componentRepeater };
