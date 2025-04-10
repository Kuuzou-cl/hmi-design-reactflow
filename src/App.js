import './App.css';
import '@xyflow/react/dist/style.css';
import { ReactFlow, Panel, Controls, Background, useNodesState, useEdgesState, addEdge, applyNodeChanges } from '@xyflow/react';
import { useState, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';

import SideMenu from './CustomComponents/SideMenu.tsx';
import Card from './CustomComponents/Card.tsx';

import CustomEdge from './CustomEdges/CustomEdge';

import BaseNode from './CustomNodes/Base';
import ArrowNode from './CustomNodes/Arrow';
import TitleNode from './CustomNodes/Title';
import VerticeNode from './CustomNodes/Vertice';

import ActuadorNode from './CustomNodes/Actuador.jsx';
import AgitadorNode from './CustomNodes/Agitador.jsx';
import AlcalinidadNode from './CustomNodes/Alcalinidad.jsx';
import BastidorNode from './CustomNodes/Bastidor.jsx';
import BombaAireadoraNode from './CustomNodes/Bomba_aireadora.jsx';
import BombaDosificadoraNode from './CustomNodes/Bomba_dosificadora.jsx';
import BombaElevadora from './CustomNodes/Bomba_elevadora.jsx';
import BombaHorometro from './CustomNodes/Bomba_horometro.jsx';
import BombaLectura from './CustomNodes/Bomba_lectura.jsx';
import BombaLodo from './CustomNodes/Bomba_lodo.jsx';
import BombaPartidaDirecta from './CustomNodes/Bomba_partida_directa.jsx';
import BombaPartidaSuave from './CustomNodes/Bomba_partida_suave.jsx';
import BombaTransvasije from './CustomNodes/Bomba_transvasije.jsx';
import BombaVDF from './CustomNodes/Bomba_vdf.jsx';
import BoquillaNode from './CustomNodes/Boquilla.jsx';
import CalefactorNode from './CustomNodes/Calefactor.jsx';
import EngineNode from './CustomNodes/Engine.jsx';
import PVNode from './CustomNodes/PV_v1.jsx';
import CompresorNode from './CustomNodes/Compresor.jsx';
import DesarenadorNode from './CustomNodes/Desarenador.jsx';
import DosificadorVolumetricoNode from './CustomNodes/Dosificador_volumetrico.jsx';
import FiltroNode from './CustomNodes/Filtro.jsx';
import GeneradorNode from './CustomNodes/Generador.jsx';
import LSHHNode from './CustomNodes/LSHH';
import LSHNode from './CustomNodes/LSH';
import LSLNode from './CustomNodes/LSL';
import LSLLNode from './CustomNodes/LSLL';
import LevelNode from './CustomNodes/Level';
import MotorNode from './CustomNodes/Motor.jsx';
import PLTANode from './CustomNodes/PLTA';
import PLCNode from './CustomNodes/PLC';
import PMNode from './CustomNodes/PM';
import PSHNode from './CustomNodes/PSH';
import PSLNode from './CustomNodes/PSL';
import RejaNode from './CustomNodes/Reja.jsx';
import ValvAnalogaNode from './CustomNodes/Valvula_analoga.jsx';
import ValvDiscretaNode from './CustomNodes/Valvula_discreta.jsx';
import UPSNode from './CustomNodes/UPS.jsx';


import BombaNode from './CustomNodes/Bomba.jsx';
import FlowTotNode from './CustomNodes/Flow_tot.jsx';
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
  base: BaseNode,
  arrow: ArrowNode,
  title: TitleNode,
  vertice: VerticeNode,
  
  actuador: ActuadorNode,
  agitador: AgitadorNode,
  alcalinidad: AlcalinidadNode,
  bastidor: BastidorNode,
  bomba: BombaNode,
  aireadora: BombaAireadoraNode,
  dosificadora: BombaDosificadoraNode,
  bomba_elevadora: BombaElevadora,
  bomba_horometro: BombaHorometro,
  bomba_lectura: BombaLectura,
  bomba_lodo: BombaLodo,
  bomba_partida_directa: BombaPartidaDirecta,
  bomba_partida_suave: BombaPartidaSuave,
  bomba_transvasije: BombaTransvasije,
  bomba_vdf: BombaVDF,
  boquilla: BoquillaNode,
  calefactor: CalefactorNode,
  clasificador: EngineNode,
  cloro: PVNode,
  color: PVNode,
  compactador: EngineNode,
  compresor: CompresorNode,
  conductividad: PVNode,
  configuracion: EngineNode,
  decantador: EngineNode,
  desarenador: DesarenadorNode,
  dosificador_volumetrico: DosificadorVolumetricoNode,
  extractor: EngineNode,
  filtro: FiltroNode,
  flujo: PVNode,
  fluor: PVNode,
  gpel: GeneradorNode,
  hidrocarburo: PVNode,
  lshh: LSHHNode,
  lsh: LSHNode,
  lsl: LSLNode,
  lsll: LSLLNode,
  motor: EngineNode,
  level: LevelNode,
  oxigeno: PVNode,
  paleta: MotorNode,
  ph: PVNode,
  plta: PLTANode,
  plc: PLCNode,
  pm: PMNode,
  oxidacion: PVNode,
  prensa: MotorNode,
  presion: PVNode,
  psh: PSHNode,
  psl: PSLNode,
  reja: RejaNode,
  sedimentador: EngineNode,
  solidos_disueltos: PVNode,
  solidos_suspendidos: PVNode,
  soplador:BombaAireadoraNode,
  tablero: EngineNode,
  tambor: MotorNode,
  tamiz: MotorNode,
  temperatura: PVNode,
  tornillo: MotorNode,
  turbiedad: PVNode,
  ups: UPSNode,
  valvula_analoga: ValvAnalogaNode,
  valvula_discreta: ValvDiscretaNode,
  vdf: EngineNode,
  voltaje: PVNode,


  flow_tot: FlowTotNode,
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
