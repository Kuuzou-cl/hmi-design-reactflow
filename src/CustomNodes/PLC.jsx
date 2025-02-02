import plc_img from './img/PLC.png';


function PLCNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={plc_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default PLCNode;