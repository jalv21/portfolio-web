export default function TechStackBlocks({ stackItems }: { stackItems: ITechStack[] }) {
    return (
        <div className="flex gap-4 flex-wrap items-center">
            {stackItems.map((item) => (
                <StackItem name={item.name}/>
            ))}
        </div>
    );
}


export interface ITechStack {
    name: string;
}
const StackItem = (props: ITechStack) => {
    return (
        <div className="flex gap-2 items-center p-2">
            <p>{props.name}</p>
        </div>
    );
}