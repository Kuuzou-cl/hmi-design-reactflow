import lsl_img from './img/LSL.png';


function LSLNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className={'alarm_level'}>
                    <img src={lsl_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default LSLNode;