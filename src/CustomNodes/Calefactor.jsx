import calefactor_img from './img/calefactor.png';


function CalefactorNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='pv'>
                    <div className='label'>{data.label}</div>
                    <img src={calefactor_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default CalefactorNode;