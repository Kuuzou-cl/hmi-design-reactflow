import filtro_img from './img/filtro.png';

function FiltroNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='filtro'>
                    <img src={filtro_img} alt='no_img' />
                    <div className='label'>{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default FiltroNode;