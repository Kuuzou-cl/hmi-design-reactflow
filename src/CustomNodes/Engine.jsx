import engine_img from './img/engine.png';


function EngineNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={engine_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default EngineNode;