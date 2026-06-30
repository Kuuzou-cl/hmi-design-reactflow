import banco_uv_img from './img/banco-uv.png';


function BancoUVNode({data}) {

    return (
        <div className="text-updater-node">
            <div>
                <div className='banco_uv'>
                    <div className='label'>{data.label}</div>
                    <img src={banco_uv_img} alt='no_img' />
                </div>
            </div>
        </div>
    );
}

export default BancoUVNode;