import golpe_ariete_img from './img/golpe-ariete.png';


function GolpeArieteNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <div className='label'>{data.label}</div>
                    <img src={golpe_ariete_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default GolpeArieteNode;