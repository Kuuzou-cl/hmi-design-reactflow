import clasificador_img from './img/clasificador.png';


function ClasificadorNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <div>{data.label}</div>
                    <img src={clasificador_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default ClasificadorNode;