import title_img from './img/Title.png';


function TitleNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='title_node'>
                    <img src={title_img} alt='no_img' />
                    <div className='label'>{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default TitleNode;