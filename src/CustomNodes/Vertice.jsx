import { Handle, Position } from '@xyflow/react';

import GamepadIcon from '@mui/icons-material/Gamepad';

function BombNode({ isConnectable }) {

    return (
        <div className="text-updater-node vertice_node">
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#ebebeb', borderColor: '#000000' }}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ebebeb', borderColor: '#000000' }}
                id="b"
                isConnectable={isConnectable}
            />
            <GamepadIcon className='vertice'/>
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#ebebeb', borderColor: '#000000' }}
                id="c"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#ebebeb', borderColor: '#000000' }}
                id="d"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default BombNode;