export const defaultLogo = props => {
    let { name } = props.vault;
    name = (name.split(' ')).map($segment => $segment.substr(0, 1)).join(' ').replace(' ', '+');

    return `https://ui-avatars.com/api/?name=${name}&color=7F9CF5&background=EBF4FF`;
};
