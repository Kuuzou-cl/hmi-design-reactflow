import { Handle, Position } from '@xyflow/react';
import reja_img from './img/reja.png';

function RejaNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor:'#000000', top: '52%'}}
                id="b"
                isConnectable={isConnectable}
            />
            <div>
                <div className='reja'>
                    <div className='label'>{data.label}</div>
                    <img src={reja_img} alt='no_img' />                    
                </div>
            </div>
             <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor:'#000000', top: '52%' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default RejaNode;