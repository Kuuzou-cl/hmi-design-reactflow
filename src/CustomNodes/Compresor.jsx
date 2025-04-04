import { Handle, Position } from '@xyflow/react';
import compresor_img from './img/compresor.png';

function CompresorNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'43.5%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <div>
                <div className='compresor'>
                    <img src={compresor_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'43.5%' }}
                id="c"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default CompresorNode;