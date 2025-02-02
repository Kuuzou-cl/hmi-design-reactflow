import lshh_img from './img/LSHH.png';


function LSHHNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='alarm_level'>
                    <img src={lshh_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default LSHHNode;