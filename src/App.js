import './App.css';
import '@xyflow/react/dist/style.css';
import { ReactFlow, Panel, Controls, Background, useNodesState, useEdgesState, addEdge, applyNodeChanges } from '@xyflow/react';
import { useState, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';

import SideMenu from './CustomComponents/SideMenu.tsx';
import Card from './CustomComponents/Card.tsx';

import CustomEdge from './CustomEdges/CustomEdge.jsx';

import BaseNode from './CustomNodes/Base.jsx';
import TitlePlantNode from './CustomNodes/Title.jsx';
import ArrowNode from './CustomNodes/Arrow.jsx';
import Arrow2Node from './CustomNodes/Arrow2.jsx';
import TextNode from './CustomNodes/Text.jsx';
import VerticeNode from './CustomNodes/Vertice.jsx';

import ActuadorNode from './CustomNodes/Actuador.jsx';
import ActuadorDosificadorNode from './CustomNodes/Actuador_dosificador.jsx';
import AgitadorNode from './CustomNodes/Agitador.jsx';
import AlcalinidadNode from './CustomNodes/PV_v1.jsx';
import BancoUVNode from './CustomNodes/Banco_UV.jsx';
import BarredorNode from './CustomNodes/Barredor.jsx';
import BombaNode from './CustomNodes/Bomba.jsx';
import BombaDosificadoraNode from './CustomNodes/Bomba_dosificadora.jsx';
import CentrifugaNode from './CustomNodes/Centrifuga.jsx';
import ClasificadorNode from './CustomNodes/Clasificador.jsx';
import CloroNode from './CustomNodes/PV_v1.jsx';
import ColorNode from './CustomNodes/PV_v1.jsx';
import CompresorNode from './CustomNodes/Compresor.jsx';
import ConfiguracionNode from './CustomNodes/Configuracion.jsx';
import DecanterNode from './CustomNodes/Decanter.jsx';
import ExtractorNode from './CustomNodes/Extractor.jsx';
import FiltroNode from './CustomNodes/Filtro.jsx';
import FlujoNode from './CustomNodes/PV_v1.jsx';
import FluorNode from './CustomNodes/PV_v1.jsx';
import GolpeArieteNode from './CustomNodes/Golpe_ariete.jsx';
import GeneradorNode from './CustomNodes/Generador.jsx';
import GuardaMotorNode from './CustomNodes/Guardamotor.jsx';
import HidrocarburoNode from './CustomNodes/PV_v1.jsx';
import LSHHNode from './CustomNodes/LSHH.jsx';
import LSHNode from './CustomNodes/LSH.jsx';
import LSMNode from './CustomNodes/LSM.jsx';
import LSLNode from './CustomNodes/LSL.jsx';
import LSLLNode from './CustomNodes/LSLL.jsx';
import MotorNode from './CustomNodes/Motor.jsx';
import MotovibradorNode from './CustomNodes/Motovibrador.jsx';
import NivelNode from './CustomNodes/Nivel.jsx';
import NivelV2Node from './CustomNodes/Nivel_v2.jsx';
import OxigenoNode from './CustomNodes/PV_v1.jsx';
import PartidoSuaveNode from './CustomNodes/Partido_suave.jsx';
import PHNode from './CustomNodes/PV_v1.jsx';
import PLTANode from './CustomNodes/PLTA';
import PLCNode from './CustomNodes/PLC';
import PMNode from './CustomNodes/PM';
import PrensaNode from './CustomNodes/Prensa.jsx';
import PresionNode from './CustomNodes/PV_v1.jsx';

import PSLNode from './CustomNodes/PSL.jsx';
import RejaNode from './CustomNodes/Reja.jsx';
import SopladorNode from './CustomNodes/Soplador.jsx';
import TableroNode from './CustomNodes/Tablero.jsx';
import TamborNode from './CustomNodes/Tambor.jsx';
import TamizNode from './CustomNodes/Tamiz.jsx';
import TemperaturaNode from './CustomNodes/PV_v1.jsx';
import TornilloNode from './CustomNodes/Tornillo.jsx';
import TurbiedadNode from './CustomNodes/PV_v1.jsx';
import UVNode from './CustomNodes/UV.jsx';
import ValvulaAnalogaNode from './CustomNodes/Valvula_analoga.jsx';
import ValvulaDiscretaNode from './CustomNodes/Valvula_discreta.jsx';
import VDFNode from './CustomNodes/VDF.jsx';
import VelocidadNode from './CustomNodes/PV_v1.jsx';
import VibracionNode from './CustomNodes/PV_v1.jsx';
import VoltajeNode from './CustomNodes/PV_v1.jsx';

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
  arrow2: Arrow2Node,  
  text: TextNode,
  vertice: VerticeNode,
  title: TitlePlantNode,
  
  actuador: ActuadorNode,
  actuador_dosificador: ActuadorDosificadorNode,
  agitador: AgitadorNode,
  alcalinidad: AlcalinidadNode,
  banco_uv: BancoUVNode,
  barredor: BarredorNode,
  bomba: BombaNode,
  bomba_dosificadora: BombaDosificadoraNode,
  centrifuga: CentrifugaNode,
  clasificador: ClasificadorNode,
  cloro: CloroNode,
  color: ColorNode,
  compresor: CompresorNode,
  configuracion: ConfiguracionNode,
  decanter: DecanterNode,
  extractor: ExtractorNode,
  filtro: FiltroNode,
  flujo: FlujoNode,
  fluor: FluorNode,
  golpe_ariete: GolpeArieteNode,
  generador: GeneradorNode,
  guardamotor: GuardaMotorNode,
  hidrocarburo: HidrocarburoNode,
  lshh: LSHHNode,
  lsh: LSHNode,
  lsm: LSMNode,
  lsl: LSLNode,
  lsll: LSLLNode,
  motor: MotorNode,
  motovibrador: MotovibradorNode,
  nivel: NivelNode,
  nivel_v2: NivelV2Node,
  oxigeno: OxigenoNode,
  partidosuave: PartidoSuaveNode,
  ph: PHNode,
  plta: PLTANode,
  plc: PLCNode,
  pm: PMNode,
  prensa: PrensaNode,
  presion: PresionNode,
  psl: PSLNode,
  reja: RejaNode,
  soplador: SopladorNode,
  tablero: TableroNode,
  tambor: TamborNode,
  tamiz: TamizNode,
  temperatura: TemperaturaNode,
  tornillo: TornilloNode,
  turbiedad: TurbiedadNode,
  uv: UVNode,
  valvula_analoga: ValvulaAnalogaNode,
  valvula_discreta: ValvulaDiscretaNode,
  vdf: VDFNode,
  vibracion: VibracionNode,
  velocidad: VelocidadNode,
  voltaje: VoltajeNode,  
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
    console.log(node);
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
