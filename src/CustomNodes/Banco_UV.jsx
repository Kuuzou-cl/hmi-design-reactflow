import { Handle, Position } from '@xyflow/react';
import banco_uv_img from './img/banco-uv.png';


function BancoUVNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor: '#000000', left: '47%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '55%' }}
                id="b"
                isConnectable={isConnectable}
            />
            <div>
                <div className='banco_uv'>
                    <div className='label'>{data.label}</div>
                    <img src={banco_uv_img} alt='no_img' />
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor: '#000000', left: '47%' }}
                id="c"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '55%' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default BancoUVNode;