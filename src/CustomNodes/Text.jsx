function TextNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='only_text_node'>
                    <div className='label'>{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default TextNode;