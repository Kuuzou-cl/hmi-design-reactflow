import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  useReactFlow
} from '@xyflow/react';

import CancelIcon from '@mui/icons-material/Cancel';


export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const straightPath = `M${sourceX},${sourceY} L${targetX},${targetY}`;

  return (
    <>
      <svg>
        <defs>
          <marker
            id="arrowEnd"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
          <marker
            id="arrowStart"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
        </defs>
      </svg>
      <BaseEdge id={id} path={straightPath} style={{ stroke: '#000', strokeWidth: 1 }} markerStart="url(#arrowStart)" markerEnd="url(#arrowEnd)" />
      <EdgeLabelRenderer>
        <CancelIcon style={{
          position: 'absolute',
          transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          pointerEvents: 'all',
          width: '20px',
          height: '20px',
          color: '#ff2727',
        }}
          className="nodrag nopan"
          onClick={() => {
            setEdges((es) => es.filter((e) => e.id !== id));
          }}
        />
      </EdgeLabelRenderer>
    </>
  );
}