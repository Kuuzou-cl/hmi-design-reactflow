import { Handle, Position } from '@xyflow/react';
import bomb_img from './img/bomb_d.png';

function BombaLecturaNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'43.5%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor:'#000000'}}
                id="b"
                isConnectable={isConnectable}
            />
            <div>
                <div className='bomb'>
                    <img src={bomb_img} alt='no_img' />
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
             <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor:'#000000' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default BombaLecturaNode;