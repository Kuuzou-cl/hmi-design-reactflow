import motor_img from './img/motor.png';


function MotorNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <div>{data.label}</div>
                    <img src={motor_img} alt='no_img' />                    
                </div>
            </div>
        </div>
    );
}

export default MotorNode;