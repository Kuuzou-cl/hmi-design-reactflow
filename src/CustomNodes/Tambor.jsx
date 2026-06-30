import tambor_img from './img/tambor.png';


function TamborNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='object'>
                    <img src={tambor_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default TamborNode;