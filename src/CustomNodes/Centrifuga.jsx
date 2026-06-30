import centrifuga_img from './img/centrifuga.png';


function CentrifugaNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <img src={centrifuga_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default CentrifugaNode;