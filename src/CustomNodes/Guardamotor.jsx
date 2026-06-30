import guardamotor_img from './img/guardamotor.png';


function GuardamotorNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='small_icon'>
                    <img src={guardamotor_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default GuardamotorNode;