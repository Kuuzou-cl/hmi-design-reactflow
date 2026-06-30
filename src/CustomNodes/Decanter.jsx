import decanter_img from './img/decanter.png';


function DecanterNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <div className='label'>{data.label}</div>
                    <img src={decanter_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default DecanterNode;