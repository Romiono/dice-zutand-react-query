
interface ITag {
    tag: string,
}
const Tag = ({tag}: ITag) => {
    return (
        <div className={'min-w-10 px-2 py-1 flex justify-center items-center text-xs rounded-xl bg-green-200 text-neutral-600 font-bold '}>
            {tag}
        </div>
    );
};

export default Tag;