import lsh_img from './img/LSH.png';


function LSHNode() {

    return (
        <div className="text-updater-node">
            <div>
                <div className='alarm_level'>
                    <img src={lsh_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default LSHNode;