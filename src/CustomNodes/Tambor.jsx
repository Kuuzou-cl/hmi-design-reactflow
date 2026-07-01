import { Handle, Position } from '@xyflow/react';
import tambor_img from './img/tambor.png';


function TamborNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor: '#000000', left: '54%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '32%' }}
                id="b"
                isConnectable={isConnectable}
            />
            <div>
                <div className='object'>
                    <img src={tambor_img} alt='no_img' />
                    <div>{data.label}</div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor: '#000000', left: '54%' }}
                id="c"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor: '#000000', top: '32%' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default TamborNode;