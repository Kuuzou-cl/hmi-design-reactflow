import configuracion_img from './img/configuracion.png';


function ConfiguracionNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={configuracion_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default ConfiguracionNode;