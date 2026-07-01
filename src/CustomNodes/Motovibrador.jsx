import motorvibrador_img from './img/motovibrador.png';


function MotorVibradorNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <div>{data.label}</div>
                    <img src={motorvibrador_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default MotorVibradorNode;