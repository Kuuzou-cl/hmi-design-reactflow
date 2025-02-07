import './App.css';
import '@xyflow/react/dist/style.css';
import { ReactFlow, Panel, Controls, Background, useNodesState, useEdgesState, addEdge, applyNodeChanges } from '@xyflow/react';
import { useState, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';

import SideMenu from './CustomComponents/SideMenu.tsx';
import Card from './CustomComponents/Card.tsx';

import CustomEdge from './CustomEdges/CustomEdge';

import VerticeNode from './CustomNodes/Vertice';
import TitleNode from './CustomNodes/Title';
import ArrowNode from './CustomNodes/Arrow';
import BaseNode from './CustomNodes/Base';
import BombNode from './CustomNodes/Bomb';
import GPELNode from './CustomNodes/GPEL';
import LevelNode from './CustomNodes/Level';
import FlowNode from './CustomNodes/Flow';
import FlowTotNode from './CustomNodes/Flow_tot.jsx';
import LSHHNode from './CustomNodes/LSHH';
import LSHNode from './CustomNodes/LSH';
import LSLNode from './CustomNodes/LSL';
import LSLLNode from './CustomNodes/LSLL';
import PLCNode from './CustomNodes/PLC';
import PLTANode from './CustomNodes/PLTA';
import PMNode from './CustomNodes/PM';
import TBLRNode from './CustomNodes/TBLR';
import TrendNode from './CustomNodes/Trend';

const initialNodes = [
  {
    id: '0',
    data: { label: 'Pantalla 1' },
    position: { x: 0, y: 0 },
    draggable: false,
    zIndex: 1,
    type: 'base'
  }
];

const initialEdges = [
];

const edgeTypes = {
  'custom-edge': CustomEdge,
};

const nodeTypes = {
  vertice: VerticeNode,
  title: TitleNode,
  arrow: ArrowNode,
  base: BaseNode,
  bomb: BombNode,
  gpel: GPELNode,
  level: LevelNode,
  flow: FlowNode,
  flow_tot: FlowTotNode,
  lshh: LSHHNode,
  lsh: LSHNode,
  lsl: LSLNode,
  lsll: LSLLNode,
  plc: PLCNode,
  plta: PLTANode,
  pm: PMNode,
  tblr: TBLRNode,
  trend: TrendNode,
};

function App() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [cookies, setCookie] = useCookies(['last-diagram']);
  const [proyectName, setProyectName] = useState('Proyecto HMI');

  useEffect(() => {
    const lastName = cookies['savedProyectName'];
    const lastNodes = cookies['savedNodes'];
    const lastEdges = cookies['savedEdges'];

    if ((lastNodes && lastNodes.length !== nodes.length) || (lastEdges && lastEdges.length !== edges.length) ||  (lastName && lastName !== proyectName)) {
      const userResponse = window.confirm("¿Deseas cargar el último diagrama guardado?");
      if (userResponse) {
        setProyectName(lastName);
        setNodes(lastNodes);
        setEdges(lastEdges);
      }else{
        setProyectName('Proyecto HMI');
        setCookie('savedProyectName', proyectName);
      }
    }
  }, []);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: 'custom-edge' };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
    setCookie('savedEdges', edges)
  );

  const addNode = (nodeType, tagName) => {
    let newId = nodes.length;

    let newNode = {}

    if (nodeType === 'base') {
      newNode = {
        id: newId.toString(),
        data: { label: tagName },
        position: { x: 0, y: 0 },
        draggable: true,
        zIndex: -1,
        type: nodeType,
      };
    } else {
      newNode = {
        id: newId.toString(),
        data: { label: tagName },
        position: { x: 0, y: 0 },
        draggable: true,
        zIndex: 1,
        type: nodeType,
      };
    }

    setNodes((nds) => nds.concat(newNode));

  };

  const onNodesChange = (changes) => {
    setNodes((nds) => {
      const updatedNodes = applyNodeChanges(changes, nds);
      setCookie('savedNodes', updatedNodes);
      return updatedNodes;
    });
  };

  const changeNameNode = (nodeId, value) => {
    setNodes((nds) => {
      const updatedNodes = nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              label: value,
            },
          };
        }
        return node;
      });
      setCookie('savedNodes', updatedNodes);
      return updatedNodes;
    });
  };

  const changeLockNode = (nodeId, value) => {
    setNodes((nds) => {
      const updatedNodes = nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            draggable: value,
          };
        }
        return node;
      });
      setCookie('savedNodes', updatedNodes);
      return updatedNodes;
    });
  };

  const deleteNode = (node) => {
    setNodes((nds) => {
      const updatedNodes = nds.filter((nd) => nd.id !== node.id);
      setCookie('savedNodes', updatedNodes);
      return updatedNodes;
    });
    setEdges((eds) => {
      const updatedEdges = eds.filter((edge) => edge.source !== node.id && edge.target !== node.id);
      setCookie('savedEdges', updatedEdges);
      return updatedEdges;
    });
  };
  
  const exportData = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = date + "-" + month + "-" + year;

    let diagramData = { proyectName:proyectName ,nodesExport: nodes, edgesExport: edges, date: currentDate };

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(diagramData)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = proyectName + ".json";

    link.click();
  };

  const importData = (jsonData) => {
    setProyectName(jsonData.proyectName);
    setNodes(jsonData.nodesExport);
    setEdges(jsonData.edgesExport);
  };

  return (
    <div className="App">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        connectionMode="loose"
        style={{ backgroundColor: "#F7F9FB" }}
      >
        <Panel position="top-left">
          <SideMenu setCookie={setCookie} proyectName={proyectName} setProyectName={setProyectName} addNode={addNode} deleteNode={deleteNode} changeNameNode={changeNameNode} changeLockNode={changeLockNode} />
        </Panel>
        <Panel position="bottom-right"><Card proyectName={proyectName} exportData={exportData} importData={importData} /></Panel>
        <Background />
        <Controls position='top-right' orientation='horizontal' showFitView={false} showInteractive={false} />
      </ReactFlow>
    </div>
  );
}

export default App;
