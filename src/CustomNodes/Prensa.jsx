import prensa_img from './img/prensa.png';


function PrensaNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <img src={prensa_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default PrensaNode;