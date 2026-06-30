import tornillo_img from './img/tornillo.png';


function TornilloNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <img src={tornillo_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default TornilloNode;