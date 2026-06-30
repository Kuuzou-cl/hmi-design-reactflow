import { Handle, Position } from '@xyflow/react';
import nivel_img from './img/nivel-v2.png';


function NivelNode({ data, isConnectable }) {

    return (
        <div className="text-updater-node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'13.5%' }}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'84.5%' }}
                id="b"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor:'#000000', top: '11.5%' }}
                id="c"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor:'#000000', top: '86.5%' }}
                id="d"
                isConnectable={isConnectable}
            />
            <div>
                <div className='level'>
                    <div className='label'>{data.label}</div>
                    <img src={nivel_img} alt='no_img' />
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'13.5%' }}
                id="e"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor:'#000000', left:'84.5%' }}
                id="f"
                isConnectable={isConnectable}
            />
             <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor:'#000000' , top: '11.5%' }}
                id="g"
                isConnectable={isConnectable}
            />
             <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor:'#000000', top: '86.5%' }}
                id="h"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default NivelNode;